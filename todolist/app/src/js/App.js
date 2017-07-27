import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import ToDoApp from "./components/ToDoApp";

const actions = require('./actions/actions');
const store = require('./store/configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean Car'));
store.dispatch(actions.setSearchText('car'));
store.dispatch(actions.toggleShowCompleted());  

require('../sass/style.scss');

ReactDOM.render(    
    <Provider store={store}>
        <ToDoApp />
    </Provider>,
    document.getElementById("app")
);