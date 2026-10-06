import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Produto } from '../types'

type ItemCarrinho = Produto & { quantidade: number }
type CarrinhoContexto = { itens: ItemCarrinho[]; adicionar: (produto: Produto) => void; diminuir: (id: string) => void; remover: (id: string) => void; limpar: () => void; total: number }
const Contexto = createContext<CarrinhoContexto | null>(null)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>(() => JSON.parse(localStorage.getItem('linhas-carrinho') || '[]'))
  useEffect(() => localStorage.setItem('linhas-carrinho', JSON.stringify(itens)), [itens])
  const valor = useMemo(() => ({ itens, adicionar: (produto: Produto) => setItens(atual => atual.some(item => item.id === produto.id) ? atual.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item) : [...atual, { ...produto, quantidade: 1 }]), diminuir: (id: string) => setItens(atual => atual.flatMap(item => item.id !== id ? [item] : item.quantidade > 1 ? [{ ...item, quantidade: item.quantidade - 1 }] : [])), remover: (id: string) => setItens(atual => atual.filter(item => item.id !== id)), limpar: () => setItens([]), total: itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0) }), [itens])
  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export function useCarrinhoContext() {
  const contexto = useContext(Contexto)
  if (!contexto) throw new Error('useCarrinhoContext deve ser usado dentro de CarrinhoProvider')
  return contexto
}
