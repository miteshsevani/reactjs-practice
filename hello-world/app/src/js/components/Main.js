import React from "react";
import ReactDOM from "react-dom";
import GreetingMessage from "./GreetingMessage";
import GreetingForm from "./GreetingForm";

export default class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        }
    }

    handleUpdate(update){
        this.setState({
            name: "Hello " + update.name,
            message: update.message
        })
    }
 
    render() {
        return(
            <div>
                <GreetingMessage name={this.state.name} message={this.state.message} />
                <GreetingForm onUpdate={this.handleUpdate.bind(this)} />
            </div>
        )
    }
}

Main.defaultProps = {
    name: 'What is your name?',
    message: 'What is your message?'
};