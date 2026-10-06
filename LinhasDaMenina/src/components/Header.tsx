import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, UserRound } from 'lucide-react'
import { useCarrinhoContext } from '../context/CarrinhoContext'

const links = [
  { to: '/', label: 'Início' },
  { to: '/loja', label: 'Loja' },
  { to: '/tiragens', label: 'Tiragens' },
  { to: '/como-pedir', label: 'Como pedir' },
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const { itens } = useCarrinhoContext()

  const classeLink = ({ isActive }: { isActive: boolean }) =>
    `font-label text-xs uppercase tracking-[0.2em] transition-colors hover:text-ouro ${
      isActive ? 'text-ouro' : 'text-creme'
    }`

  return (
    <header className="sticky top-0 z-50 bg-preto/90 backdrop-blur border-b border-ouro/20">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setAberto(false)} className="font-titulo text-2xl text-ouro">
          Linhas da <span className="font-script text-3xl text-sangue">Menina</span>
        </Link>

        <nav className="hidden md:flex gap-8" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={classeLink}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4"><Link to="/login" className="text-ouro" aria-label="Login"><UserRound size={20} /></Link><Link to="/carrinho" className="relative text-ouro" aria-label="Carrinho"><ShoppingBag size={22} />{itens.length > 0 && <span className="absolute -right-2 -top-2 rounded-full bg-sangue text-creme text-[10px] w-4 h-4 text-center">{itens.reduce((n, i) => n + i.quantidade, 0)}</span>}</Link><button
          type="button"
          className="md:hidden text-ouro cursor-pointer"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button></div>
      </div>

      {aberto && (
        <nav
          className="md:hidden bg-bordo border-t border-ouro/20 px-6 py-6 flex flex-col gap-5"
          aria-label="Principal"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setAberto(false)}
              className={classeLink}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
