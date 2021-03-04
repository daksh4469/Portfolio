import React from 'react';
import './styles/skills.css';
import HTML from './images/html.png';
import CSS from './images/css.png';
import JS from './images/js.png';
import TS from './images/ts.png';
import Figma from './images/figma.png';
import Mongo from './images/mongo.png';
import Sass from './images/sass.png';
import NPM from './images/npm.png';
import Nodejs from './images/nodejs.png';
import Reactjs from './images/react.png';
import Github from './images/github.png';
import CPP from './images/cpp.png';
import Java from './images/java.png';


function Skills(){
    let imagesrow1 = [HTML,CSS,JS,Reactjs,Nodejs,Figma];
    let imagesrow2 = [Sass,NPM,Github,TS,Mongo];
    let imagesrow3 = [CPP,Java];
    return (
        <section>
        <span className="heading-skills">SKILLS</span>
        <span className="tools">Framework and Tools</span>
        <div className="row1">
            {
                imagesrow1.map((image) => (
                    <img src={image} alt="skill"></img>
                ))
            }
            <br/>
            <br/>
            <br/>
            <br/>
            {
                imagesrow2.map((image) => (
                    <img src={image} alt="skill"></img>
                ))
            }
            <br/>
            <br/>
            <br/>
            {
                imagesrow3.map((image) => (
                    <img src={image} alt="skill"></img>
                ))
            }
        </div>
        </section>
    )
}

export default Skills;