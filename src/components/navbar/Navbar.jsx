import React from 'react';
import './navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<img src="./img/logo.png" alt="logo" className="img" />
			<ul className="nav-links">
				<li>
					<a className="nav-link active" href="/">
						Home
					</a>
				</li>
				<li>
					<a className="nav-link" href="/about">
						About Us
					</a>
				</li>
				<li>
					<a className="nav-link" href="/contact">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
