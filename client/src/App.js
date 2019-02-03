import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Components
import Header from "./assests/components/Header";
import Home from "./assests/components/Home";
import Menu from "./assests/components/Menu";
import About from "./assests/components/About";
import Contact from "./assests/components/Contact";
import Footer from "./assests/components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        subscribe: false,
        subject: "",
        message: ""
      }
    };
  }
  render() {
    return (
      <article className="container">
        <Router>
          <div>
            <Header handleNavClick={this.handleNavClick} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/contact"
                render={props => (
                  <Contact
                    {...props}
                    contact={this.state.contact}
                    handleChange={this.handleChange}
                    handleCheckClick={this.handleChange}
                  />
                )}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </article>
    );
  }
}

export default App;
