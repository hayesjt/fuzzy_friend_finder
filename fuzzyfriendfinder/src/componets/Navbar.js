import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Fuzzy Friend Finder
            {/* <img src="./images/favicon-32x32.png" width="30" height="30" alt=""></img> */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fuzzy Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Donation Dashboard</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Surrender</a>
                            <a className="dropdown-item" href="#">Obedience Training</a>
                            <a className="dropdown-item" href="#">Pet Grooming</a>
                            <a className="dropdown-item" href="#">Veterinary Services</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Log in </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Future Adopter</a>
                            <a className="dropdown-item" href="#">Volunteer</a>
                            <a className="dropdown-item" href="#">Employee</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Create Account </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Future Adopter</a>
                            <a className="dropdown-item" href="#">Volunteer</a>
                            <a className="dropdown-item" href="#">Employee</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;