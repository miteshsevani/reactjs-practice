import React from "react";
import ReactDOM from "react-dom";
import GreetingMessage from "./GreetingMessage";

export default class GreetingForm extends React.Component{
    
    onFormSubmit(e) {
        e.preventDefault();
        const nameRef = this.refs.name;        
        if(nameRef.value.length > 0) {
            this.props.onNewName(nameRef.value)
            nameRef.value = "";
        } else {
            alert("Please enter a name")
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="name" placeholder="Enter your name"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}