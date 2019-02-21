import React from "react";

const Events = props => {
  const eventEle = [];
  // loop through events to make elements
  for (let event in props.events) {
    eventEle.push(
      <section className="events-event" key={props.events[event].name}>
        <h2>{props.events[event].name}</h2>
        <h3>{props.events[event].date}</h3>
        <h4>{props.events[event].time}</h4>
      </section>
    );
  }

  return (
    <div className="home home-event">
      <h1 className="events-header">Upcoming Events</h1>
      <div className="events">{eventEle}</div>
    </div>
  );
};

export default Events;
