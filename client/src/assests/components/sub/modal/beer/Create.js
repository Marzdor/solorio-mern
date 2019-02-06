import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abv: "",
      desc: "",
      name: "",
      style: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    const newInfo = e.target.value;
    const target = e.target.id.slice(5);

    switch (target) {
      case "name":
        this.setState({ name: newInfo });
        break;
      case "desc":
        this.setState({ desc: newInfo });
        break;
      case "abv":
        this.setState({ abv: newInfo });
        break;
      case "style":
        this.setState({ style: newInfo });
        break;
      default:
        console.log("ERROR: " + target);
        break;
    }
  }

  render() {
    return (
      <form action={"admin/beer/create"} method="post" className="modal">
        <label className="modal-item">
          Name
          <input
            id="form-name"
            name="name"
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter Name Here."
            value={this.state.name}
            required
          />
        </label>
        <label className="modal-item">
          Style
          <input
            id="form-style"
            name="style"
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter Style Here."
            value={this.state.style}
            required
          />
        </label>
        <label className="modal-item">
          Abv
          <input
            id="form-abv"
            name="abv"
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter Abv Here."
            value={this.state.abv}
            required
          />
        </label>
        <label className="modal-item">
          Description
          <input
            id="form-desc"
            name="desc"
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter Description Here."
            value={this.state.desc}
            required
          />
        </label>
        <button
          className="edit-btn edit-btn--create"
          type="submit"
          value="Submit"
        >
          Create
        </button>
      </form>
    );
  }
}

export default Create;
