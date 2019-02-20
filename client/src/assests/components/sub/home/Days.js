import React from "react";

const Days = props => {
  const dayEle = [];
  // loop through days of week to make elements
  for (let day in props.days) {
    dayEle.push(
      <section className="day" key={day}>
        <h2 className="day-name">{day}</h2>
        <h4 className="day-title">Hours</h4>
        <p className="day-text">{props.days[day].hours}</p>
        <h4 className="day-title">Happy Hour</h4>
        <p className="day-text">{props.days[day].happyHour}</p>
        <h4 className="day-title">Special</h4>
        <p className="day-text">{props.days[day].special}</p>
      </section>
    );
  }
  return <div className="week">{dayEle}</div>;
};

export default Days;
