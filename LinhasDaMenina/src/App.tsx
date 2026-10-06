import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Loja from './pages/Loja'
import Produto from './pages/Produto'
import Tiragens from './pages/Tiragens'
import ComoPedir from './pages/ComoPedir'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import NaoEncontrada from './pages/404'
import { CarrinhoProvider } from './context/CarrinhoContext'
import Carrinho from './pages/Carrinho'
import Checkout from './pages/Checkout'
import Login from './pages/Login'

export default function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/produto/:slug" element={<Produto />} />
          <Route path="/tiragens" element={<Tiragens />} />
          <Route path="/como-pedir" element={<ComoPedir />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  )
}
