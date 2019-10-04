import React, { Component } from 'react';
import './event.scss';
import { Link } from 'react-router-dom';
class Event extends Component {
	render() {
		const { id, name, img, location, price } = this.props.event;

		return (
			<div className="card-container">
				<Link to={`${id}`}>
					<img src={img} alt="event" />
					<h4 className="name">{name}</h4>
					<p>
						{location}
						<span>
							<i className="fas fa-map-marker " />
						</span>
					</p>
					<p>Rs {price}/- onwards</p>
				</Link>
			</div>
		);
	}
}

export default Event;
