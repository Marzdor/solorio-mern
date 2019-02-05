import React from "react";

const Email = props => {
  return (
    <form>
      <label>
        Email
        <input
          id="form-email"
          onChange={props.handleFormChange}
          type="email"
          placeholder="Enter Email Here."
          required
        />
      </label>

      <input type="submit" value="Submit" />
      <button>Cancel</button>
    </form>
  );
};

export default Email;
