import {React,useState} from 'react';
import axios from "axios";
import './styles/contact.css';
import Wave from './images/wave.png';

function Contact(){
    const [form,setForm] = useState({
        name: "",
        email: "",
        message: "",
        status: "PING ME!"
    });

    const [statusText,setStatusText] = useState("");

    function handleChange(e){
        const field = e.target.id;
        if (field === "username") {
            setForm({
                ...form,
                name: e.target.value
            });
        } 
        else if (field === "email") {
            setForm({
                ...form,
                email: e.target.value
            });
        } 
        else if (field === "message") {
            setForm({
                ...form,
                message: e.target.value
            });
        }
    }

    function handleSubmit(event){
        event.preventDefault();  
        setForm({
            ...form,
            status: "Sending..."
        });
        axios({
          method: "POST",
          url: "https://dakshdoshi.herokuapp.com/contact",
          data: form,
        }).then((response) => {
          if (response.data.status === "sent") {
            // alert("Message Sent");
            setStatusText("Message Sent!");
            setTimeout(() =>{
                setStatusText("");
            },5000);
            setForm({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            // alert("Message Failed");
            document.getElementsByClassName("status-text")[0].style.color = "red";
            setStatusText("Please Try Again...");
          }
        });
    }
    let buttonText = form.status;
    return(
        <div className="contact-div">
            <div className="contact-me">
                Contact Me 
                <img src={Wave} alt="Wave"></img>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit} method="POST">
                    <label>Name: </label><br />
                    <input id="username" name="name" value={form.name} onChange={handleChange} type="text" required></input><br />
                    <label>Email: </label><br />
                    <input id="email" name="email" value={form.email} onChange={handleChange} type="text" required></input><br />
                    <label>Message: </label><br />
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} className="msg-input" type="text"></textarea><br />
                </form>
                <button className="send-button" type="submit" onClick={handleSubmit}>{buttonText}</button>
                <div className="status-text">{statusText}</div>

            </div>
        </div>
    )   
}

export default Contact;