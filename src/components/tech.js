import React, { Component } from "react";

import jquery from "../images/jquery_icon_edit.svg";
import js from "../images/js_icon_edit.svg";
import html from "../images/html_icon_edit.svg";
import sass from "../images/sass_icon_edit.svg";
import node from "../images/node_icon_edit.svg";
import css from "../images/css_icon_edit.svg";
import github from "../images/github_icon_edit.svg";

export default class tech extends Component {
  render() {
    return (
      <section id="technologies" data-aos="fade-in" data-aos-once="true">
        <div id="tech-container">
          <h2>Technologies we use</h2>
          <div id="tech-icon-container">
            <img
              src={jquery}
              alt="jquery"
              loading="lazy"
              className="lazyload"
            />
            <img
              src={js}
              loading="lazy"
              alt="javascript"
              className="lazyload"
            />
            <img alt="html" src={html} loading="lazy" className="lazyload" />
            <img src={sass} alt="sass" loading="lazy" className="lazyload" />
            <img alt="node" src={node} loading="lazy" className="lazyload" />
            <img alt="css" src={css} loading="lazy" className="lazyload" />
            <img
              alt="github"
              src={github}
              loading="lazy"
              className="lazyload"
            />
          </div>
        </div>
      </section>
    );
  }
}
