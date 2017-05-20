import React from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Content from "./Content.js";
import Footer from "./Footer.js"

export default class Main extends React.Component {	
	render() {
		return(
			<div className="wrapper">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}