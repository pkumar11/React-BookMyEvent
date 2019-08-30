import React, { Component } from 'react';
import { eventData } from '../../eventData';
import Event from '../events/Event';
import './eventlist.scss';

class EventList extends Component {
	state = {
		events: eventData
	};
	render() {
		const { events } = this.state;
		return <section className="card-list">{events.map((event) => <Event key={event.id} event={event} />)}</section>;
	}
}

export default EventList;
