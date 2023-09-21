import React from 'react'
import { Container } from 'react-bootstrap'
import './HeroSection.css'


const HeroSection = () => {
  return (
    <>
    <div className="hero-wrapper">
        <div className='hero-content'>
          <div className="hero-overlay">
            <h1 style={{fontSize:'3em'}}>Centro Integral de<br></br> Hipnosis Clínica</h1>
            <h2 style={{fontSize:'1.3em'}}>Donde el bienestar mental y emocional toma una nueva dimensión. Nuestro equipo de expertos utiliza la hipnosis como herramienta para abordar desafíos como el estrés, la ansiedad y los hábitos no deseados. Con enfoque en la salud integral, te ofrecemos un espacio seguro para explorar tu mente y potenciar tus fortalezas internas. Descubre cómo la hipnosis terapéutica puede guiarte hacia una vida más plena y equilibrada. Tu transformación comienza aquí.</h2>
            </div>
          </div>
    </div>
    </>
  )
}

export default HeroSection