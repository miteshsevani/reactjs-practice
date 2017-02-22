import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			title: "State title - Click me",
			subTitle: "Subtitle"

		}
	}

	_changeTitle() {
		 this.setState({
		 	title: "New title after click"
		 })
	}

	_changeSubTitle(subTitle) {
		this.setState({ subTitle });
	}

	render() {	
		return (
			<div>
				<Header 
				changeTitle={this._changeTitle.bind(this)} 
				title={this.state.title} 
				subTitle={this.state.subTitle} 
				changeSubTitle={this._changeSubTitle.bind(this)}
				/>
				<Footer />
			</div>
		);
	}
}