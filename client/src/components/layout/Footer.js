import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Footer = () => (
    <>

        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Text>© 2020 Fuzzy Friend Finder. All Rights Reserved. </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: "rgb(255,144,0)", marginLeft: "25px" }}>Adoption Center: 763-648-5359 | Vet Clinic: 763-554-6582 | Support Center: 763-489-1678 </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

    </>
)