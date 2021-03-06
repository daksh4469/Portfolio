import React from 'react';
import './styles/projects.css';
import Card from './Card';
import EndGem from './images/endgem.png';
import Bunny from './images/bunny.png';
import CW from './images/cw.png';


function Projects() {
    let projects = [
        {
            name: "EndGem",
            image: EndGem,
            code: "https://github.com/daksh4469/EndGem",
            description: "Built to organize different types of documents, according to their courses, with features including downloadable content, top downloads to date, and the ability to upload and delete documents."
        },
        {
            name: "Bunny-CF Bot",
            image: Bunny,
            code: "https://github.com/daksh4469/cf-bot",
            description: "Bunny is a discord bot for every CodeForces competitive programmer out there. It helps a competitive programmer to see fellow programmers' ratings and know what they are up to recently. "
        },
        {
            name: "Covid WelFare",
            image: CW,
            code: "https://github.com/daksh4469/covid-welfare-frontend",
            description: "A platform thatenables different users from different locations to help the ones in need in these trying times using real time location mapped with the help of Google Maps"
        }
    ];
    return(
        <div className="projects">
            <span>PROJECTS</span>
            <div className="card-list">
            {
                projects.map((project,i)=>(
                    <Card key={i} name={project.name} description={project.description} image={project.image} code={project.code}/>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;