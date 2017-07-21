import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class AddToDoForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const todoItem = this.refs.todoItem.value;
        
        if(todoItem.length > 0 && todoItem !== "") {
            this.refs.todoItem.value="";
            this.props.onAddTodo(todoItem)    
        } else {
            this.refs.todoItem.focus();
        }        
    }

    render() {
        return(            
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="todoItem" placeholder="Add to do item" />                
                <button className="btn btn-primary">Add todo</button>
            </form>
        )
    }
}