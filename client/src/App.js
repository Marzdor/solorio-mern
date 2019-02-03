import React, { Component } from "react";

import Header from "./assests/components/Header";
import Home from "./assests/components/Home";

class App extends Component {
  render() {
    return (
      <article className="container">
        <Header handleNavClick={this.handleNavClick} />
        <Home />
        <Footer />
      </article>
    );
  }
}

export default App;
