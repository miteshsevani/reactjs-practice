import React from "react";
import Clock from "./Clock";
import TimerButton from "./TimerButton";

export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    handleClick() { 
        setInterval( () => {
            this.setState({
                time: this.state.time+1
            })
        }, 1000)
    }
    
    render() {
        return(
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-8 large-6">
                        <h2 className="page-title">Timer</h2>
                        <Clock time={this.state.time} />
                        <TimerButton start={this.handleClick.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}