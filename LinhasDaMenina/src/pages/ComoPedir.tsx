import { ClipboardCheck, CreditCard, MessageCircle, PackageCheck, ShoppingBag } from 'lucide-react'
import TituloSecao from '../components/TituloSecao'
import BotaoLink from '../components/BotaoLink'
import { linkWhatsApp } from '../lib/whatsapp'

const passos = [
  { icone: ShoppingBag, titulo: 'Escolha o produto', texto: 'Navegue pela loja e escolha a peça que mais combina com você.' },
  { icone: MessageCircle, titulo: 'Fale conosco no WhatsApp', texto: 'Clique em "Comprar pelo WhatsApp" e envie a mensagem.' },
  { icone: ClipboardCheck, titulo: 'Confirme seu pedido', texto: 'Confirmamos os detalhes, o prazo e o valor do frete.' },
  { icone: CreditCard, titulo: 'Efetue o pagamento', texto: 'Enviamos as opções de pagamento para você escolher.' },
  { icone: PackageCheck, titulo: 'Receba com segurança', texto: 'Sua peça segue embalada com cuidado para todo o Brasil.' },
]

export default function ComoPedir() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <TituloSecao titulo="Como fazer" destaque="seu pedido?" subtitulo="Simples e seguro, em cinco passos." />

      <ol className="space-y-8">
        {passos.map((p, i) => (
          <li key={p.titulo} className="flex items-start gap-5">
            <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border border-ouro/60 text-ouro">
              <p.icone size={26} strokeWidth={1.25} />
            </div>
            <div>
              <p className="font-label text-[11px] uppercase tracking-[0.3em] text-sangue">Passo {i + 1}</p>
              <h2 className="font-produto text-xl text-creme mt-1">{p.titulo}</h2>
              <p className="text-bege text-lg mt-1">{p.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="text-center mt-14">
        <BotaoLink href={linkWhatsApp()}>Falar no WhatsApp</BotaoLink>
      </div>
    </section>
  )
}