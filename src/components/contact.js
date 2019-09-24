import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";
import LabelInputElement from "./labelInputElement";

import email_icon from "../images/email-icon.svg";
import phone_icon from "../images/phone-icon.svg";
import contactus from "../images/contactus-image.svg";
import submit_icon from "../images/submit-icon.svg";

const axios = require("axios");
const node = axios.create({
  timeout: 5000
});
export default class contact extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.budget = React.createRef();
    this.message = React.createRef();
    this.project_timeline = React.createRef();
  }
  state = {
    valid: false,
    loading: false,
    error: {
      show: false,
      value: "Something went wrong!"
    },
    name: {
      valid: false,
      value: ""
    },
    email: {
      valid: false,
      value: ""
    },
    budget: {
      valid: false,
      value: "Didn't say"
    },
    project_timeline: {
      valid: false,
      value: "Didn't say"
    },
    message: {
      valid: false,
      value: "Didn't say"
    }
  };

  getRefs = element => {
    switch (element.props.id) {
      case "name":
        this.name = element;
        break;
      case "email":
        this.email = element;
        break;
      case "budget":
        this.budget = element;
        break;
      case "project_timeline":
        this.project_timeline = element;
        break;
      case "message":
        this.message = element;
        break;
      default:
    }
  };

  SubmitButton = () => {
    if (!this.state.loading) {
      return <img src={submit_icon} alt="submit" />;
    } else {
      return (
        <DotLoader size={30} color={"white"} loading={true} sizeUnit={"px"} />
      );
    }
  };

  Message = props => {
    if (props.show && !this.state.loading) {
      if (props.valid) {
        return (
          <div className="success-message">
            <p>{props.msg}</p>
          </div>
        );
      } else {
        return (
          <div className="error-message">
            <p>{props.msg}</p>
          </div>
        );
      }
    } else {
      return null;
    }
  };

  LabelInput = props => {
    return (
      <LabelInputElement
        {...props}
        ref={this.getRefs}
        change={this.handleChange}
      />
    );
  };

  handleChange = (e, valid) => {
    switch (e.target.id) {
      case "name":
        this.setState({
          name: {
            valid: valid,
            value: e.target.value
          }
        });
        break;
      case "email":
        this.setState({
          email: {
            valid: valid,
            value: e.target.value
          }
        });
        break;
      case "budget":
        this.setState({
          budget: {
            valid: valid,
            value: e.target.value
          }
        });
        break;
      case "project_timeline":
        this.setState({
          project_timeline: {
            valid: valid,
            value: e.target.value
          }
        });
        break;
      case "message":
        this.setState({
          message: {
            valid: valid,
            value: e.target.value
          }
        });
        break;
      default:
    }
  };

  handleSubmit = submit => {
    submit.preventDefault();
    if (this.state.name.valid && this.state.email.valid) {
      this.setState({
        loading: true
      });
      node
        .post("/send", {
          name: this.state.name.value,
          budget: this.state.budget.value,
          emailFrom: this.state.email.value,
          message: this.state.message.value,
          project_timeline: this.state.project_timeline.value
        })
        .then(response => {
          if (response.status >= 200 || response <= 299) {
            if (response.data.msg) {
              this.setState({
                valid: true,
                loading: false,
                error: {
                  show: true,
                  value: response.data.msg
                }
              });
            }
          }
        })
        .catch(error => {
          if (error.data) {
            this.setState({
              valid: false,
              loading: false,
              error: {
                show: true,
                value: error.data.msg
              }
            });
          } else {
            this.setState({
              valid: false,
              loading: false,
              error: {
                show: true,
                value: "Something went wrong"
              }
            });
          }
        })
        .finally(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        valid: false,
        error: {
          show: true,
          value: "* Please fill in the required fields"
        }
      });
    }
    this.name.setState({
      showValidity: true
    });
    this.email.setState({
      showValidity: true
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
            <div id="form-container">
              <this.Message
                valid={this.state.valid}
                show={this.state.error.show}
                msg={this.state.error.value}
              />
              <form action="#" onSubmit={this.handleSubmit}>
                <this.LabelInput
                  id="name"
                  type="text"
                  text="Name*"
                  important={true}
                />
                <this.LabelInput
                  id="email"
                  type="email"
                  text="Email*"
                  important={true}
                />
                <this.LabelInput id="budget" type="text" text="Budget" />
                <this.LabelInput
                  id="project_timeline"
                  type="text"
                  text="Project Timeline"
                />
                <this.LabelInput id="message" text="Message" textarea={true} />
                <button id="submit" type="submit">
                  <this.SubmitButton />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
