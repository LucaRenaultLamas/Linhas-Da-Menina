import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BotaoWhatsApp from './BotaoWhatsApp'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  )
}