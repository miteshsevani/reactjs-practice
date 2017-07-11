import React from "react";

export default class CountdownForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;

        console.log("Total input = ",$('input').length);
        
        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return(
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-5">    
                        <form onSubmit={this.onSubmit.bind(this)} ref="form" className="countdown-form">
                            <input type="text" ref="seconds" placeholder="Enter seconds" />
                            <button className="button">Start</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}