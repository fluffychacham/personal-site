import React, { Component } from "react";

import webdev_icon from "../images/webdev-icon.svg";
import webdesign_icon from "../images/webdesign-icon.svg";
import digitalmarketing_icon from "../images/digitalmarketing-icon.svg";
import webdev from "../images/webdev-image.svg";
import webdesign from "../images/webdesign-image.svg";
import digitalmarketing from "../images/digitalmarketing-image.svg";

export default class services extends Component {
  render() {
    return (
      <section id="services" data-aos="fade-in" data-aos-once="true">
        <div id="services-container">
          <h2>Our Services</h2>
          <ul>
            <li>
              <div className="icon-container">
                <img
                  loading="lazy"
                  src={webdev_icon}
                  alt="web dev icon"
                  className="lazyload"
                />
              </div>
              <div className="service-container">
                <h3>Web Development</h3>
                <p>
                  <img
                    src={webdev}
                    alt="web dev"
                    loading="lazy"
                    className="lazyload"
                  />
                  The goal isn't to build a website, but to build your business.
                  86% of consumers rely on the internet to find a local
                  business. Start making your whole sales process smoother and
                  more effective with Jido.
                </p>
                <a href="#contact-us">Learn More</a>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img
                  loading="lazy"
                  className="lazyload"
                  src={webdesign_icon}
                  alt="web design icon"
                />
              </div>
              <div className="service-container">
                <h3>Web Design</h3>
                <p>
                  <img
                    className="lazyload"
                    loading="lazy"
                    src={webdesign}
                    alt="web design"
                  />
                  We utilize the flexibility of modern web technologies to
                  develop a product that's in line with your vision while
                  building an interface that is easy to navigate.
                </p>
                <a href="#contact-us">Learn More</a>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img
                  loading="lazy"
                  className="lazyload"
                  src={digitalmarketing_icon}
                  alt="digital marketing icon"
                />
              </div>
              <div className="service-container">
                <h3>Digital Marketing</h3>
                <p>
                  <img
                    loading="lazy"
                    className="lazyload"
                    src={digitalmarketing}
                    alt="digital marketing"
                  />
                  From analytics to animations, we can implement personalized
                  digital marketing strategies to give your business that
                  competitive advantage and ensure its survival. Let our tools
                  help you make smarter decisions.
                </p>
                <a href="#contact-us">Learn More</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
