import React from 'react';
import './styles/about.css';
import github from './images/github.png';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import fb from './images/fb.png';

function About(){
    return (
        <section>
            <div className="heading">ABOUT ME</div>
            <div className="aboutme">
                I am a Computer Science Engineering sophomore at the Indian Institute of Technology, Roorkee. I love to build and enjoy Web Design and Web Developement. Currently, I have just started to contribute to open source and am finding it quite exciting.<br />  See my social profiles below:
            </div>
            <ul className="icons-list">
                <li><a href="https://github.com/daksh4469" target="_blank"><img src={github} alt="github"></img></a></li>
                <li><a href="https://www.linkedin.com/in/daksh-doshi-464847195/" target="_blank"><img src={linkedin} alt="github"></img></a></li>
                <li><a href="https://www.instagram.com/daksh4469/" target="_blank"><img src={insta} alt="github"></img></a></li>
                <li><a href="https://www.facebook.com/daksh.doshi.904/" target="_blank"><img src={fb} alt="github"></img></a></li>
            </ul>
        </section>
    )
}

export default About;