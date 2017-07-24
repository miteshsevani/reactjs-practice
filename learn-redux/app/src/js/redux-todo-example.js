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

const store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'work'
});

console.log(store.getState());