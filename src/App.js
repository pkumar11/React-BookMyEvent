import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import EventList from './components/event-list/EventList';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<EventList />
			</React.Fragment>
		);
	}
}

export default App;
