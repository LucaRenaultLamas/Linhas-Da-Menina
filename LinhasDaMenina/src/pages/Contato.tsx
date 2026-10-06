import { Camera, MessageCircle } from 'lucide-react'
import TituloSecao from '../components/TituloSecao'
import { linkWhatsApp } from '../lib/whatsapp'

const cartoes = [
  {
    icone: MessageCircle,
    titulo: 'WhatsApp',
    texto: 'Pedidos, dúvidas e encomendas.',
    href: linkWhatsApp(),
    acao: 'Chamar agora',
  },
  {
    icone: Camera,
    titulo: 'Instagram',
    texto: '@linhasdamenina',
    href: 'https://www.instagram.com/linhasdamenina/',
    acao: 'Seguir',
  },
]

export default function Contato() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <TituloSecao titulo="Fale" destaque="conosco" subtitulo="Estamos prontos para te atender." />

      <div className="grid sm:grid-cols-2 gap-6">
        {cartoes.map((c) => (
          <a
            key={c.titulo}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-center bg-bordo border border-ouro/20 hover:border-ouro/60 hover:bg-vinho transition-all duration-300 px-6 py-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ouro/60 text-ouro">
              <c.icone size={26} strokeWidth={1.25} />
            </div>
            <h2 className="font-produto text-xl text-ouro mt-4">{c.titulo}</h2>
            <p className="text-bege text-lg mt-1">{c.texto}</p>
            <p className="font-label text-[11px] uppercase tracking-[0.3em] text-creme mt-4 group-hover:text-ouro">
              {c.acao}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
