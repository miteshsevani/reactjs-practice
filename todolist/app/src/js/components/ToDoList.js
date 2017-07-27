import React from "react";
import { connect } from "react-redux";

import { Grid, Row, Col } from 'react-bootstrap';
import ToDo from "./ToDo";

const ToDoList = React.createClass({
    render() {
        const { todos } = this.props;

        const renderTodos = () => {
            if(todos.length > 0) {
                return(
                    todos.map((todo, key) => (                    
                        <ToDo key={key} {...todo} />
                    ))
                )
            } else {
                return <h4 className="message">Todo list is empty</h4>;
            }
        }

        return(
            <div>
                {renderTodos()}                    
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(ToDoList);