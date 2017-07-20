import React from "react";
import uuid from "node-uuid";
import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";
import TodoSearch from "./TodoSearch";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            todos: [
                {
                    id: uuid(),
                    text:'Shopping',
                },
                {
                    id: uuid(),
                    text:'Wash car'
                },
                {
                    id: uuid(),
                    text:'Complete assignment'
                }
            ]
        }
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
                    text: todo
                }
            ]
        })
    }

    render() {
        const {todos} = this.state
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch.bind(this)} />
                <ToDoList todos={todos} />
                <AddToDoForm onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        )
    }
}