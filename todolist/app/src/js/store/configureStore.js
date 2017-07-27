const redux = require("redux");
import { seratchTextReducer, showCompletedReducer, todosReducer } from "./../reducers/reducers";

export const configure = () => {
    const reducer = redux.combineReducers({
        seratchText: seratchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    const store = redux.createStore(reducer, redux.compose(
        //redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}

