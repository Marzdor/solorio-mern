import React from "react";

const Info = props => {
  const hrElements = [];

  for (let day in props.hours) {
    hrElements.push(
      <p key={day} className="contact-hours">
        {day + ": " + props.hours[day]}
      </p>
    );
  }
  return <div>{hrElements}</div>;
};

export default Info;
