import React, { Component } from "react";
import "./Events.css";
import Event from "./Event.jsx";
class Events extends Component {
  state = {
      Events : [
        {eventId : '1', eventName : 'LHD Learn' , eventDate:'10 Septembre 2019', eventPlace: 'ESI'},
        {eventId: '2', eventName : 'CasbahTech', eventDate : '31 Octobre 2019', evnetPlace : 'CasbahTech'},
        {eventId : '3', eventName : 'LHD Build', eventDate  : '7 Décembre 2019', eventPlace : 'ESI'},
        {eventId: '4', eventName : 'Unicode', eventDate : 'undefined',eventPlace : 'ESI' },
        {eventId : '5' ,eventName : 'Hack IT', eventDate : 'undefined', eventPlace : 'ESI'}

      ]
  };
  handleDelete = eventId =>{
    const Events = this.state.Events.filter(x => x.Id != eventId);
    this.setState({Events});
  }
  render() {
    return (
      <div className="Events">
          {this.state.Events.map(events => (
            <Event
                Key={events.Id}
                Id={events.Id}
                eventName={events.eventName}
                eventDate={events.eventDate}
                eventPlace={events.eventPlace}
            />
          ))}
      </div>
    );
  }
}

export default Events;
