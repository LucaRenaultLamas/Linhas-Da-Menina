import Divisor from './Divisor'

type Props = { titulo: string; destaque: string; subtitulo?: string }

export default function TituloSecao({ titulo, destaque, subtitulo }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-titulo text-5xl md:text-6xl text-ouro leading-none">{titulo}</h2>
      <p className="font-script text-5xl md:text-6xl text-sangue -mt-1">{destaque}</p>
      <Divisor className="mt-4" />
      {subtitulo && <p className="mt-4 text-bege text-lg max-w-xl mx-auto">{subtitulo}</p>}
    </div>
  )
}   