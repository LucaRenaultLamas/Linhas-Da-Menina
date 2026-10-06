import { Link } from 'react-router-dom'
import { useCarrinhoContext } from '../context/CarrinhoContext'
import { formatarPreco } from '../lib/formatar'

export default function Carrinho() {
  const { itens, adicionar, diminuir, remover, total } = useCarrinhoContext()
  return <section className="max-w-4xl mx-auto px-6 py-16"><h1 className="font-titulo text-5xl text-ouro">Seu carrinho</h1>{!itens.length ? <p className="text-bege text-xl mt-8">Seu carrinho está vazio. <Link className="text-ouro" to="/loja">Conheça a loja.</Link></p> : <><div className="mt-10 space-y-4">{itens.map(item => <div key={item.id} className="border border-ouro/20 p-4 flex items-center justify-between gap-4"><div><h2 className="text-creme text-xl">{item.nome}</h2><p className="text-bege">{formatarPreco(item.preco)}</p></div><div className="flex items-center gap-3"><button className="text-ouro" onClick={() => diminuir(item.id)}>-</button><span className="text-creme">{item.quantidade}</span><button className="text-ouro" onClick={() => adicionar(item)}>+</button><button className="text-sangue text-sm ml-3" onClick={() => remover(item.id)}>Remover</button></div></div>)}</div><div className="mt-8 flex items-center justify-between"><strong className="text-2xl text-creme">Total: {formatarPreco(total)}</strong><Link to="/checkout" className="font-label text-xs uppercase tracking-[0.2em] px-6 py-3 bg-ouro text-preto">Ir para pagamento</Link></div></>}</section>
}
