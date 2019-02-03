import React from "react";

const Form = props => {
  return (
    <form className="contact-form">
      <h2>Stay In Touch</h2>
      <label className="contact-form-label">
        Name
        <input
          id="form-name"
          value={props.contact.name}
          onChange={props.handleFormChange}
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
          onChange={props.handleFormChange}
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
          onChange={props.handleFormChange}
          type="checkbox"
        />
        Check here to receive email updates
      </label>
      <label className="contact-form-label">
        Subject
        <input
          id="form-subject"
          value={props.contact.subject}
          onChange={props.handleFormChange}
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
          onChange={props.handleFormChange}
          className="contact-form-textarea"
          type="text"
          placeholder="Enter Message Here."
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
