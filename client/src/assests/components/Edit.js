import React, { Component } from "react";

import Beer from "./sub/menu/Beer";
import BeerEdit from "./sub/modal/beer/Edit";
import BeerCreate from "./sub/modal/beer/Create";
import Info from "./sub/modal/Info";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: { active: false, mode: "", type: "" },
      beer: [],
      info: {}
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
  }
  handleClick(e) {
    const type = e.target.previousElementSibling.innerHTML;
    const mode = e.target.innerHTML;

    let config = {};
    switch (mode) {
      case "Edit":
        switch (type) {
          case "Info":
            config = { active: true, mode: mode, type: type, id: "" };
            break;
          default:
            this.state.beer.forEach(beer => {
              if (beer.name === type) {
                config = {
                  active: true,
                  mode: mode,
                  type: "Beer-Edit",
                  id: beer._id
                };
              }
            });
            break;
        }
        break;
      case "Create":
        config = { active: true, mode: mode, type: "Beer-Create", id: "" };
        break;
      case "Cancel":
        config = { active: false, mode: "", type: "", id: "" };
        break;
      case "Delete":
        const beerName = e.target.parentElement.firstChild.innerHTML;
        const del = window.confirm("Delete " + beerName + " from database?");
        let toDel = "";

        this.state.beer.forEach(beer => {
          if (beer.name === beerName) {
            toDel = beer._id;
          }
        });
        if (del) {
          fetch("admin/beer=" + toDel, {
            method: "delete"
          }).then(response =>
            response.json().then(json => {
              return json;
            })
          );
          window.location.reload();
        }
        break;
      default:
        console.log("ERROR: " + mode + " | " + type);
        break;
    }
    this.setState({ modal: config });
  }
  renderSwitch(type) {
    switch (type) {
      case "Info":
        return <Info handleCancel={this.state.handleClick} />;
      case "Beer-Edit":
        return (
          <BeerEdit
            beer={this.state.modal.id}
            handleCancel={this.state.handleClick}
          />
        );
      case "Beer-Create":
        return <BeerCreate handleCancel={this.state.handleClick} />;
      default:
        console.log("ERROR: " + type);
        break;
    }
  }

  render() {
    return (
      <div>
        {this.state.modal.active ? (
          <div className="modal">
            {this.renderSwitch(this.state.modal.type)}
            <button
              onClick={this.handleClick}
              className="edit-btn edit-btn--edit"
            >
              Cancel
            </button>
          </div>
        ) : (
          <section>
            <div className="edit">
              <div className="edit-item">
                <h2>Info</h2>
                <button
                  onClick={this.handleClick}
                  className="edit-btn edit-btn--edit"
                >
                  Edit
                </button>
              </div>
            </div>
            <Beer
              handleClick={this.handleClick}
              edit={true}
              beer={this.state.beer}
            />
          </section>
        )}
      </div>
    );
  }
}

export default Edit;
