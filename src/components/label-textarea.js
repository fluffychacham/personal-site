import React, { Component } from "react";

export default class LabelTextarea extends Component {
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
      <div>
        <label htmlFor={this.props.id} className={this.state.classAnimation}>
          {this.props.text}
        </label>
        <textarea
          name={this.props.id}
          id={this.props.id}
          col={this.props.col}
          rows={this.props.rows}
          onBlur={this.focusInput}
          onFocus={this.focusInput}
        ></textarea>
      </div>
    );
  }
}
