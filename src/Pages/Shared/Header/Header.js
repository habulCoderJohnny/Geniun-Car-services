import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../Images/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" className='sticky top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height="30"
                            alt=""/>
                            </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Booking</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;