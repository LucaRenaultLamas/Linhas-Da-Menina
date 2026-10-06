import type { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import TituloSecao from '../components/TituloSecao'
import ProductCard from '../components/ProductCard'
import { produtos } from '../data/produtos'
import { categorias, entidades } from '../data/entidades'

function Chip({ ativo, onClick, children }: { ativo: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`font-label text-[11px] uppercase tracking-[0.2em] px-4 py-2 border transition-colors cursor-pointer ${
        ativo
          ? 'bg-ouro text-preto border-ouro'
          : 'border-ouro/30 text-creme hover:border-ouro hover:text-ouro'
      }`}
    >
      {children}
    </button>
  )
}

export default function Loja() {
  const [params, setParams] = useSearchParams()
  const linha = params.get('linha') ?? ''
  const categoria = params.get('categoria') ?? ''

  function definir(chave: 'linha' | 'categoria', valor: string) {
    const novos = new URLSearchParams(params)
    if (valor) novos.set(chave, valor)
    else novos.delete(chave)
    setParams(novos)
  }

  const filtrados = produtos.filter(
    (p) => (!linha || p.entidade === linha) && (!categoria || p.categoria === categoria),
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <TituloSecao titulo="Nossa" destaque="loja" subtitulo="Artigos feitos à mão, com fé e dedicação." />

      <div className="space-y-6 mb-12">
        <div>
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-bege mb-3">Linha</p>
          <div className="flex flex-wrap gap-2">
            <Chip ativo={!linha} onClick={() => definir('linha', '')}>Todas</Chip>
            {entidades.map((e) => (
              <Chip key={e.slug} ativo={linha === e.slug} onClick={() => definir('linha', e.slug)}>
                {e.nome}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-bege mb-3">Categoria</p>
          <div className="flex flex-wrap gap-2">
            <Chip ativo={!categoria} onClick={() => definir('categoria', '')}>Todas</Chip>
            {categorias.map((c) => (
              <Chip key={c.slug} ativo={categoria === c.slug} onClick={() => definir('categoria', c.slug)}>
                {c.nome}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {filtrados.length === 0 ? (
        <p className="text-center text-bege text-xl py-16">
          Nenhum produto encontrado com esses filtros.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtrados.map((p) => (
            <ProductCard key={p.id} produto={p} />
          ))}
        </div>
      )}
    </section>
  )
}