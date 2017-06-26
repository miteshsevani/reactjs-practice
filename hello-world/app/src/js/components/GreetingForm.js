import React from "react";
import ReactDOM from "react-dom";
import GreetingMessage from "./GreetingMessage";

export default class GreetingForm extends React.Component{
    
    onFormSubmit(e) {
        e.preventDefault();
        
        let updates = {};
        let name = this.refs.name.value;
        let message = this.refs.message.value;

        if(name.length > 0) {            
            updates.name = name;
            this.refs.name.value = '';
        }

        if(message.length > 0) {            
            updates.message = message;
            this.refs.message.value = '';
        }
        
        
        if(Object.keys(updates).length > 0) {
            this.props.onUpdate(updates)
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div><input type="text" ref="name" placeholder="Enter your name"/></div>
                    <div><textarea ref="message" placeholder="Enter message"></textarea></div>
                    <div><button>Submit</button></div>
                </form>
            </div>
        )
    }
}