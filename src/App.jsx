import NavBar from './Components/Navbar/NavBar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './pages/Nosotros/Nosotros.jsx'
function App() {


  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/niveles-educativos' />
        <Route path='/aula-virtual' />
        <Route path='/nosotros' element={<Nosotros />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
