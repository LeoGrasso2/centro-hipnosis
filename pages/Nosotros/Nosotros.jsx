import React from 'react'
import AboutSection from './components/AboutSection/AboutSection'
import InfoCard from './components/InfoCard/InfoCard'
import "./Nosotros.css"

const Nosotros = () => {
  return ( 
    <div className="about-wrapper">
      <AboutSection />
      <InfoCard />
    </div>
  )
}

export default Nosotros