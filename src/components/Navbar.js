import React from 'react';
import './styles/navbar.css';

function NavBar(){
    return (
        <div className="navigation-bar">
            <ul className="navlist">
                <li><a href="https://www.figma.com/file/CqWILXDHiTlMGcXnPIU3zQ/Portfolio?node-id=0%3A3">Home</a></li>
                <li><a href="https://www.figma.com/file/CqWILXDHiTlMGcXnPIU3zQ/Portfolio?node-id=0%3A3">About</a></li>
                <li><a href="https://www.figma.com/file/CqWILXDHiTlMGcXnPIU3zQ/Portfolio?node-id=0%3A3">Projects</a></li>
                <li><a href="https://www.figma.com/file/CqWILXDHiTlMGcXnPIU3zQ/Portfolio?node-id=0%3A3">Skills</a></li>
                <li><a href="https://www.figma.com/file/CqWILXDHiTlMGcXnPIU3zQ/Portfolio?node-id=0%3A3">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;