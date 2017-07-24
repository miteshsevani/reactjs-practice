import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./components/Main";

require('../sass/style.scss');

ReactDOM.render(    
    <Main />,
    document.getElementById("app")
);