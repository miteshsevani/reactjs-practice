import React from "react";

export default class Main extends React.Component {
	
	constructor() {
		super();
		this.state = {
			"title": "Main Nav",
			"navigation": [
				{
					"id":"1",
					"text":"Home",
					"link":"#home"
				},
				{
					"id":"2",
					"text":"About",
					"link":"#about"
				},
				{
					"id":"3",
					"text":"Apply",
					"link":"#apply"
				},
				{
					"id":"4",
					"text":"Contact",
					"link":"#contact"
				}
			]
		};
	}

	getNav() {		
		return(
			<span>
				{this.state.navigation.map(nav => {
					return (
						<li key={nav.id}><a href={nav.link}>{nav.text}</a></li>
					);
				})}
			</span>
		)
		
	}

	render() {
		return(
			<div>
				<h3>{this.state.title}</h3>
				<nav>
					<ul>
						{this.getNav()}
					</ul>
				</nav>
			</div>
		);
	}
}