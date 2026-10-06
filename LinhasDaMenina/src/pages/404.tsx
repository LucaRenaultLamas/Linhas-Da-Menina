import BotaoLink from '../components/BotaoLink'
import Divisor from '../components/Divisor'

export default function NaoEncontrada() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-script text-7xl text-sangue">404</p>
      <h1 className="font-titulo text-5xl text-ouro mt-2">Página não encontrada</h1>
      <Divisor className="my-6" />
      <p className="text-bege text-xl mb-10">O caminho que você procura não existe ou foi alterado.</p>
      <BotaoLink to="/">Voltar ao início</BotaoLink>
    </section>
  )
}