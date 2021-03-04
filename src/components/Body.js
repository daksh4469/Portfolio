import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';

function Body(){
    return (
        <div className="body-class">
            <NavBar />
            <Home />
            <About />
            <div className="block-1">hello</div>
        </div>
    )
}

export default Body;