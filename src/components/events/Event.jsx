import React, { Component } from 'react';
import './event.scss';

class Event extends Component {
	render() {
		const { id, name, img, time, age, location, date, price } = this.props.event;
		console.log(this.props.event);

		return (
			<div className="card-container">
				<img src={img} alt="event" />
				<h4 className="name">{name}</h4>
				<p>
					{location}
					<span>
						<i className="fas fa-map-marker " />
					</span>
				</p>
				<p>Rs {price}/- onwards</p>
			</div>
		);
	}
}

export default Event;
