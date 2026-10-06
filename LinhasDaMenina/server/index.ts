import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Pool } from 'pg'

const app = express()
const port = Number(process.env.PORT || 3001)
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_URL?.includes('supabase') ? { rejectUnauthorized: false } : undefined })
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret-in-production'

app.use(express.json())
app.use(cookieParser())

async function bootstrap() {
  await pool.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`)
}

function tokenFor(user: { id: number; email: string }) {
  return jwt.sign(user, jwtSecret, { expiresIn: '7d' })
}

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.cookies.session
  if (!token) return res.status(401).json({ error: 'Não autenticado' })
  try { res.locals.user = jwt.verify(token, jwtSecret); next() }
  catch { return res.status(401).json({ error: 'Sessão inválida' }) }
}

app.post('/api/auth/register', async (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase()
  const password = String(req.body.password || '')
  if (!email || password.length < 8) return res.status(400).json({ error: 'Informe um e-mail e uma senha com pelo menos 8 caracteres.' })
  try {
    const hash = await bcrypt.hash(password, 12)
    const result = await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email', [email, hash])
    const user = result.rows[0]
    res.cookie('session', tokenFor(user), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 7 * 86400000 })
    res.status(201).json({ user })
  } catch (error: any) { res.status(error.code === '23505' ? 409 : 500).json({ error: error.code === '23505' ? 'Este e-mail já está cadastrado.' : 'Não foi possível criar a conta.' }) }
})

app.post('/api/auth/login', async (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase()
  const result = await pool.query('SELECT id, email, password_hash FROM users WHERE email = $1', [email])
  const user = result.rows[0]
  if (!user || !(await bcrypt.compare(String(req.body.password || ''), user.password_hash))) return res.status(401).json({ error: 'E-mail ou senha inválidos.' })
  res.cookie('session', tokenFor({ id: user.id, email: user.email }), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 7 * 86400000 })
  res.json({ user: { id: user.id, email: user.email } })
})

app.post('/api/auth/logout', (_req, res) => { res.clearCookie('session'); res.status(204).end() })
app.get('/api/auth/me', auth, (_req, res) => res.json({ user: res.locals.user }))

app.post('/api/payments/preference', auth, async (req, res) => {
  if (!process.env.MP_ACCESS_TOKEN) return res.status(503).json({ error: 'Mercado Pago ainda não configurado no servidor.' })
  const items = Array.isArray(req.body.items) ? req.body.items : []
  if (!items.length) return res.status(400).json({ error: 'Carrinho vazio.' })
  const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: items.map((item: any) => ({ id: String(item.id), title: String(item.nome), quantity: Number(item.quantidade), unit_price: Number(item.preco), currency_id: 'BRL' })), back_urls: { success: `${process.env.APP_URL}/checkout?status=success`, failure: `${process.env.APP_URL}/checkout?status=failure`, pending: `${process.env.APP_URL}/checkout?status=pending` }, auto_return: 'approved' }),
  })
  const data = await response.json()
  if (!response.ok) return res.status(502).json({ error: 'Mercado Pago recusou a preferência.', details: data })
  res.json({ checkoutUrl: data.init_point, preferenceId: data.id })
})

bootstrap().then(() => app.listen(port, () => console.log(`API disponível em http://localhost:${port}`))).catch((error) => { console.error('Falha ao iniciar API:', error); process.exit(1) })
