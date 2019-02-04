import React, { Component } from "react";

import Form from "./Form";
import Hours from "./Info";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        subscribe: false,
        subject: "",
        message: ""
      },
      info: {},
      isLoading: true
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidMount() {
    fetch("/main/info")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ info: data[0], isLoading: false });
      });
  }

  handleFormChange(e) {
    let value = this.state.contact;
    const target = e.target;
    switch (target.id.slice(5)) {
      case "name":
        value.name = target.value;
        break;
      case "email":
        value.email = target.value;
        break;
      case "subject":
        value.subject = target.value;
        break;
      case "message":
        value.message = target.value;
        break;
      default:
        value.subscribe = !this.state.contact.subscribe;
    }

    this.setState({ contact: value });
  }
  render() {
    return (
      <section className="contact-container">
        <div className="contact-container-sub">
          <h2 className="contact-title">Find Us</h2>
          <iframe
            className="contact-map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.6118922606822!2d-117.60118050629825!3d34.09334217133656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c33432783116fb%3A0x7e6fecf328dd550e!2sSolorio+Brewing+Company%2C+LLC!5e0!3m2!1sen!2sus!4v1536179994986"
            frameBorder="0"
            allowFullScreen
          />
          <p className="contact-address">
            Solorio Brewing Company, LLC 9395 FERON BLVD. SUITE K, RANCHO
            CUCAMONGA CA 91730
          </p>
          <h2 className="contact-title-sub">Email</h2>
          <p className="contact-text">{this.state.info.email}</p>
          <h2 className="contact-title-sub">Phone</h2>
          <p className="contact-text">​{this.state.info.phone}</p>
          <h2 className="contact-title-sub">Tasting Room Hours</h2>
          <Hours hours={this.state.info.hours} />
        </div>
        <Form
          contact={this.state.contact}
          handleFormChange={this.handleFormChange}
        />
      </section>
    );
  }
}

export default Contact;
