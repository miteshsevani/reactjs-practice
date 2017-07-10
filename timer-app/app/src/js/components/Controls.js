import React from "react";

export default class Controls extends React.Component {
    onStatusChange(newStatus) {                
        return () => {
            this.props.onStatusChange(newStatus)
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("Component will receive props", newProps.countdownStatus);
    }

    render() {        
        const {countdownStatus} = this.props;
        const renderStartStopButton = () => {
            if(countdownStatus === "started") {
                return <button className="button secondary" onClick = {this.onStatusChange("paused")}>Pause</button>
            } else if(countdownStatus === "paused") {
                return <button className="button primary" onClick = {this.onStatusChange("started")}>Start</button>
            }
        }

        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert" onClick = {this.onStatusChange("stopped")}>Clear</button>
            </div>
        )
    }
    
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
}