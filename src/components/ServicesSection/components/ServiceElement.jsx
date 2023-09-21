import React from 'react'
import { Card } from 'react-bootstrap'
import './ServiceElement.css'

const ServiceElement = (details) => {
  return (
    <Card className='serviceElement-wrapper'>
        <Card.Img src={details.img} />
        <Card.Body className="serviceElement-body">
            <Card.Title className="serviceElement-title">
            {details.title}
            </Card.Title>
            <Card.Text className="serviceElement-text">
            {details.text}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ServiceElement