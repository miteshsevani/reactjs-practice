import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

require('../sass/style.scss');

ReactDOM.render(    
    <Main />,
    document.getElementById("app")
);

require('./redux-example');
//require('./redux-todo-example');