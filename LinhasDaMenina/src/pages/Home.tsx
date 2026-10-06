import BotaoLink from '../components/BotaoLink'
import TituloSecao from '../components/TituloSecao'
import CardEntidade from '../components/CardEntidade'
import ProductCard from '../components/ProductCard'
import { entidades } from '../data/entidades'
import { produtos } from '../data/produtos'
import { linkWhatsApp } from '../lib/whatsapp'

export default function Home() {
  const destaques = produtos.filter((p) => p.destaque).slice(0, 4)

  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-[radial-gradient(ellipse_at_center,#2A0A0D_0%,#0B0506_70%)]">
        <p className="font-label text-xs uppercase tracking-[0.4em] text-bege mb-6">
          Artigos religiosos feitos à mão
        </p>
        <h1 className="font-titulo text-6xl md:text-8xl text-ouro leading-none">Linhas da</h1>
        <p className="font-script text-7xl md:text-9xl text-sangue -mt-2">Menina</p>
        <p className="mt-8 text-xl text-creme max-w-xl">
          Fé, proteção, equilíbrio e conexão com o seu caminho espiritual.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <BotaoLink to="/loja">Ver produtos</BotaoLink>
          <BotaoLink href={linkWhatsApp()} variante="secundario">Falar no WhatsApp</BotaoLink>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <TituloSecao titulo="Navegue por" destaque="linha" subtitulo="Escolha a linha que caminha com você." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {entidades.map((e) => (
            <CardEntidade key={e.slug} entidade={e} />
          ))}
        </div>
      </section>

      <section className="bg-bordo/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <TituloSecao titulo="Nossos" destaque="destaques" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {destaques.map((p) => (
              <ProductCard key={p.id} produto={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <BotaoLink to="/loja" variante="secundario">Ver todos os produtos</BotaoLink>
          </div>
        </div>
      </section>
    </>
  )
}