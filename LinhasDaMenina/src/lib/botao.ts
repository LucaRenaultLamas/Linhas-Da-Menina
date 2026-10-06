export type VarianteBotao = 'primario' | 'secundario'

const base =
  'inline-block text-center font-label text-xs uppercase tracking-[0.2em] px-8 py-3 border transition-all duration-300 cursor-pointer'

const variantes: Record<VarianteBotao, string> = {
  primario:
    'bg-sangue border-ouro/40 text-creme hover:bg-rubi hover:shadow-[0_0_20px_rgba(217,32,43,0.4)]',
  secundario: 'bg-transparent border-ouro text-ouro hover:bg-ouro hover:text-preto',
}

export function classesBotao(variante: VarianteBotao = 'primario', extra = '') {
  return `${base} ${variantes[variante]} ${extra}`
}