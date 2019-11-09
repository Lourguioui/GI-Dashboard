import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Event.css";

class Event extends Component {
  state = {};
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="event">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p className="event-name">Local Hack Day</p>
            </div>
            <div className="col-sm-3 text-left">
              <p className="event-date">7 Decembre 2019</p>
            </div>
            <div className="col-3">
              <p className="event-place">ESI</p>
            </div>
            <div className="col-sm-2">
              <button tyoe="button" className="remove btn btn-danger">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Event;
