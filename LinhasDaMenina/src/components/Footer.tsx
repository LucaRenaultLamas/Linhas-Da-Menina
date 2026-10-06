import { Link } from 'react-router-dom'
import Divisor from './Divisor'
import { linkWhatsApp } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-bordo border-t border-ouro/20 mt-24 py-12 px-6 text-center">
      <p className="font-script text-4xl text-ouro">Linhas da Menina</p>
      <Divisor className="my-4" />
      <p className="text-bege text-lg">Produtos que geram conexão espiritual.</p>

      <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Rodapé">
        <Link to="/loja" className="font-label text-xs uppercase tracking-[0.2em] text-creme hover:text-ouro">
          Loja
        </Link>
        <Link to="/como-pedir" className="font-label text-xs uppercase tracking-[0.2em] text-creme hover:text-ouro">
          Como pedir
        </Link>
        <Link to="/quem-somos" className="font-label text-xs uppercase tracking-[0.2em] text-creme hover:text-ouro">
          Quem somos
        </Link>
        <a
          href="https://www.instagram.com/linhasdamenina/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-xs uppercase tracking-[0.2em] text-creme hover:text-ouro"
        >
          Instagram
        </a>
        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-xs uppercase tracking-[0.2em] text-creme hover:text-ouro"
        >
          WhatsApp
        </a>
      </nav>

      <p className="font-label text-xs tracking-[0.2em] uppercase text-bege/60 mt-8">
        © {new Date().getFullYear()} Linhas da Menina
      </p>
    </footer>
  )
}