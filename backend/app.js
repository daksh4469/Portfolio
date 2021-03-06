const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ddaksh.2711@gmail.com",
      pass: "d@k$h2711",
    },
});

contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

 router.post("/contact", (req, res) => {
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

app.use("/", router);

app.listen(5000, () => console.log("Server Running"));