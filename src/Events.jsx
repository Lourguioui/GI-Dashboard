import React, { Component } from "react";
import "./Events.css";
import Event from "./Event.jsx";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: [
        { eventId: '1', eventName: 'LHD Learn', eventDate: '10 Septembre 2019', eventPlace: 'ESI' },
        { eventId: '2', eventName: 'CasbahTech', eventDate: '31 Octobre 2019', evnetPlace: 'CasbahTech' },
        { eventId: '3', eventName: 'LHD Build', eventDate: '7 Décembre 2019', eventPlace: 'ESI' },
        { eventId: '4', eventName: 'Unicode', eventDate: 'undefined', eventPlace: 'ESI' },
        { eventId: '5', eventName: 'Hack IT', eventDate: 'undefined', eventPlace: 'ESI' }

      ],
      eventId: '',
      eventName: '',
      eventDate: '',
      eventPlace: '',
      displayStyle: 'none',
      formStyle: ''
    };
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangeEventDate = this.handleChangeEventDate.bind(this);
    this.handleChangeEventPlace = this.handleChangeEventPlace.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleDelete = eventId => {
    const Events = this.state.Events.filter(x => x.eventId !== eventId);
    this.setState({ Events });

  }
  handleSubmit = event => {
    const newEvent = {
      eventId: this.state.Events.length + 1,
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      eventPlace: this.state.eventPlace
    }
    if (newEvent.eventName.length != 0 && newEvent.eventDate.length != 0 && newEvent.eventPlace.length != 0) {
      const Events = this.state.Events;
      Events.push(newEvent);
      this.setState({ Events });
      event.preventDefault();
    } else {
      this.setState({ formStyle: '2px solid red' });
    }
    document.getElementById("add-event-form").reset();
    event.preventDefault();
  }
  handleChangeEventName = event => {
    this.setState({ eventName: event.target.value })
  }
  handleChangeEventDate = event => {
    this.setState({ eventDate: event.target.value })
  }
  handleChangeEventPlace = event => {
    this.setState({ eventPlace: event.target.value })
  }
  handleCancel = event => {
    this.setState({ displayStyle: 'none' });
  }
  handleDisplayForm = event => {
    var displayStyle;
    if (this.state.displayStyle === 'none') {
      displayStyle = 'block';
    } else {
      displayStyle = 'none';
    }
    this.setState({ displayStyle });
  }

  render() {
    document.title = "Admin dashboard | Events";
    return (
      <div className="Events">
        {this.state.Events.map(events => (
          <Event
            Key={events.eventId}
            eventName={events.eventName}
            eventDate={events.eventDate}
            eventPlace={events.eventPlace}
            onRemove={this.handleDelete}
            events={events}
          />
        ))}
        <div className="eventForm">
          <form onSubmit={this.handleSubmit} id="add-event-form" className="animate" style={{ display: this.state.displayStyle }}>
            <label>
              <input type="text" style={{ border: this.state.formStyle }} placeholder="Enter Event Name" onChange={this.handleChangeEventName} />
            </label>
            <label>
              <input type="text" placeholder="Enter Event Date" style={{ border: this.state.formStyle }} onChange={this.handleChangeEventDate} />
            </label>
            <label>
              <input type="text" placeholder="Enter Event Place" style={{ border: this.state.formStyle }} onChange={this.handleChangeEventPlace} />
            </label>
            <input type="submit" value="Submit" />
            <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
          </form>
          <button className="display-event-form" onClick={this.handleDisplayForm}>Add event</button>
        </div>
      </div>
    );
  }
}

export default Events;
