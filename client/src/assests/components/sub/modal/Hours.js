import React from "react";

const Hours = props => {
  const hrElements = [];

  for (let day in props.hours) {
    hrElements.push(
      <div key={day}>
        <label>
          {day.charAt(0).toUpperCase() + day.slice(1)}
          <input
            id={"form-" + day}
            onChange={props.handleFormChange}
            type="text"
            placeholder="Enter Hours Here."
            value={props.hours[day]}
            required
          />
        </label>
      </div>
    );
  }

  return <div>{hrElements}</div>;
};

export default Hours;
