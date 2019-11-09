import React, { Component } from "react";
import "./Events.css";
import Event from "./Event.jsx";
class Events extends Component {
  state = {

  };
  render() {
    return (
      <div className="Events">
          <Event/>
      </div>
    );
  }
}

export default Events;
