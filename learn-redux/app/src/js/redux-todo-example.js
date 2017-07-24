var redux = require('redux');

const stateDefault = {
    searchText:'', 
    showCompleted:false, 
    todo:[]
};

// store state in reducer
const reducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCHTEXT':
            return{
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
store.subscribe(() => {
    const todo = store.getState();
    document.getElementById('app').innerHTML = todo.searchText;
})

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'work'
});

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'assignment'
});

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'something else'
});