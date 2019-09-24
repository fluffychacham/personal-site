import React, { Component } from "react";

import error_icon from "../images/error-icon.svg";
import success_icon from "../images/success-icon.svg";

export default class LabelInputElement extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.cssFocus = "";
    this.id = props.id;
    this.text = props.text;
    this.type = props.type;
    this.change = props.change;
    this.valid = this.props.valid;
    this.textArea = props.textarea;
    this.important = props.important;
  }

  state = {
    valid: false,
    focused: false,
    showValidity: false
  };

  validateEmail = email => {
    let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if (re.test(email.target.value)) {
      return true;
    } else {
      return false;
    }
  };

  validateField = field => {
    this.change(field, this.state.valid);
    if (this.type === "email") {
      if (this.validateEmail(field)) {
        this.setState({
          valid: true
        });
      } else {
        return false;
      }
    }
    if (field.target.value) {
      this.setState({
        valid: true
      });
    } else {
      this.setState({
        valid: false
      });
    }
  };

  toggleFocus = () => {
    this.setState({
      focused: !this.state.focused
    });
    this.cssFocus = !this.state.focused ? "focus-label" : "";
    if (this.count > 0) {
      this.showValidity();
    } else {
      this.count++;
    }
  };

  showValidity = () => {
    if (this.important) {
      this.setState({
        showValidity: true
      });
    }
  };

  validity(css) {
    if (this.state.showValidity) {
      return css;
    } else {
      return "";
    }
  }

  Label = () => {
    if (this.state.showValidity) {
      return (
        <label
          className={`label-text ${
            this.state.valid ? "success" : "error"
          }-label ${this.cssFocus}`}
          htmlFor={this.text}
        >
          {this.text}
          <this.LabelIcon />
        </label>
      );
    } else {
      return (
        <label className={`label-text ${this.cssFocus}`} htmlFor={this.text}>
          {this.text}
          <this.LabelIcon />
        </label>
      );
    }
  };

  LabelIcon = () => {
    if (this.state.showValidity) {
      return (
        <img
          className="label-icon"
          src={this.state.valid ? success_icon : error_icon}
          alt={`${this.cssValid}-icon`}
        />
      );
    } else {
      return "";
    }
  };

  Input = () => {
    if (!this.textArea) {
      if (this.state.showValidity) {
        return (
          <input
            id={this.id}
            type={this.type}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChange={this.validateField}
            className={`input-text ${
              this.state.valid ? "success" : "error"
            }-input`}
          />
        );
      } else {
        return (
          <input
            id={this.id}
            type={this.type}
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}
            onChange={this.validateField}
            className="input-text"
          />
        );
      }
    } else {
      return null;
    }
  };

  TextArea = () => {
    if (this.textArea) {
      return (
        <textarea
          cols="4"
          rows="6"
          id={this.id}
          onBlur={this.toggleFocus}
          onFocus={this.toggleFocus}
          onChange={this.validateField}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <this.Label />
        <this.Input />
        <this.TextArea />
      </React.Fragment>
    );
  }
}
