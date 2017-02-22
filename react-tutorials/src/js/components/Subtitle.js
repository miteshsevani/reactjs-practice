import React from "react";

export default class Subtitle extends React.Component {
	
	_handleChangeSubTitle(e) {
		const newSub = e.target.value;
		this.props.changeSubTitle(newSub);
	}

	render() {
		return (
			<div>
				<h2>{this.props.subTitle}</h2>
				<input 
				name="subtitle" 
				onChange={this._handleChangeSubTitle.bind(this)} 
				/>
			</div>
		);
	}
}