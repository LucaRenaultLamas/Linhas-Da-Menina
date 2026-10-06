import TituloSecao from '../components/TituloSecao'
import BotaoLink from '../components/BotaoLink'

export default function QuemSomos() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <TituloSecao titulo="Quem somos" destaque="nós?" />

      <div className="space-y-6 text-xl text-creme/90 leading-relaxed text-center">
        <p>
          Somos uma loja especializada em artigos religiosos e esotéricos, voltada para quem busca{' '}
          <span className="text-sangue">fé</span>, <span className="text-sangue">equilíbrio</span> e{' '}
          <span className="text-sangue">conexão</span> com o seu caminho espiritual.
        </p>
        <p>
          Cada guia, pulseira e patuá é feito à mão, com atenção aos detalhes e respeito às tradições de
          Umbanda que inspiram nosso trabalho.
        </p>
        <p className="font-script text-4xl text-ouro pt-4">Produtos que geram conexãcomo o espiritual.</p>
      </div>

      <div className="text-center mt-12">
        <BotaoLink to="/loja">Conheça nossos produtos</BotaoLink>
      </div>
    </section>
  )
}