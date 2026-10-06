import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classesBotao, type VarianteBotao } from '../lib/botao'

type Props = {
  children: ReactNode
  variante?: VarianteBotao
  className?: string
  to?: string // rota interna
  href?: string // link externo
}

export default function BotaoLink({ children, variante = 'primario', className = '', to, href }: Props) {
  const classes = classesBotao(variante, className)
  if (to) return <Link to={to} className={classes}>{children}</Link>
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  )
}
