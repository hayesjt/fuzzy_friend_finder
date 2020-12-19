import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './foot.css';

export const Footer = () => (
    <>

        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Text>© 2020 Fuzzy Friend Finder. All Rights Reserved. </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: "rgb(255,144,0)", marginLeft: "25px" }}>Contact Use: 763-648-5359</Navbar.Text>
                <Button className="staff-btn" variant="secondary" size="sm">Staff Portal</Button>
            </Navbar.Collapse>
        </Navbar>

    </>
)