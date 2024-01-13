import { BrowserRouter as Router } from 'react-router-dom'
import Headroom from 'react-headroom'

import { GlobalCss } from './styles'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Headroom style={{ WebkitTransition: 'all .5s ease-in-out' }}>
        <Navbar />
      </Headroom>
      <Banner />
      <Rotas />
      <Footer />
    </Router>
  )
}

export default App
