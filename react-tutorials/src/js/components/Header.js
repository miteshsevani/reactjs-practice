import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default class Header extends React.Component {
	render() {
		
		return (
			<div class="container">
				<div class="row">
					<div class="col col-sm-12">
						<header>
							<Title 
							title={this.props.title} 
							changeTitle={this.props.changeTitle} 
							/>
							<Subtitle 
							subTitle={this.props.subTitle} 
							changeSubTitle={this.props.changeSubTitle} 
							/>
						</header>
					</div>
				</div>
			</div>
		);
	}
}