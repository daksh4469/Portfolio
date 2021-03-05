import React from 'react';
import './styles/navbar.css';
//eslint-disable-next-line
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function NavBar(){
    return (
        <div className="navigation-bar" id="navbar">
            <ul className="navlist">
                {/* eslint-disable-next-line */}
                <li><a onClick={() => scroll.scrollToTop()}>Home</a></li>
                {/* eslint-disable-next-line */}
                <li><a onClick={() => scroll.scrollMore(1010)}>About</a></li>
                {/* eslint-disable-next-line */}
                <li><a onClick={() => scroll.scrollMore(2010)}>Projects</a></li>
                {/* eslint-disable-next-line */}
                <li><a onClick={() => scroll.scrollMore(3010)}>Skills</a></li>
                {/* eslint-disable-next-line */}
                <li><a onClick={() => scroll.scrollToBottom()}>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;