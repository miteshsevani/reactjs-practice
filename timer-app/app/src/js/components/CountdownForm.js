import React from "react";

export default class CountdownForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;
        
        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return(
            <form onSubmit={this.onSubmit.bind(this)} ref="form" className="countdown-form">
                <input type="text" ref="seconds" placeholder="Enter seconds" />
                <button className="button expanded">Start</button>
            </form>
        )
    }
}