import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function SignIn1() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [register, setRegister] = React.useState(false)
  const [personalData, setPersonalData] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  function changeMode(nextRegister: boolean) {
    setRegister(nextRegister); setPersonalData(false); setError('')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('')
    if (register && !personalData) { setPersonalData(true); return }
    setLoading(true)
    try {
      const response = await fetch(`/api/auth/${register ? 'register' : 'login'}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ email, password, name, phone }) })
      const data = await response.json()
      if (!response.ok) { setError(data.error || 'Não foi possível concluir.'); return }
      navigate('/checkout')
    } catch { setError('Não foi possível conectar ao servidor.') }
    finally { setLoading(false) }
  }

  return <main className="relative flex min-h-[calc(100svh-9rem)] items-center justify-center overflow-hidden bg-preto px-4 py-12 sm:px-6">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vinho/35 blur-3xl" />
    <section className="relative z-10 w-full max-w-[29rem] rounded-[2rem] border border-ouro/20 bg-[#16090b]/90 p-1 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="rounded-[1.75rem] border border-white/5 px-6 py-7 sm:px-9 sm:py-9">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-ouro/40 bg-gradient-to-br from-ouro/25 to-sangue/20 text-3xl text-ouro shadow-lg shadow-ouro/10">✦</div>
        <div className="grid grid-cols-2 rounded-xl border border-ouro/15 bg-black/20 p-1" role="tablist" aria-label="Acesso à conta">
          <button type="button" role="tab" aria-selected={!register} onClick={() => changeMode(false)} className={`rounded-lg px-3 py-2.5 font-label text-xs uppercase tracking-widest transition ${!register ? 'bg-ouro text-preto shadow-md' : 'text-bege hover:text-creme'}`}>Entrar</button>
          <button type="button" role="tab" aria-selected={register} onClick={() => changeMode(true)} className={`rounded-lg px-3 py-2.5 font-label text-xs uppercase tracking-widest transition ${register ? 'bg-ouro text-preto shadow-md' : 'text-bege hover:text-creme'}`}>Criar conta</button>
        </div>

        <h1 className="mt-7 font-titulo text-4xl font-semibold text-creme">{register && personalData ? 'Seus dados pessoais' : register ? 'Registrar' : 'Login'}</h1>
        <div className="mt-7 text-base text-bege">{register && personalData ? 'Complete seus dados pessoais para finalizar seu cadastro.' : register ? 'Crie sua conta para acompanhar pedidos e receber novidades.' : 'Entre na sua conta para continuar sua experiência na Linha da Menina.'}</div>
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          {register && personalData ? <>
            <label className="block"><span className="mb-2 block font-label text-xs uppercase tracking-wider text-champanhe/80">Nome completo</span><input required autoFocus value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" className="w-full rounded-xl border border-ouro/20 bg-black/20 px-4 py-3.5 text-creme placeholder-bege/60 outline-none transition focus:border-ouro focus:ring-2 focus:ring-ouro/15" /></label>
            <label className="block"><span className="mb-2 block font-label text-xs uppercase tracking-wider text-champanhe/80">Telefone</span><input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(00) 00000-0000" className="w-full rounded-xl border border-ouro/20 bg-black/20 px-4 py-3.5 text-creme placeholder-bege/60 outline-none transition focus:border-ouro focus:ring-2 focus:ring-ouro/15" /></label>
          </> : <>
            <label className="block"><span className="mb-2 block font-label text-xs uppercase tracking-wider text-champanhe/80">E-mail</span><input required autoComplete="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl border border-ouro/20 bg-black/20 px-4 py-3.5 text-creme placeholder-bege/60 outline-none transition focus:border-ouro focus:ring-2 focus:ring-ouro/15" /></label>
            <label className="block"><span className="mb-2 block font-label text-xs uppercase tracking-wider text-champanhe/80">Senha</span><input required minLength={8} autoComplete={register ? 'new-password' : 'current-password'} type="password" placeholder="Mínimo de 8 caracteres" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-xl border border-ouro/20 bg-black/20 px-4 py-3.5 text-creme placeholder-bege/60 outline-none transition focus:border-ouro focus:ring-2 focus:ring-ouro/15" /></label>
          </>}
          {error && <p role="alert" className="rounded-lg border border-rubi/30 bg-rubi/10 px-3 py-2 text-sm text-rubi">{error}</p>}
          <button disabled={loading} className="w-full rounded-xl bg-gradient-to-r from-ouro to-champanhe px-5 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.2em] text-preto shadow-lg shadow-ouro/10 transition hover:brightness-110 disabled:opacity-60">{loading ? 'Aguarde...' : register && !personalData ? 'Continuar' : register ? 'Concluir cadastro' : 'Entrar na conta'}</button>
        </form>
        {register && personalData && <button type="button" onClick={() => setPersonalData(false)} className="mt-5 w-full text-center text-sm text-bege underline underline-offset-4 hover:text-creme">Voltar aos dados de acesso</button>}
        {!personalData && <p className="mt-7 text-center text-sm text-bege">{register ? 'Já possui uma conta?' : 'Ainda não possui uma conta?'} <button type="button" onClick={() => changeMode(!register)} className="text-champanhe underline underline-offset-4 hover:text-ouro">{register ? 'Entrar' : 'Criar agora'}</button></p>}
        <p className="mt-7 text-center text-sm"><Link to="/carrinho" className="text-ouro hover:text-champanhe">← Voltar ao carrinho</Link></p>
      </div>
    </section>
  </main>
}

export default SignIn1
