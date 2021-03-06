import React, { Component } from "react";

import Hours from "./Hours";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: {}, email: "", phone: "" };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidMount() {
    fetch("main/info")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          email: data[0].email,
          hours: data[0].hours,
          phone: data[0].phone
        });
      });
  }

  handleFormChange(e) {
    const newInfo = e.target.value;
    const target = e.target.id.slice(5);

    switch (target) {
      case "email":
        this.setState({ email: newInfo });
        break;
      case "phone":
        this.setState({ phone: newInfo });
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        const newHours = this.state.hours;
        newHours[target] = newInfo;
        this.setState({ hours: newHours });
        break;
      default:
        console.log("ERROR: " + target);
        break;
    }
  }

  render() {
    return (
      <form action={"admin/info"} method="post" className="modal">
        <label className="modal-item">
          Email
          <input
            id="form-email"
            name="email"
            onChange={this.handleFormChange}
            type="email"
            placeholder="Enter Email Here."
            value={this.state.email}
            required
          />
        </label>
        <label className="modal-item">
          Phone Number
          <input
            id="form-phone"
            name="phone"
            onChange={this.handleFormChange}
            type="phone"
            placeholder="Enter Phone Number Here."
            value={this.state.phone}
            required
          />
        </label>
        <Hours
          handleFormChange={this.handleFormChange}
          hours={this.state.hours}
        />
        <button
          className="edit-btn edit-btn--create"
          type="submit"
          value="Submit"
        >
          Update
        </button>
      </form>
    );
  }
}

export default Info;
