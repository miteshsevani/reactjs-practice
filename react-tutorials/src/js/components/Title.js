import React from "react";

export default class Title extends React.Component {
	render() {
		return (			
			<h1 onClick={this.props.changeTitle}>{this.props.title}</h1>
		);
	}
}