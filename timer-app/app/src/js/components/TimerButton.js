import React from "react";

const TimerButton = (props) => {
    return(
        <button onClick={props.start} className="button">Start</button>
    )
}

module.exports = TimerButton;