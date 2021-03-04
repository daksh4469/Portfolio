import React from 'react';
import NavBar from './Navbar';
import Home from './Home';

function Body(){
    return (
        <div className="body-class">
            <NavBar />
            <Home />
            <div className="block-1">hello</div>
        </div>
    )
}

export default Body;