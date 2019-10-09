import React, { Component } from "react";

import burgermenu from "../images/burger-menu.svg";
import logo from "../images/logo_1.svg";
import cloudOne from "../images/cloud_1.svg";
import cloudTwo from "../images/cloud_2.svg";
import hero from "../images/hero_image_1.svg";
import arrowDown from "../images/arrow-down-circle.svg";

export default class header extends Component {
  render() {
    return (
      <header id="hero">
        <div id="hero-container">
          <button id="menu-toggle" onClick={this.props.toggle}>
            <img
              loading="lazy"
              className="lazyload"
              alt="menu toggle"
              src={burgermenu}
            />
          </button>
          <img
            id="logo-1"
            loading="lazy"
            alt="jido logo"
            className="lazyload"
            src={logo}
          />
          <img
            id="cloud-1"
            alt="cloud 1"
            loading="lazy"
            src={cloudOne}
            className="lazyload cloudOne"
          />
          <img
            id="cloud-2"
            alt="cloud 2"
            loading="lazy"
            src={cloudTwo}
            className="lazyload cloudTwo"
          />
          <img
            src={hero}
            alt="hero"
            loading="lazy"
            id="hero-image"
            className="lazyload"
          />
          <div id="header-wrapper">
            <h3>We build digital products</h3>
            <p>
              We are a web development startup focused on your business' success
            </p>
          </div>
          <div id="explore-container">
            <p>Explore Below</p>
            <a className="animated heartBeat" href="#technologies">
              <img
                loading="lazy"
                src={arrowDown}
                className="lazyload"
                alt="arrow down icon"
              />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
