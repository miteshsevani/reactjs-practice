import React from "react";

const ToDoList = (props) => {
    return(
        <ul>
            {props.items.map((item, key) => (
                <li key={key}>{item} <a href="">remove</a></li>
            ))}          
        </ul>
    )
}

module.exports = ToDoList;