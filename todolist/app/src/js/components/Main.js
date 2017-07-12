import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Shopping',
                'Wash car',
                'Complete assignment'
            ]
        }
    }

    handleListItem(item) {
        this.setState({
            items: this.state.items.concat([item])
        })
    }

    render() {
        return(
            <div>
                <ToDoForm handleListItem={this.handleListItem.bind(this)} />
                <ToDoList items={this.state.items} />
            </div>
        )
    }
}