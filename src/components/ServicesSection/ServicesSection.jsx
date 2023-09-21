import React from 'react'
import './ServicesSection.css'
import ServiceElement from './components/ServiceElement'
import ContactCard from '../../../pages/Contacto/components/ContactCard/ContactCard'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from './src/1.jpg' 
import img2 from './src/2.jpg' 
import img3 from './src/3.jpg' 
import img4 from './src/4.jpg' 

const ServicesSection = () => {
  return (
    <Container className="services-wrapper">
      <div className="services-list">
      <Row >
          <ServiceElement title="Ansiedad" text="La ansiedad es un hecho de la vida; no se puede negar. Lo que es discutible es hasta qué punto dejamos que la ansiedad afecte  la calidad de nuestras vidas. Lo creamos o no, tenemos control sobre el grado en que dejamos que las cosas nos afecten. Si buscamos alivio y formas de minimizar nuestra ansiedad podemos experimentar una vida más plenas y placentera." img={img1}/>
          <ServiceElement title="Tabaquismo - Dejar de fumar" text="Usted quiere dejar de fumar porque es un hábito muy poco saludable y costoso. Lo más probable es que ya hayas probado varias formas de dejar de fumar, pero sigues luchando, esto es normal y podemos ayudarte con eso hoy mismo." img={img2} />
          <ServiceElement title="Trastornos alimenticios y pérdida de peso" text="Quieres dejar de comer comida chatarra porque es poco saludable y a veces incluso un hábito caro. Lo más probable es que ya hayas probado varias formas de cambiar tu dieta, pero sigues teniendo problemas, esto es normal y podemos ayudarte con eso hoy mismo. " img={img3}/>
          <ServiceElement title="Adicciones" text="Consumir drogas es una actividad muy poco saludable y además es un mal hábito muy caro.  Reconocer que puedes hacerlo es el primer paso para superar la drogodependencia. El problema definitivamente está en tu mente, la adicción a las drogas es una adicción mental además de física. Utilizando el poder de tu mente subconsciente puedes empezar a abordar tanto los lazos físicos como los emocionales que te unen a tu droga elegida." img={img4}/>
      </Row>
      </div>
          <div className="videoConference">
            <div className="title">VIDEOCONFERENCIAS / CONSULTAS ONLINE</div>
            <div className="text">La Hipnosis es una técnica de inducción al estado hipnótico donde el terapeuta guía el inconsciente del paciente para que pueda afrontar y solucionar sus problemas en una atmósfera de relajación y protección.<br></br>
            La hipnosis es un estado de conciencia alterado, intermedio entre la vigilia y el sueño y es parte de nuestros procesos naturales de concentración.</div>
            <div className="title">¿COMO SE TRABAJA EN VIDEOCONFERENCIA?</div>
            <div className="text">Solo necesitas una conexión a Internet, una computadora o un tablet/celular, audífonos y un asiento cómodo en tu casa o cualquier otro lugar tranquilo.<br></br>
            En el primer encuentro se realizará la Entrevista previa y sesión inicial esta tiene un tiempo adicional con una duración aproximada de 70 / 80 minutos donde obtendré más información del consultante para realizar una anamnesis y preparar el correcto tratamiento de su consulta
            Irás escuchando mi voz que te guiará a un estado de relajación progresivo, participaras activamente conversando conmigo durante cada ejercicio moviendo el material disfuncional de tu Inconsciente para ir solucionando los problemas, teniendo una mejoría en el arco del ciclo terapéutico de las sesiones.<br></br>
            Cada sesión implica un ejercicio de hipnosis diferente.
            Ante cualquier duda entre sesiones podrás consultar con tu Terapeuta vía Whatsapp de Lunes a Domingo dentro del horario de 10:00 hs a 12:00 hs. 
            <ContactCard body="ORGANIZA TU CITA mediante WHATSAPP pulsando en el botón de abajo."/>
            
            </div>
            
             </div>

    </Container>
  )
}

export default ServicesSection