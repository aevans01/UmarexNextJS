import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import BrandNav from "./BrandNav";
import topUmarex from "../assets/WhiteUmarex.png"
function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">UMAREXUSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="LICENSED BRANDS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">MEDIA</Nav.Link>
            <Nav.Link href="#pricing">ABOUT US</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default TopNav;
/*


 <nav role="naviagtion" className="TopNavContainer" id="menuToggle">
    <div className='TopNav' >
    <a href="/"><img className="TopNavUmarexUSA" src={topUmarex}/></a>
    <input type="checkbox" className="hamburgerControl"/> 
    <span></span>
    <span></span>
    <span></span>
      <ul id ="menu">
        <li><a href=''>LICENSED BRANDS</a></li>
        <li><a href=''>MEDIA</a></li>
        <li><a href=''>ABOUT US</a></li>
        <li><a href=''>CONTACT</a></li>
      </ul>
    </div>
    <BrandNav />
  </nav>
  */