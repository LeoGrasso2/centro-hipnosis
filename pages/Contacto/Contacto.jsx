import React from 'react'
import ContactCard from './components/ContactCard/ContactCard'
import "./Contacto.css"
import Hours from './components/Hours/Hours'

const Contacto = () => {
  return (

    <div className="contact-wrapper">
      <div className="leftCol">
        <ContactCard title="Contáctanos" body="Para más información sobre los tratamientos, pulsa en el botón de abajo."/>
        <Hours />
      </div>
        <div className="mapa" style={{overflow: "hidden", maxWidth: '100%'}}><div id="embed-map-canvas" style={{height:"100%", width:"100%", maxWidth:"100%"}}><iframe style={{height:"100%",width:"100%", border:"0"}} src="https://www.google.com/maps/embed/v1/place?q=Lamadrid+25,+Avellaneda,+Buenos+Aires,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div></div>
    </div>
  )
}

export default Contacto