import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png';

const Header = () => {
    //1st for condition log/signup menu in navbar 
    const [user] = useAuthState(auth);
    // 3rd btn click to user signout hoye jabe
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#go-to-services">Services</Nav.Link>
                        <Nav.Link href="home#go-to-experts">Experts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user && <>
                            <Nav.Link as={Link} to="/add-service">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                        </>}
                        {/*//1st for condition log/signup menu in navbar*/}
                        {user ? <button className="btn btn-link text-white" onClick={handleSignout}>SIGNOUT</button>
                            :
                            <Nav.Link as={Link} to="/login">
                                LOGIN
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;