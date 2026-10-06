import TituloSecao from '../components/TituloSecao'
import BotaoLink from '../components/BotaoLink'
import { linkWhatsApp } from '../lib/whatsapp'

export default function Tiragens() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <TituloSecao
        titulo="Tiragens"
        destaque="espirituais"
        subtitulo="Orientação e acolhimento para o seu momento."
      />

      <div className="space-y-6 text-xl text-creme/90 leading-relaxed text-center">
        <p>
          As tiragens são atendimentos de caráter religioso e orientativo, feitos com respeito e cuidado.
          Para saber como funcionam, os tipos disponíveis e os valores, fale com a gente pelo WhatsApp.
        </p>
        <p className="text-bege text-base">
          As tiragens têm caráter religioso e de orientação. Não substituem acompanhamento médico,
          psicológico, jurídico ou financeiro.
        </p>
      </div>

      <div className="text-center mt-12">
        <BotaoLink
          href={linkWhatsApp('Olá! Gostaria de saber mais sobre as tiragens espirituais.')}
        >
          Quero saber mais
        </BotaoLink>
      </div>
    </section>
  )
}