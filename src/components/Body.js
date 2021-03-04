import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function Body(){
    return (
        <div className="body-class">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <div className="block-1">hello</div>
        </div>
    )
}

export default Body;