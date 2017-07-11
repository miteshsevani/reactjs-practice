import React from "react";
import Clock from "./Clock";
import Controls from "./Controls";

export default class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: "stopped"
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus) {
            switch(this.state.timerStatus) {
                case "started":
                    this.startTime();
                    break;
                case "stopped":
                    this.setState({
                        count:0
                    })
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }       
    
    startTime() {        
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count+1      
            });
        }, 1000)
    }

    handleTimer() {
        this.setState({
            timerStatus: "started"
        })
    }

    handleStatusChange(newStatus) {
        this.setState({
            timerStatus: newStatus
        })
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    render() {        
        let { count, timerStatus } = this.state; 

        return(
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-8 large-6">
                        <h2 className="page-title">Timer</h2>
                        <Clock time={count} />                                                
                        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}