import React from "react";
import ReactDOM from "react-dom";

export default class GreetingMessage extends React.Component{
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.message}</h3>
            </div>
        )
    }
}