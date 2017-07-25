const redux = require('redux');
const actions = require('./actions/index');
const store = require('./store/configureStore').configure();

// subcribe to changes
const unsubscribe = store.subscribe(() => {
    const state = store.getState();    
    console.log('New state', store.getState());

    if(state.isFetching) {
        document.getElementById('app').innerHTML = "Loading";

    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
    }
});

//unsubscribe();

// Name
store.dispatch(actions.changeName('Mitesh'));
store.dispatch(actions.changeName('Heena'));

// Hobby
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Swimming'));
store.dispatch(actions.removeHobby(2));

// Movie
store.dispatch(actions.addMovie('The Gladiator','Action'));
store.dispatch(actions.addMovie('The Green Mile','Drama'));
store.dispatch(actions.removeMovie(1));

// Maps
store.dispatch(actions.fetchLocation());