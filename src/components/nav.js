import React, { Component } from "react";
import close from "../images/close-black.svg";
import logo from "../images/logo_2.svg";

export default class nav extends Component {
  menuToggle() {
    console.log(this.props.toggle);
  }

  render() {
    return (
      <nav id="nav" className={this.props.show}>
        <div id="nav-container">
          <button id="close-menu" onClick={this.props.toggle}>
            <img alt="close" loading="lazy" className="lazyload" src={close} />
          </button>
          <img
            id="logo-2"
            loading="lazy"
            alt="jido logo"
            className="lazyload"
            src={logo}
          />
          <ul>
            <li>
              <a
                className="menu-item"
                href="#services"
                onClick={this.props.toggle}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#technologies"
                onClick={this.props.toggle}
              >
                Technologies
              </a>
            </li>
            <li>
              <a className="menu-item" href="/blog" onClick={this.props.toggle}>
                Blog
              </a>
            </li>
            <li className="headShake">
              <a
                id="contact-button"
                href="#contact-us"
                onClick={this.props.toggle}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
