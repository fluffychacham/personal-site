import React, { Component } from "react";
import loadable from "@loadable/component";
import aos from "aos";
import "../node_modules/aos/dist/aos.css";
import "./css/style.css";
require("dotenv").config();


const Nav = loadable(() => import("./components/nav"));
const Header = loadable(() => import("./components/header"));
const Tech = loadable(() => import("./components/tech"));
const Services = loadable(() => import("./components/services"));
const Contact = loadable(() => import("./components/contact"));
const Footer = loadable(() => import("./components/footer"));

class App extends Component {
  constructor(props) {
    super(props);
    aos.init();
  }

  componentDidUpdate() {
    aos.refresh();
  }

  state = {
    toggle: true,
    cssClass: ""
  };

  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
    if (this.state.toggle) {
      this.setState({ cssClass: "show" });
    } else {
      this.setState({ cssClass: "" });
    }
  };
  render() {
    return (
      <div>
        <Nav toggle={this.toggle} show={this.state.cssClass} />
        <Header toggle={this.toggle} />
        <Tech />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
