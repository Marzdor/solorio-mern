import React, { Component } from "react";

import Beer from "./Beer";
import Modal from "./Modal";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: { active: false, mode: "", type: "" },
      beer: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("main/beer")
      .then(res => {
        return res.json();
      })
      .then(data => {
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
  handleClick(e) {
    const type = e.target.previousElementSibling.innerHTML;
    const mode = e.target.innerHTML;
    let config = {};
    switch (mode) {
      case "Edit":
        switch (type) {
          case "Email":
          case "Phone":
          case "Hours":
            config = { active: true, mode: mode, type: type };
            break;
          default:
            config = { active: true, mode: mode, type: "Beer" };
            break;
        }
        break;
      case "Create":
        config = { active: true, mode: mode, type: "Beer" };
        break;
      case "Delete":
        const del = window.confirm("Delete " + type + " from database?");
        if (del) {
          console.log("User wants to continue!");
          // TODO Add Delete
        }
        break;
      default:
        console.log("ERROR: " + mode + " | " + type);
        break;
    }
    this.setState({ modal: config });
  }

  render() {
    return (
      <div>
        {this.state.modal.active && <Modal config={this.state.modal} />}
        <section>
          <div className="edit">
            <div className="edit-item">
              <h2>Email</h2>
              <button
                onClick={this.handleClick}
                className="edit-btn edit-btn--edit"
              >
                Edit
              </button>
            </div>
            <div className="edit-item">
              <h2>Phone</h2>
              <button
                onClick={this.handleClick}
                className="edit-btn edit-btn--edit"
              >
                Edit
              </button>
            </div>
            <div className="edit-item">
              <h2>Hours</h2>
              <button
                onClick={this.handleClick}
                className="edit-btn edit-btn--edit"
              >
                Edit
              </button>
            </div>
          </div>
        </section>
        <Beer
          handleClick={this.handleClick}
          edit={true}
          beer={this.state.beer}
        />
        ;
      </div>
    );
  }
}

export default Edit;
