import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {

    return (
        <div>
            {/* IMPORTED NAVBAR */}
            <Navbar/>
            {/* START HOMEPAGE CONTENT */}
        <ReactBootStrap.Card>
            <ReactBootStrap.Card.Body>This is the Home Page! Welcome to Fuzzy Friend Finder!</ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
            {/* IMPORTED FOOTER */}
            <Footer></Footer>
        </div>
    )
}

export default Home;