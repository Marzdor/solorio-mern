import React, { Component } from "react";

import Email from "./sub/modal/Email";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderSwitch = this.renderSwitch.bind(this);
  }
  renderSwitch(param) {
    switch (param) {
      case "Email":
        return <Email />;
      default:
        console.log("ERROR: " + param);
        break;
    }
  }
  render() {
    console.log(this.props.config);

    return <div>{this.renderSwitch(this.props.config.type)}</div>;
  }
}

export default Modal;
