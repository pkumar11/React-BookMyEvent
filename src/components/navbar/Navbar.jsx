import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
			<img src="./img/logo.png" alt="logo" className="img" />
			</Link>
			<ul className="nav-links">
				<li>
					<Link to="/" className="nav-link">Home</Link>
				</li>
				<li>
				<Link to="/user/about" className="nav-link">About us</Link>

				</li>
				<li>
				<Link to="/user/contact" className="nav-link">Contact</Link>

				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
