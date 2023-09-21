import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import uba from './src/uba.png'
import anh from './src/anh.png'
import ahn from './src/ahn.png'

const Footer = () => {
  return (
    <Container className='footer-wrapper'>
        <Container className='footer-content'>
        <img src={ahn} id="img3-mobile" alt="American Hypnosis School" className="footer-img" />
          <img class="footer-img" id="img1" src={uba} alt="Universidad de Buenos Aires" srcset="" />
            <div className="text">Centro de Hipnosis Clínica® 2023<br></br>Todos los derechos reservados.<br></br><div className="dev">Made with 💝 by <a href="https://bit.ly/3PjwLXI">Leonardo Grasso</a></div></div>
            <div className="logosRight">
              <img src={anh} id="img2" alt="Asociacion Norteamericana de Hipnosis" className="footer-img" />
              <img src={ahn} id="img3" alt="American Hypnosis School" className="footer-img" />
            </div>
        </Container>
    </Container>
  )
}

export default Footer