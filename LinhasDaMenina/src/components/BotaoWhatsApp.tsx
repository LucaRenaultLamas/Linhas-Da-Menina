import { MessageCircle } from 'lucide-react'
import { linkWhatsApp } from '../lib/whatsapp'

export default function BotaoWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sangue border border-ouro/50 text-creme shadow-[0_0_20px_rgba(217,32,43,0.4)] transition-all hover:bg-rubi hover:scale-105"
    >
      <MessageCircle size={26} strokeWidth={1.5} />
    </a>
  )
}