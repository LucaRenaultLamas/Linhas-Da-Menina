export type CategoriaSlug = 'kits' | 'guias' | 'pulseiras' | 'patuas' | 'porta-velas'

export type EntidadeSlug =
  | 'exu'
  | 'pomba-gira'
  | 'ciganos'
  | 'ibeijada'
  | 'orixas'
  | 'malandragem'

export interface Categoria {
  slug: CategoriaSlug
  nome: string
}

export interface Entidade {
  slug: EntidadeSlug
  nome: string
  descricao: string
}

export interface Produto {
  id: string
  slug: string
  nome: string
  categoria: CategoriaSlug
  entidade: EntidadeSlug
  preco: number
  descricao: string
  materiais: string[]
  imagens: string[]
  destaque?: boolean
  sobEncomenda?: boolean
  esgotado?: boolean
}