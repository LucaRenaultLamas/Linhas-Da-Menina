import { Link } from 'react-router-dom'
import type { Entidade } from '../types'

export default function CardEntidade({ entidade }: { entidade: Entidade }) {
  return (
    <Link
      to={`/loja?linha=${entidade.slug}`}
      className="group block text-center bg-bordo border border-ouro/20 hover:border-ouro/60 hover:bg-vinho transition-all duration-300 px-4 py-8"
    >
      <span className="text-sangue text-xs">◆</span>
      <h3 className="font-produto text-xl text-ouro mt-2 group-hover:text-champanhe transition-colors">
        {entidade.nome}
      </h3>
      <p className="mt-2 text-bege text-base">{entidade.descricao}</p>
    </Link>
  )
}