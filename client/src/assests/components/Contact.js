import React from "react";
import info from "../data/info.json";

const hrElements = [];

for (let day in info.hours) {
  hrElements.push(
    <p key={day} className="contact-hours">
      {day + ": " + info.hours[day]}
    </p>
  );
}
const Contact = props => {
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
        <p className="contact-text">{info.email}</p>
        <h2 className="contact-title-sub">Phone</h2>
        <p className="contact-text">​{info.phone}</p>
        <h2 className="contact-title-sub">Tasting Room Hours</h2>
        <div>{hrElements}</div>
      </div>
      <form className="contact-form">
        <h2>Stay In Touch</h2>
        <label className="contact-form-label">
          Name
          <input
            id="form-name"
            value={props.contact.name}
            onChange={props.handleChange}
            className="contact-form-input-text"
            type="text"
            placeholder="Enter Name Here."
            required
          />
        </label>
        <label className="contact-form-label">
          Email
          <input
            id="form-email"
            value={props.contact.email}
            onChange={props.handleChange}
            className="contact-form-input-text"
            type="email"
            placeholder="Enter Email Here."
            required
          />
        </label>
        <label>
          <input
            id="form-checkbox"
            checked={props.contact.subscribe}
            onChange={props.handleChange}
            type="checkbox"
          />
          Check here to receive email updates
        </label>
        <label className="contact-form-label">
          Subject
          <input
            id="form-subject"
            value={props.contact.subject}
            onChange={props.handleChange}
            className="contact-form-input-text"
            type="text"
            placeholder="Enter Subject Here."
            required
          />
        </label>
        <label className="contact-form-label">
          Message
          <textarea
            id="form-message"
            value={props.contact.message}
            onChange={props.handleChange}
            className="contact-form-textarea"
            type="text"
            placeholder="Enter Message Here."
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
