import React, { Component } from "react";
import LabelInput from "./label-input";
import LabelTextarea from "./label-textarea";

import contactus from "../images/contactus-image.svg";
import email_icon from "../images/email-icon.svg";
import phone_icon from "../images/phone-icon.svg";
import sendemail_icon from "../images/sendemail-icon.svg";

const axios = require("axios");
const node = axios.create({
  timeout: 1000
});
export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      budget: "",
      project_timeline: "",
      message: ""
    };
  }

  handleChange = e => {
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "budget":
        this.setState({ budget: e.target.value });
        break;
      case "project_timeline":
        this.setState({ project_timeline: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    node
      .post("/mail", {
        name: this.state.name,
        emailFrom: this.state.email,
        budget: this.state.budget,
        projectTimeline: this.state.project_timeline,
        message: this.state.message
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.msg);
        }
      })
      .catch(error => {
        console.log(error.data.msg);
      });
  };

  render() {
    return (
      <section id="contact-us" data-aos="fade-in" data-aos-once="true">
        <div id="contact-us-container">
          <div id="contact-us-left">
            <h2>Contact Us!</h2>
            <img
              loading="lazy"
              src={contactus}
              alt="contact us"
              className="lazyload"
              id="contact-us-image"
            />
            <ul>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="email icon"
                    src={email_icon}
                    className="lazyload"
                  />
                  Email:
                  <a href="mailto:jidoweb@gmail.com">jidoweb@gmail.com</a>
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="phone icon"
                    src={phone_icon}
                    className="lazyload"
                  />
                  Phone: <a href="tel:+17809040152">+1 780-904-0152</a>
                </p>
              </li>
            </ul>
          </div>
          <div id="contact-form">
            <div id="contact-form-container">
              <form action="#" onSubmit={this.handleSubmit}>
                <LabelInput
                  id="name"
                  text="Name"
                  change={this.handleChange}
                ></LabelInput>
                <LabelInput
                  id="email"
                  text="Email"
                  change={this.handleChange}
                ></LabelInput>
                <LabelInput
                  id="budget"
                  text="Budget"
                  change={this.handleChange}
                ></LabelInput>
                <LabelInput
                  id="project_timeline"
                  text="Project Timeline"
                  change={this.handleChange}
                ></LabelInput>
                <LabelTextarea
                  id="message"
                  text="Message"
                  col="4"
                  rows="5"
                  change={this.handleChange}
                ></LabelTextarea>
                <button type="submit">
                  <img
                    loading="lazy"
                    src={sendemail_icon}
                    className="lazyload"
                    alt="send email icon"
                  />
                </button>
              </form>
            </div>
          </div>
          <div id="success-container">
            <div id="success-wrapper">
              <img
                className="lazyload"
                loading="lazy"
                data-src="images/close-white.svg"
                alt="close"
              />
              <img
                className="lazyload"
                loading="lazy"
                data-src="images/successcircle-icon.svg"
                alt="success icon"
              />
              <p>Success!</p>
              <p>
                Your email has been successfully sent! Thank you for your time.
                It usually takes 1 to 2 business days for us to reply to your
                inquiry.
              </p>
              <button>
                <img
                  className="lazyload"
                  loading="lazy"
                  data-src="images/backarrow-icon.svg"
                  alt="go back icon"
                />
                <p>Go Back</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
