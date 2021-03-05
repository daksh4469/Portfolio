import {React,useState,useEffect} from 'react';
import './styles/navbar.css';
//eslint-disable-next-line
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import AppBar from '@material-ui/core/AppBar';


function NavBar(){
    const [scrolled,setScrolled]=useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
        console.log(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let classes = ["navigation-bar"];

    if(scrolled){
        classes.push("scrolled");
    }

    return (
        <AppBar>
        <div className={classes.join(" ")} id="navbar">
            <ul className={scrolled ? "navlist scrolled" : "navlist"}>
                {/* eslint-disable-next-line */}
                <li id="tab" className={scrolled ? "navlist-li scrolled" : "navlist-li nonscrolled"}><a onClick={() => scroll.scrollToTop()} className={scrolled ? "scrolled" : null}>Home</a></li>
                {/* eslint-disable-next-line */}
                <li id="tab" className={scrolled ? "navlist-li scrolled" : "navlist-li nonscrolled"}><a onClick={() => scroll.scrollMore(1010)} className={scrolled ? "scrolled" : null}>About</a></li>
                {/* eslint-disable-next-line */}
                <li id="tab" className={scrolled ? "navlist-li scrolled" : "navlist-li nonscrolled"}><a onClick={() => scroll.scrollMore(2010)} className={scrolled ? "scrolled" : null}>Projects</a></li>
                {/* eslint-disable-next-line */}
                <li id="tab" className={scrolled ? "navlist-li scrolled" : "navlist-li nonscrolled"}><a onClick={() => scroll.scrollMore(3010)} className={scrolled ? "scrolled" : null}>Skills</a></li>
                {/* eslint-disable-next-line */}
                <li id="tab" className={scrolled ? "navlist-li scrolled" : "navlist-li nonscrolled"}><a onClick={() => scroll.scrollToBottom()} className={scrolled ? "scrolled" : null}>Contact</a></li>
            </ul>
        </div>
        </AppBar>
    )
}

export default NavBar;