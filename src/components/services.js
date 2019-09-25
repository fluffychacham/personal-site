import React, { Component } from "react";

import webdev from "../images/webdev-image.svg";
import webdesign from "../images/webdesign-image.svg";
import digitalmarketing from "../images/digitalmarketing-image.svg";

export default class services extends Component {
  render() {
    return (
      <section id="services" data-aos="fade-in" data-aos-once="true">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="image-container">
            <img
              src={webdev}
              loading="lazy"
              className="lazyload"
              alt="Web Development"
            />
          </div>
          <div className="p-container">
            <h3>
              Web
              <div className="bold-text">Development</div>
            </h3>
            <p>
              We utilize the flexibility of modern web technologies to develop a
              product that's in line with your vision while building an
              interface that is easy to navigate.
            </p>
            <div className="button-container">
              <a href="#contact-us">Learn More</a>
            </div>
          </div>
        </div>
        <div className="service-container row-reverse">
          <div className="image-container">
            <img
              loading="lazy"
              src={webdesign}
              alt="Web Design"
              className="lazyload"
            />
          </div>
          <div className="p-container">
            <h3>
              Web
              <div className="bold-text">Design</div>
            </h3>
            <p>
              The goal isn't to build a website. The goal is to build your
              business. 86% of consumers rely on the internet to find a local
              business. Start making your whole sales process smoother and more
              effective with Jido.
            </p>
            <div className="button-container">
              <a href="#contact-us">Learn More</a>
            </div>
          </div>
        </div>
        <div className="service-container">
          <div className="image-container">
            <img
              loading="lazy"
              className="lazyload"
              src={digitalmarketing}
              alt="Digital Marketing"
            />
          </div>
          <div className="p-container">
            <h3>
              Business
              <div className="bold-text">Intelligence</div>
            </h3>
            <p>
              From analytics to animations, we can implement personalized
              digital marketing strategies to give your business that
              competitive advantage and ensure its survival. Let our tools help
              you make smarter data driven decisions.
            </p>
            <div className="button-container">
              <a href="#contact-us">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
