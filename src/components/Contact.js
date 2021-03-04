import React from 'react';
import './styles/contact.css';
import Wave from './images/wave.png';

function Contact(){
    return(
        <div className="contact-div">
            <div className="contact-me">
                Contact Me 
                <img src={Wave} alt="Wave"></img>
            </div>
            <div className="contact-form">
                <form>
                    <label>Name: </label><br />
                    <input type="text"></input><br />
                    <label>Email: </label><br />
                    <input type="text"></input><br />
                    <label>Message: </label><br />
                    <input className="msg-input" type="text"></input><br />
                </form>
                <button className="send-button" type="submit">Send</button>
            </div>
        </div>
    )
}

export default Contact;