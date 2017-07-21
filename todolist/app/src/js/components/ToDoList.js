import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import ToDo from "./ToDo";
export default class ToDoList extends React.Component{
    render() {
        const {todos, onToggle} = this.props;

        const renderTodos = () => {
            if(todos.length > 0) {
                return(
                    todos.map((todo, key) => (                    
                        <ToDo key={key} {...todo} onToggle={onToggle} />
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
}