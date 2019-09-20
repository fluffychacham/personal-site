import React, { Component } from "react";

export default class LabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      focused: true,
      classAnimation: ""
    };
  }

  focusInput = () => {
    this.setState({
      focused: !this.state.focused
    });
    if (this.state.focused) {
      this.setState({
        classAnimation: "focused"
      });
    } else {
      this.setState(this.initialState);
    }
  };

  render() {
    return (
      <div style={{ height: "50px" }}>
        <label htmlFor={this.props.id} className={this.state.classAnimation}>
          {this.props.text}
        </label>
        <input
          id={this.props.id}
          type="text"
          onBlur={this.focusInput}
          onFocus={this.focusInput}
          onChange={this.props.change}
        />
      </div>
    );
  }
}
