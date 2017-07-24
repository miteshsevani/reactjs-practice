const redux = require('redux');

// Name reducer and action generators
// --------------------
const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;            
        default:
            return state;
    }
}


// Hobbies reducer and action generators
// --------------------
let nextHobbyId = 1;
const hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];        
        case 'REMOVE_HOBBY':
            return {                
                hobbies: state.filter((hobby) => hobby.id !== action.id)
            };
        default:
            return state;
    }
}


// Movies reducer and action generators
// --------------------
let nextMovieId = 1;
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];        
        case 'REMOVE_MOVIE':
            return {                
                movies: state.filter((movie) => movie.id !== action.id)
            };
        default:
            return state;
    }
}

const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer

})

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subcribe to changes
const unsubscribe = store.subscribe(() => {
    const state = store.getState();    
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', state);
});

//unsubscribe();


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mitesh'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Tom'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Swimming'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'The Gladiator',
    genre: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'The Green Mile',
    genre: 'Drama'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});