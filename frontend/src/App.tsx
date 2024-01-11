import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalCss } from './styles'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Navbar />
      <div className="container"></div>
    </Router>
  )
}

export default App
