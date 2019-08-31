import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import EventList from './components/event-list/EventList';
import EventDetails from './components/eventDetails/EventDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={EventList} />
						<Route path="/:id" component={EventDetails} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
