import React from "react";

export default class ToDoForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const todoItem = this.refs.todoItem.value;
        if(todoItem !=="") {
            this.refs.todoItem.value="";
            return this.props.handleListItem(todoItem)    
        } else {
            alert("Please enter a to do item")
        }        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="todoItem" placeholder="Add to do item" />
                <button>Add item</button>
            </form>
        )
    }
}