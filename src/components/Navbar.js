import React from 'react';
import './styles/navbar.css';

function NavBar(){
    return (
        <div className="navigation-bar">
            <ul className="navlist">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;