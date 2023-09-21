import React from 'react'
import { Card } from 'react-bootstrap'
import './Hours.css'

const Hours = () => {
  return (
    <>
    <Card className="hoursCard-wrapper">
      <Card.Title className="hoursCard-title">Horarios de atencion</Card.Title>
      <Card.Body>Nuestro equipo se encuentra disponible para su consulta toda la semana, en los siguientes horarios:<br></br>
      <ul>
        <li>Lunes a Viernes: 8.00 a 20.00 hs.</li>
        <li>Sabados, Domingos y Feriados: 8.00 a 12.00 hs.</li>
      </ul>
      </Card.Body>
    </Card>
    </>
  )
}

export default Hours