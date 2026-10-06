import { Link, useParams } from 'react-router-dom'
import { useCarrinhoContext } from '../context/CarrinhoContext'
import { produtos } from '../data/produtos'
import { categorias, entidades } from '../data/entidades'
import { formatarPreco } from '../lib/formatar'
import { linkWhatsAppProduto } from '../lib/whatsapp'
import ImagemProduto from '../components/ImagemProduto'
import BotaoLink from '../components/BotaoLink'
import Divisor from '../components/Divisor'
import ProductCard from '../components/ProductCard'

export default function Produto() {
  const { adicionar } = useCarrinhoContext()
  const { slug } = useParams()
  const produto = produtos.find((p) => p.slug === slug)

  if (!produto) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="font-titulo text-5xl text-ouro">Produto não encontrado</h1>
        <Divisor className="my-6" />
        <BotaoLink to="/loja" variante="secundario">Voltar à loja</BotaoLink>
      </section>
    )
  }

  const entidade = entidades.find((e) => e.slug === produto.entidade)
  const categoria = categorias.find((c) => c.slug === produto.categoria)
  const relacionados = produtos
    .filter((p) => p.id !== produto.id && p.entidade === produto.entidade)
    .slice(0, 4)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <nav className="font-label text-[11px] uppercase tracking-[0.2em] text-bege mb-8">
        <Link to="/loja" className="hover:text-ouro">Loja</Link>
        <span className="mx-2 text-sangue">◆</span>
        <Link to={`/loja?linha=${produto.entidade}`} className="hover:text-ouro">{entidade?.nome}</Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="aspect-[4/5] border border-ouro/20 overflow-hidden bg-bordo">
          <ImagemProduto src={produto.imagens[0]} alt={produto.nome} />
        </div>

        <div>
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-bege">
            {categoria?.nome} · {entidade?.nome}
          </p>
          <h1 className="font-produto text-4xl md:text-5xl text-ouro mt-3">{produto.nome}</h1>
          <Divisor className="!justify-start my-5" />
          <p className="text-3xl text-creme">{formatarPreco(produto.preco)}</p>

          {produto.sobEncomenda && (
            <p className="mt-2 font-label text-[11px] uppercase tracking-[0.2em] text-bege">
              Feito sob encomenda
            </p>
          )}

          <p className="mt-6 text-xl text-creme/90 leading-relaxed">{produto.descricao}</p>

          <div className="mt-6">
            <h2 className="font-label text-[11px] uppercase tracking-[0.3em] text-ouro mb-2">Materiais</h2>
            <ul className="text-bege text-lg list-disc list-inside">
              {produto.materiais.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {produto.esgotado ? (
              <BotaoLink href={linkWhatsAppProduto(produto)} variante="secundario">Avise-me quando chegar</BotaoLink>
            ) : (
              <button onClick={() => adicionar(produto)} className="font-label text-xs uppercase tracking-[0.2em] px-6 py-3 bg-ouro text-preto hover:bg-creme cursor-pointer">Adicionar ao carrinho</button>
            )}
            <BotaoLink to="/loja" variante="secundario">Continuar comprando</BotaoLink>
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className="mt-24">
          <h2 className="font-titulo text-4xl text-ouro text-center mb-8">
            Da mesma <span className="font-script text-5xl text-sangue">linha</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relacionados.map((p) => (
              <ProductCard key={p.id} produto={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
