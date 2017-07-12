import React from "react";
import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text:'Shopping',
                },
                {
                    id: 2,
                    text:'Wash car'
                },
                {
                    id: 3,
                    text:'Complete assignment'
                }
            ]
        }
    }


    handleAddTodo(todo) {
        const newToDo = {
            id: this.state.todos.length+1,
            text: todo
        }
        
        this.setState({            
            todos: this.state.todos.concat([newToDo])
        })
    }

    render() {
        const {todos} = this.state
        return(
            <div>                
                <ToDoList todos={todos} />
                <AddToDoForm onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        )
    }
}