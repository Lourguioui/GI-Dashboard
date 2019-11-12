import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Event.css";

class Event extends Component {
  state = {
    eventId: this.props.eventId,
    eventName: this.props.eventName,
    eventDate: this.props.eventDate,
    eventPlace: this.props.eventPlace
  };
  render() {
    document.getElementsByTagName("META")[2].name = "viewport";
    document.getElementsByTagName("META")[2].content =
      "width=device-width, initial-scale=1";
    return (
      <div className="event">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p className="event-name">{this.state.eventName}</p>
            </div>
            <div className="col-sm-3 text-left">
              <p className="event-date">{this.state.eventDate}</p>
            </div>
            <div className="col-3">
              <p className="event-place">{this.state.eventPlace}</p>
            </div>
            <div className="col-sm-2">
              <button type="button" onClick={() => this.props.onRemove(this.props.events.eventId)} className="remove btn btn-danger">
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
