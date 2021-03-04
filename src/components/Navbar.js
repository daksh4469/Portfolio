import React from 'react';
import './styles/navbar.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function NavBar(){
    return (
        <div className="navigation-bar" id="navbar">
            <ul className="navlist">
                <li><a onClick={() => scroll.scrollToTop()}>Home</a></li>
                <li><a onClick={() => scroll.scrollMore(1010)}>About</a></li>
                <li><a onClick={() => scroll.scrollMore(2010)}>Projects</a></li>
                <li><a onClick={() => scroll.scrollMore(3010)}>Skills</a></li>
                <li><a onClick={() => scroll.scrollToBottom()}>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;