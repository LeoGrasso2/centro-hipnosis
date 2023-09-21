import React from 'react'
import './App.css'
import vid from './bgvid.mp4'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ServicesSection from './components/ServicesSection/ServicesSection'
import Index from '../pages/Index/Index'
import Contacto from '../pages/Contacto/Contacto'
import Tarifas from '../pages/Tarifas/Tarifas'
import Nosotros from '../pages/Nosotros/Nosotros'

const App = () => {
  return (
    <>
    <div className='totalLayout'>
    <Router>
      <video id="background-video" autoPlay={true} loop muted><source src={vid} type="video/mp4"></source></video>
      <NavBar />
      <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/tarifas" element={<Tarifas />}></Route>
      <Route path="/nosotros" element={<Nosotros />}></Route>
      </Routes>
      <Footer />
      </Router>
    </div>
    </>
  )
}

export default App