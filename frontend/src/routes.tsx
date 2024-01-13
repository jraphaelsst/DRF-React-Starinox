import { Route, Routes } from 'react-router-dom'

import Contact from './pages/Contact'
import Empresa from './pages/Empresa'
import Home from './pages/Home'
import Localization from './pages/Localization'
import Products from './pages/Products'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contato" element={<Contact />} />
    <Route path="/empresa" element={<Empresa />} />
    <Route path="/localizacao" element={<Localization />} />
    <Route path="/produtos" element={<Products />} />
  </Routes>
)

export default Rotas
