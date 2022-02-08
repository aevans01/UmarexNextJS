import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function BrandNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="#features">ALL BRANDS</Nav.Link>
                        <Nav.Link href="#pricing">UMAREX</Nav.Link>
                        <Nav.Link href="#pricing">AXEON OPTICS</Nav.Link>
                        <Nav.Link href="#pricing">ELITE FORCE</Nav.Link>
                        <Nav.Link href="#pricing">REKT</Nav.Link>
                        <Nav.Link href="#pricing">P2P</Nav.Link>
                        <Nav.Link href="#pricing">T4E</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BrandNav;