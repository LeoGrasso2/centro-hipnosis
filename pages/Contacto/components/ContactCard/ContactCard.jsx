import React from 'react'
import { Card } from 'react-bootstrap'
import './ContactCard.css'

const ContactCard = (detail) => {
  return (
    <>
    <Card className="contactCard-wrapper">
      <Card.Title className="contactCard-title">{detail.title}</Card.Title>
      <Card.Body>{detail.body}<br></br>
      <a className="contactButton" href="https://wa.link/shc6yt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"></img>Contáctanos</a>
      </Card.Body>
    </Card>
    </>
  )
}

export default ContactCard