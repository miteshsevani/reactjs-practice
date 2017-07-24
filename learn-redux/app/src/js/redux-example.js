const redux = require('redux');

const reducer = (state = {name:'Anonymous'}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }    
};

const store = redux.createStore(reducer);
console.log(store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mitesh'
});

console.log(store.getState());