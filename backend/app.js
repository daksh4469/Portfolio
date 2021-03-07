const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
require('dotenv').config({path:__dirname+'/../.env'})
const Email = process.env.EMAIL;
const Password = process.env.PASSWORD;
const Port = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: Email,
      pass: Password,
    },
});

contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

 app.post("/contact", (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const message = req.body.message; 
   const mail = {
     from: name,
     to: "ddaksh.2711@gmail.com",
     subject: "Contact Form Message",
     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
   };
   contactEmail.sendMail(mail, (error) => {
     if (error) {
       res.json({ status: "failed" });
     } else {
       res.json({ status: "sent" });
     }
   });
 });


app.listen(Port, () => console.log("Server Running"));