import {React,useState} from 'react';
import emailjs from 'emailjs-com';
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

    function handleSubmit(e){
        e.preventDefault();  
        emailjs.sendForm('service_wmlfl3r', 'template_zmdur0k', e.target, 'user_VolNxljWUZwnegk8ni3h0')
        .then((result) => {
            // console.log(result.text);
            setStatusText("Message Sent");
            setForm({
                name: "",
                email: "",
                message: "",
                status: "PING ME!"
            });
            setTimeout(() => {
                setStatusText("");
            },5000);
        }, (error) => {
            console.log(error.text);
            document.getElementsByClassName("status-text")[0].color = "red";
            setStatusText("Please Try Again...");
            setForm({
                name: "",
                email: "",
                message: "",
                status: "PING ME!"
            });
            setTimeout(() => {
                setStatusText("");
            },5000);
        });
        e.target.reset();
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
                    <button className="send-button" type="submit">{buttonText}</button>
                </form>
                <div className="status-text">{statusText}</div>

            </div>
        </div>
    )   
}

export default Contact;