import React, { Component } from "react";

import Days from "./sub/home/Days";
import Events from "./sub/home/Events";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { days: {}, events: {} };
  }
  componentDidMount() {
    fetch("/main/info/days")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ days: data });
      });
    fetch("/main/info/events")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ events: data });
      });
  }
  render() {
    return (
      <article>
        <Days days={this.state.days} />
        <Events events={this.state.events} />
      </article>
    );
  }
}

export default Home;
