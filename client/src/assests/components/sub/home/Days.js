import React from "react";

const Days = props => {
  const dayEle = [];
  // loop through days of week to make elements
  for (let day in props.days) {
    let curEle;
    // If closed reduce info being displayed for element
    if (props.days[day].hours === "Closed") {
      curEle = (
        <section className="day day--closed" key={day}>
          <h2 className="day-name">{day}</h2>
          <h3 className="day-title">Closed</h3>
        </section>
      );
    } else {
      curEle = (
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
    dayEle.push(curEle);
  }
  return <div className="home home-week">{dayEle}</div>;
};

export default Days;
