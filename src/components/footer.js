import React, { Component } from "react";

import fb_icon from "../images/fb-icon.svg";
import instagram_icon from "../images/instagram-icon.svg";
import youtube_icon from "../images/youtube-icon.svg";
import copyright from "../images/copyright-icon.svg";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer-container">
          <div id="social-media-links">
            <a href="https://www.facebook.com/jidoweb">
              <img
                src={fb_icon}
                loading="lazy"
                alt="facebook link"
                className="lazyload"
              />
            </a>
            <a href="https://www.youtube.com/channel/UC9TeNJ_cPB2Ed0JWLPHF0qw?view_as=subscriber">
              <img
                loading="lazy"
                alt="youtube link"
                src={youtube_icon}
                className="lazyload"
              />
            </a>
            <a href="https://www.instagram.com/kit.tejido/">
              <img
                loading="lazy"
                src={instagram_icon}
                alt="instagram link"
                className="lazyload"
              />
            </a>
          </div>
          <div id="copyright">
            <img
              loading="lazy"
              src={copyright}
              alt="copyright icon"
              className="lazyload"
            />
            <p>Jido 2019</p>
          </div>
        </div>
      </footer>
    );
  }
}
