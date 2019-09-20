require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const port = 4000;

const axios = require("axios");
const sg = axios.create({
  baseURL: "https://api.sendgrid.com/v3/mail",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_SG_API_KEY
  }
});

const email = "jidoweb@gmail.com";
const site = "Sent from jido website";
const emailSubject = "Business inquiry";

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.post("/mail", cors(), (req, res, next) => {
  let emailTo = email;
  let emailFrom = req.body.emailFrom;
  let siteName = site;
  let name = req.body.name;
  let budget = req.body.budget;
  let projectTimeline = req.body.projectTimeline;
  let message = req.body.message;
  let subject = emailSubject;

  console.log(`Email To: ${emailTo}`);
  console.log(`Email From ${emailFrom}`);
  console.log(`Site Name: ${siteName}`);
  console.log(`Persons Name: ${name}`);
  console.log(`Budget: ${budget}`);
  console.log(`Project Timeline: ${projectTimeline}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  if (message) {
    res.json({ msg: "Successful!" });
  } else {
    res.json({ msg: "Something went wrong!" });
  }

  // sg.post("/send", {
  //   personalizations: [
  //     {
  //       to: [
  //         {
  //           email: { emailTo },
  //           name: { siteName }
  //         }
  //       ],
  //       subject: { subject }
  //     }
  //   ],
  //   from: {
  //     email: { emailFrom },
  //     name: { name }
  //   },
  //   content: [
  //     {
  //       type: "text/html",
  //       value: `Budget: ${budget} <br/> Project Timeline: ${projectTimeline} <br/> Message: ${message}`
  //     }
  //   ]
  // })
  //   .then(response => {
  //     res.json({msg: "You email was successfully sent!"});
  //   })
  //   .catch(error => {
  //     res.json({msg: "Something went wrong!"});
  //   });
});

app.listen(port, function() {
  console.log(`CORS-enabled server listening on port ${port}`);
});