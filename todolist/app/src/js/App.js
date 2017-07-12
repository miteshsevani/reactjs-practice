import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./components/ToDoApp";

require('../sass/style.scss');

ReactDOM.render(    
    <ToDoApp />,
    document.getElementById("app")
);