import Header from './Header'
import Footer from './Footer'
import BotaoWhatsApp from './BotaoWhatsApp'
import ScrollToTop from './ScrollToTop'
import RouteTransition from './RouteTransition'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main><RouteTransition /></main>
      <Footer />
      <BotaoWhatsApp />
    </>
  )
}
