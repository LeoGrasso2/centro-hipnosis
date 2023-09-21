import React from 'react'
import './NavBarMobile.css'
import logo from './logo.png'
import { Container, Nav, Navbar} from 'react-bootstrap'


const NavBarMobile = () => {
  return (
    <Navbar expand="lg" className="navbarmobile-switch">
        <Container style={{display:'flex'}}>
            <Nav className='me-auto navbarmobile-wrapper'>
            <Navbar.Brand>
                <img
                    src={logo}
                    className='logo'
                >
                </img>
            </Navbar.Brand>
            
            <div className="navbarmobile">
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Tarifas</Nav.Link>
                <Nav.Link href="#action2">Contacto</Nav.Link>
                <Nav.Link href="#action2">Sobre nosotros</Nav.Link>
            </div>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBarMobile