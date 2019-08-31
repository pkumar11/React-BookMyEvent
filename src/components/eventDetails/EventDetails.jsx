import React, { Component } from 'react';
import { eventData } from '../../eventData';
import './eventdetails.scss';
import { Link } from 'react-router-dom';
import Authorize from '../authorization/Authorize';

class EventDetails extends Component {
	state = {
		response: {},
		seconds: 0,
		minutes: 0,
		hours: 0,
		days: 0
	};
	async componentDidMount() {
		console.log(typeof this.props.match.params.id);
		const response = await eventData.find((data) => data.id.toString() === this.props.match.params.id);
		console.log('**********', { response });
		setInterval(() => this.getcountdown(), 1000);
		this.setState({
			response
		});
	}

	getcountdown = () => {
		const time = Date.parse(this.state.response.date) - Date.parse(new Date());
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		this.setState({ seconds, minutes, hours, days });
	};
	leading0 = (num) => {
		return num < 10 ? '0' + num : num;
	};
	render() {
		console.log(this.props.match.params.id);
		const { response } = this.state;

		return (
			<article>
				<div className="event-details">
					<div className="img-container">
						<img src={response.img} alt="event" />
					</div>
					<div className="event-info">
						<h1>{response.name}</h1>
						<p>Age limi:{response.age}</p>
						<p>Total Time:{response.time}</p>
						<h3>Date: {response.date}</h3>
						<h3>Location: {response.location}</h3>
						<h2>Price: {response.price}/- onwards</h2>
						<Link to="/authorize">
							<button type="submit">Book Now</button>
						</Link>
					</div>
				</div>
				<div className="countdown">
					<h2>CounDown For The Event..</h2>
					<div className="days">{this.leading0(this.state.days)} days</div>
					<div className="hours">{this.leading0(this.state.hours)} hours</div>
					<div className="minutes">{this.leading0(this.state.minutes)} minutes</div>
					<div className="seconds">{this.leading0(this.state.seconds)} seconds</div>
				</div>
			</article>
		);
	}
}

export default EventDetails;
