import type { Produto } from '../types'

// Confirmar o número oficial com o cliente
const NUMERO = import.meta.env.VITE_WHATSAPP ?? '5532987199555'

export function linkWhatsApp(mensagem = 'Olá! Vim pelo site e gostaria de fazer um pedido.') {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`
}

export function linkWhatsAppProduto(produto: Produto) {
  const url = `${window.location.origin}/produto/${produto.slug}`
  return linkWhatsApp(`Olá! Tenho interesse no produto "${produto.nome}".\n${url}`)
}