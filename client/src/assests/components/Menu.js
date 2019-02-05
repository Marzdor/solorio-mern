import React, { Component } from "react";

import Beer from "./sub/menu/Beer";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: [] };
  }
  componentDidMount() {
    fetch("main/beer")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ beer: data });
      });
  }
  render() {
    return <Beer beer={this.state.beer} />;
  }
}

export default Menu;
