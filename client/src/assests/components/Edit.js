import React, { Component } from "react";

import Beer from "./Beer";

// TODO Make pop-up form for editing a beer
// TODO Make pop-up form for creating a beer
// TODO Make pop-up form for editing info

class Edit extends Component {
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
        console.log(data);
        this.setState({ beer: data });
      });
    fetch("main/info")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ info: data[0] });
      });
  }
  render() {
    return (
      <div>
        <section>
          <div className="edit">
            <div className="edit-item">
              <h2>Email</h2>
              <button>Edit</button>
            </div>
            <div className="edit-item">
              <h2>Phone</h2>
              <button>Edit</button>
            </div>
            <div className="edit-item">
              <h2>Tasting Room Hours</h2>
              <button>Edit</button>
            </div>
          </div>
        </section>
        <Beer edit={true} beer={this.state.beer} />;
      </div>
    );
  }
}

export default Edit;
