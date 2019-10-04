import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import EventList from './components/event-list/EventList';
import EventDetails from './components/eventDetails/EventDetails';
import Authorize from './components/authorization/Authorize';
import About from './components/Aboutus/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={EventList} />
						<Route exact path="/user/authorize" component={Authorize} />
						<Route exact path="/user/about" component={About} />
						<Route exact path="/user/contact" component={Contact} />
						<Route path="/:id" component={EventDetails} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
