import React, { useState } from 'react'
import './ContactWidget.css'
import contacto from './contact.png'

const ContactWidget = () => {
  return (
    <a className='contactwidget-wrapper' href="https://wa.me//+541158633101?text=Quiero%20mas%20información%20sobre%20hipnosis%20clínica" target='_blank'>
      <img src={contacto}></img>
      <div className='contactwidget-message'>
      Hacé click para contactarme<br></br> por WhatsApp!</div>

    </a>
  )
}

export default ContactWidget