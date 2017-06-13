import {createStore} from 'redux';


console.log('starting todo redux test');

const stateDefault = {
    searchText: '',
    showCompleted: false,
    todos:[]
};

var reduer = (state = stateDefault, action) => {
  return state;
}

let store = createStore(reduer);

console.log('currentSate',store.getState());
