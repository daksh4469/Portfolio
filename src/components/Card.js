import React from 'react';
import './styles/card.css';
import Github from './images/github.png';

function Card(props) {
    return(
        <div className="outer-div">
            <div className="img-container"><img src={props.image} alt={props.name}></img></div>
            <div className="card-name">{props.name}</div>
            <div className="inner-div">{props.description}</div>
            {/* eslint-disable-next-line */}
            <a href={props.code} target="_blank"><img src={Github} alt="github" className="code-link"></img></a>
        </div>
    )
}

export default Card;