import {createStore} from 'redux';

console.log('starting redux test');

let reduer = (state,action) => {
  state = state || {name: 'Anoymous'};
  return state;
}

let store = createStore(reduer);

let currentState = store.getState();
console.log('currentSate', currentState);
