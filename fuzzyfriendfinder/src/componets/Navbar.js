import React from 'react';


function Navbar() {

    const logindropdown = {
        color: 'red',
      }; 

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
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Veterinary Services</a>
                            <a className="dropdown-item" href="#">Obedience Training</a>
                            <a className="dropdown-item" href="#">Pet Grooming</a>
                            <a className="dropdown-item" href="#">Surrender Services</a>
                            <a className="dropdown-item" href="#">End of Life Services</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Fuzzy Friends </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Foster Needs</a>
                            <a className="dropdown-item" href="#">Adoptable Dogs</a>
                            <a className="dropdown-item" href="#">Adoptable Cats</a>
                            <a className="dropdown-item" href="#">Successful Adoptions</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Donate</a>
                    </li>
                    <li className="nav-item dropdown involved">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Become Involved </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Adoption</a>
                            <a className="dropdown-item" href="#">Volunteering</a>
                            <a className="dropdown-item" href="#">Fostering</a>
                            <a className="dropdown-item" href="#">Sponsership</a>
                            <a className="dropdown-item" href="#">Career Opportunities</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" style = {logindropdown} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Log in </a>
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