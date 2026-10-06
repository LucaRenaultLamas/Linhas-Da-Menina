import { Link } from 'react-router-dom'
import type { Produto } from '../types'
import { formatarPreco } from '../lib/formatar'
import ImagemProduto from './ImagemProduto'

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <Link
      to={`/produto/${produto.slug}`}
      className="group block bg-bordo border border-ouro/20 hover:border-ouro/50 transition-colors duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <ImagemProduto src={produto.imagens[0]} alt={produto.nome} />
        </div>
        {(produto.esgotado || produto.sobEncomenda) && (
          <span className="absolute top-3 left-3 bg-preto/80 border border-ouro/40 text-ouro font-label text-[10px] uppercase tracking-[0.2em] px-3 py-1">
            {produto.esgotado ? 'Esgotado' : 'Sob encomenda'}
          </span>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-produto text-lg text-creme">{produto.nome}</h3>
        <p className="mt-1 text-ouro text-xl">{formatarPreco(produto.preco)}</p>
      </div>
    </Link>
  )
}