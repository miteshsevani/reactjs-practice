import React from "react";
import Nav from "./Nav.js";

export default class Header extends React.Component {	
	render() {
		return(
			<div className="container-fluid">
				<div className="row">
					<header>
						<h1>Pizza Order System</h1>
					</header>
				</div>
				<Nav />
			</div>
		);
	}
}