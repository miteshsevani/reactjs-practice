import React from "react";
import Clock from "./Clock";
import TimerButton from "./TimerButton";

export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            buttonStatus: "stopped"
        }
    }

    handleClick() { 
        if(this.state.buttonStatus === "stopped") {
            this.timer = setInterval( () => {
                this.setState({
                    time: this.state.time+1,
                    buttonStatus: "started"
                })
            }, 1000)
        } else if (this.state.buttonStatus === "started") {
            clearInterval(this.timer);
            this.setState({
                buttonStatus: "stopped"
            })
        } else if (this.state.buttonStatus === "cleared") {
            clearInterval(this.timer);
            this.setState({
                time: 0,
                buttonStatus: "stopped"
            })
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-8 large-6">
                        <h2 className="page-title">Timer</h2>
                        <Clock time={this.state.time} />
                        <TimerButton start={this.handleClick.bind(this)} status={this.state.buttonStatus} />
                    </div>
                </div>
            </div>
        )
    }
}