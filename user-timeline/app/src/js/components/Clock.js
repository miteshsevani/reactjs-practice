import React from "react";
import Title from "./Title";

export default class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {dateTime: new Date().toLocaleString()}
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({dateTime: new Date().toLocaleString()})
    }

    render() {        
        return(
            <div className="clock">
                <h3><Title title="Clock" /></h3>
                
                <p>{this.state.dateTime}</p>
            </div>
        )
    }
}