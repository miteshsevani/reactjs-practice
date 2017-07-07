import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Controls from "./Controls";

export default class Countdown extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 0,
            countdownStatus: "stopped"
        }
    }

    componentDidUpdate(prevProps, prevState) {        
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case "started":
                    this.startTime();
                    break;
                case "stopped":
                    this.setState({
                        count:0
                    })
                case "paused":
                    clearInterval(this.time);
                    this.time = undefined;
                    break;
            }
        }
    }

    startTime() {
        this.timer = setInterval(() => {
            let newCount = this.state.count-1;
            this.setState({
                count: newCount >= 0 ? newCount: 0
            })            
        }, 1000)
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: "started"
        })
    }
    
    handleStatusChange() {
        this.setState({
            countdownStatus: newStatus
        })
    }

    render() {
        let { count, countdownStatus } = this.state;
        const renderControlArea = () => {
            if(countdownStatus !== "stopped") {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            }
        }

        return(
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-8 large-6">    
                        <h2 className="page-title">Countdown</h2>
                        <Clock time={count} />   
                        {renderControlArea(countdownStatus)}
                    </div>
                </div>
            </div>
        )
    }
}