import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';


function Navbar() {

    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">Fuzzy Friend Finder</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#about">About Us</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Services" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Veterinary Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Obedience Training</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Pet Grooming</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Surrender Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.5">Support Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.6">End of Life Services</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.NavDropdown title="Fuzzy Friends" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/4.1">Foster Needs</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/4.2">Adoptable Dogs</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/4.3">Adoptable Cats</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/4.4">Successful Adoptions</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#Donate">Donate</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.NavDropdown title="Become Involved" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/5.1">Adoption</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/5.2">Volunteering</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/5.3">Fostering</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/5.4">Sponsership</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/5.5">Career Opportunities</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.NavDropdown title="Log In" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/6.1"> Future Adoption</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/6.2">Volunteer/Foster</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/6.3">Employee</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Navbar;