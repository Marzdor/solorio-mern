import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./assests/components/Header";
import Home from "./assests/components/Home";
import Menu from "./assests/components/Menu";
import About from "./assests/components/About";
import Contact from "./assests/components/Contact";
import Footer from "./assests/components/Footer";
import Edit from "./assests/components/Edit";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Router>
          <div>
            <Header handleNavClick={this.handleNavClick} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              {/* TODO Make edit a Private Route */}
              <Route path="/edit" component={Edit} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </main>
    );
  }
}

export default App;
