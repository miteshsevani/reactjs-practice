import React from "react";
import uuid from "node-uuid";
import moment from "moment";
import { Grid, Row, Col } from 'react-bootstrap';

import TodosAPI from "../../api/TodosAPI";
import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";
import TodoSearch from "./TodoSearch";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            todos: TodosAPI.getTodos()
        }
    }

    componentDidUpdate() {
        TodosAPI.setTodos(this.state.todos);
    }

    handleSearch(showCompleted, searchText) {
        console.log(showCompleted);
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        })
    }

    handleAddTodo(todo) {
        this.setState({            
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todo,
                    completed: false,
                    createdTime:moment().unix(),
                    completedTime:undefined
                }
            ]
        })
    }

    render() {
        const { todos, showCompleted, searchText } = this.state;
        let filteredTodos = TodosAPI.filterTodos(todos, showCompleted, searchText);
        
        return(
            <Grid>
                <Row>
                    <Col sm={10} smOffset={1}>
                        <h2>Todo App</h2>
                        <TodoSearch onSearch={this.handleSearch.bind(this)} />
                        <ToDoList />
                        <AddToDoForm onAddTodo={this.handleAddTodo.bind(this)} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}