import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function Body(){
    return (
        <div className="body-class">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <div className="block-1">hello</div>
            <div className="block-2">hello</div>
        </div>
    )
}

export default Body;