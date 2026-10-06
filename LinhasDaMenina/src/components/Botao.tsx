import type { ButtonHTMLAttributes } from 'react'
import { classesBotao, type VarianteBotao } from '../lib/botao'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variante?: VarianteBotao }

export default function Botao({ variante = 'primario', className = '', ...props }: Props) {
  return <button className={classesBotao(variante, className)} {...props} />
}