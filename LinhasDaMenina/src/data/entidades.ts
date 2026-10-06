import type { Categoria, Entidade } from '../types'

export const entidades: Entidade[] = [
  { slug: 'exu', nome: 'Exu', descricao: 'Guardião dos caminhos e da proteção.' },
  { slug: 'pomba-gira', nome: 'Pomba Gira', descricao: 'Força, firmeza e elegância.' },
  { slug: 'ciganos', nome: 'Ciganos', descricao: 'Liberdade, sorte e caminhos abertos.' },
  { slug: 'ibeijada', nome: 'Ibeijada', descricao: 'Alegria, pureza e acolhimento.' },
  { slug: 'orixas', nome: 'Orixás', descricao: 'Axé e ancestralidade.' },
  { slug: 'malandragem', nome: 'Malandragem', descricao: 'Jogo de cintura e proteção.' },
]

export const categorias: Categoria[] = [
  { slug: 'kits', nome: 'Kits' },
  { slug: 'guias', nome: 'Guias' },
  { slug: 'pulseiras', nome: 'Pulseiras' },
  { slug: 'patuas', nome: 'Patuás' },
  { slug: 'porta-velas', nome: 'Porta-velas' },
]