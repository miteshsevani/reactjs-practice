import React from "react";
import uuid from "node-uuid";
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
                    completed: false
                }
            ]
        })
    }

    handleToggle(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const {todos} = this.state
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <ToDoList todos={todos} onToggle={this.handleToggle.bind(this) }/>
                <AddToDoForm onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        )
    }
}