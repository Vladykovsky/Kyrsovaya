import React, { Component } from 'react';
import './events.css';


class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    const { events } = this.state;
    return (
      <div className="event">
        <div className="eventbox">
          <h1>UPCOMING EVENTS</h1>
          <h3>Republican Wushu Tournament 03.05</h3>
          <h3>International Karate Workshop 06.05</h3>
          <h3>taekwondo judging workshop 07.05</h3>
          <h3>International Jiu Jitsu Competitions in Hungary 10.05</h3>
          <h3>Japan National Aikido Team Master Class 13.05</h3>
          <h3>Demonstration performance of the Azerbaijani national team in the kata section 15.05</h3>
          <h3>Team aikido training 18.05 17:30</h3>
          <h3>Team karate training 18.05 19:30</h3>
          <h3>Republican wushu competitions 19.05</h3>
          <h3>Club Martial Arts Tournament 27.05</h3>
        </div>
        <div className="eventbox2">
          <img src="/calendar.png" alt="test" />
        </div>
      </div>
    );
  }
}

export default Events;
