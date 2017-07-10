import React from "react";

const TimerButton = (props) => {
    if(props.status === "stopped") {
        return(
            <div>
                <button onClick={props.start} className="button">Start</button>
                <button onClick={props.start} className="button alert">Clear</button>
            </div>
        )
    } else {
        return(
            <div>
                <button onClick={props.start} className="button alert hollow">Stop</button>                
            </div>
        )
    }
    
}

module.exports = TimerButton;