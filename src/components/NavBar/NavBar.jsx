import React from 'react'
import './NavBar.css'
import logo from './logo.png'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <Navbar expand="lg">
        <Container style={{display:'block'}}>
            <Nav className='me-auto navbar-wrapper'>
            <Navbar.Brand>
                <img
                    src={logo}
                    className='logo'
                >
                </img>
            </Navbar.Brand>
            
            <div className="navbar">
                
                <Link to="/">Inicio</Link>
                <Link style={{textDecoration:'none'}} to="/tarifas">Tarifas</Link>
                <Link style={{textDecoration:'none'}} to="/contacto">Contacto</Link>
                <Link style={{textDecoration:'none'}} to="/nosotros">Nosotros</Link>
            </div>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar