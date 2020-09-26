import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

export const Navigation = () => (
    <>

  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
  <Navbar.Brand style={{color: "rgb(255,144,0)"}} href="/">Fuzzy Friend Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/veterinaryservices">Veterinary Services</NavDropdown.Item>
        <NavDropdown.Item href="/obediencetraining">Obedience Training</NavDropdown.Item>
        <NavDropdown.Item href="/petgrooming">Pet Grooming</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/supportservices">Support Services</NavDropdown.Item>
        <NavDropdown.Item href="/surrenderservices">Surrender Services</NavDropdown.Item>
        <NavDropdown.Item href="/endoflifeservices">End of Life Services</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Fuzzy Friends" id="basic-nav-dropdown">
        <NavDropdown.Item href="/adoptableanimals">Adoptable Animals</NavDropdown.Item>
        <NavDropdown.Item href="/successfuladoptions">Successful Adoptions</NavDropdown.Item>
        <NavDropdown.Item href="/rainbowbridge">Rainbow Bridge</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/donate">Donate</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</>
)