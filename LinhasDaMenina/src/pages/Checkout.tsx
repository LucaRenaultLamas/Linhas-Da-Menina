import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCarrinhoContext } from '../context/CarrinhoContext'

export default function Checkout() {
  const { itens } = useCarrinhoContext(); const [error, setError] = useState(''); const navigate = useNavigate()
  useEffect(() => { fetch('/api/auth/me', { credentials: 'include' }).then(r => { if (r.status === 401) navigate('/login') }) }, [navigate])
  async function pagar() { setError(''); const response = await fetch('/api/payments/preference', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ items: itens }) }); const data = await response.json(); if (!response.ok) return setError(data.error || 'Não foi possível iniciar o pagamento.'); window.location.href = data.checkoutUrl }
  return <section className="max-w-3xl mx-auto px-6 py-16"><h1 className="font-titulo text-5xl text-ouro">Pagamento</h1><p className="text-bege mt-5">Você será redirecionado ao ambiente seguro do Mercado Pago para concluir a compra.</p>{error && <p className="text-sangue mt-5">{error}</p>}<button disabled={!itens.length} onClick={pagar} className="mt-10 bg-ouro text-preto px-8 py-3 font-label uppercase tracking-widest disabled:opacity-50">Pagar com Mercado Pago</button><p className="mt-6"><Link to="/carrinho" className="text-ouro">Revisar carrinho</Link></p></section>
}
