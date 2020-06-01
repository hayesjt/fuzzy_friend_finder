import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function Navbar() {

    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="/">Fuzzy Friend Finder</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    {/* this is where I added the NavLink for router - may or may not work */}
                    <NavLink to="/"><ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link></NavLink>
                    <ReactBootStrap.Nav.Link href="aboutus">About Us</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Services" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="veterinaryservices">Veterinary Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="obediencetraining">Obedience Training</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="petgrooming">Pet Grooming</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="surrenderservices">Surrender Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="supportservices">Support Services</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="endoflifeservices">End of Life Services</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.NavDropdown title="Fuzzy Friends" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="fosterneeds">Foster Needs</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="adoptabledogs">Adoptable Dogs</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="adoptabledogs">Adoptable Cats</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="successfuladoptions">Successful Adoptions</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="Donate">Donate</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.NavDropdown title="Become Involved" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="adoption">Adoption</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="volunteering">Volunteering</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="fostering">Fostering</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="sponsership">Sponsership</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="careeropportunities">Career Opportunities</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="login">Log In</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Navbar;