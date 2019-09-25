require("dotenv").config();

const port = 4000;
const cors = require("cors");
const path = require("path");
const express = require("express");

const axios = require("axios");
const sg = axios.create({
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_SG_API_KEY
  }
});

const email = "jidoweb@gmail.com";
const site = "Sent from jido website";
const emailSubject = "Business inquiry";

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "blog")));
app.use(express.static(path.join(__dirname, "404")));
app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/blog", (req, res, next) => {
  res.sendFile(path.join(__dirname, "blog", "index.html"));
});

app.post("/send", cors(), (req, res, next) => {
  let emailTo = email;
  let emailFrom = req.body.emailFrom;
  let siteName = site;
  let name = req.body.name;
  let budget = req.body.budget;
  let projectTimeline = req.body.project_timeline;
  let message = req.body.message;
  let subject = emailSubject;

  console.log("----------------------------------");
  console.log(`Email To: ${emailTo}`);
  console.log(`Email From ${emailFrom}`);
  console.log(`Site Name: ${siteName}`);
  console.log(`Persons Name: ${name}`);
  console.log(`Budget: ${budget}`);
  console.log(`Project Timeline: ${projectTimeline}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("----------------------------------");

  function checkEmail(email) {
    let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function checkName(name) {
    if (name.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  function checkValid() {
    if (checkEmail(emailFrom) && checkName(name)) {
      return true;
    } else {
      return false;
    }
  }

  if (checkValid()) {
    sg.post("https://api.sendgrid.com/v3/mail/send", {
      personalizations: [
        {
          to: [
            {
              email: emailTo,
              name: siteName
            }
          ],
          subject: subject
        }
      ],
      from: {
        email: emailFrom,
        name: name
      },
      content: [
        {
          type: "text/html",
          value: `<strong>Budget</strong>: ${budget} <br/><br/> <strong>Project Timeline</strong>: ${projectTimeline} <br/><br/> <strong>Message</strong>: <p>${message}</p>`
        }
      ]
    })
      .then(response => {
        if (response.status >= 200 || response.staus <= 299) {
          res.statusCode = 200;
          res.json({ msg: "Your email was successfully sent!" });
          return true;
        }
      })
      .catch(error => {
        res.statusCode = 400;
        res.json({ msg: "Email was not sent!" });
        return false;
      });
  } else {
    if (!checkName(name)) {
      res.statusCode = 400;
      res.json({ msg: "Please provide your name" });
    } else if (!checkEmail(emailFrom)) {
      res.statusCode = 400;
      res.json({ msg: "Email was invalid" });
    } else if (!checkName(emailFrom)) {
      res.statusCode = 400;
      res.json({ msg: "Please provide your email" });
    } else {
      res.statusCode = 400;
      res.json({ msg: "Something went wrong" });
    }
  }
});

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname, "404", "index.html");
});

app.listen(process.env.PORT || port, function() {
  console.log(`CORS-enabled server listening on port ${port}`);
});
