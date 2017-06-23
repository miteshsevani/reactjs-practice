import React from "react";
import ReactDOM from "react-dom";
import GreetingMessage from "./GreetingMessage";
import GreetingForm from "./GreetingForm";

export default class Main extends React.Component{

    constructor() {
        super();
        this.state = {
            name: "what is your name?"
        }
    }

    handleNewName(name){
        this.setState({
            name: name
        })
    }
 
    render() {
        return(
            <div>
                <GreetingMessage name={this.state.name} message="This is the message" />
                <GreetingForm onNewName={this.handleNewName.bind(this)} />
            </div>
        )
    }
}