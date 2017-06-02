import React from "react";

export default class Nav extends React.Component {
	
	constructor() {
		super();
		this.state = {
			"navigation": [
				{
					"text":"Home",
					"link":"#home"
				},
				{
					"text":"About",
					"link":"#about"
				},
				{
					"text":"Apply",
					"link":"#apply"
				},
				{
					"text":"Contact",
					"link":"#contact"
				}
			]
		};
	}

	getNav() {		
		return(
			<ul className="nav navbar-nav">
				{this.state.navigation.map((nav,key) => {
					return (
						<li key={key}><a href={nav.link}>{nav.text}</a></li>
					);
				})}
			</ul>
		)
	}

	render() {
		return(
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							{this.getNav()}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}