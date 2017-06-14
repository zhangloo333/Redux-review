import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log('starting redux test');

let stateDefault ={
  name: 'Anonymous',
  hobbies: []
}

let reduer = (state,action) => {
  state = state || {name: 'Anoymous'};
  switch(action.type) {
    case 'CHANG_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}

let store = createStore(reduer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscrib to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

})
// unsubscribe();//this is for unsubscribe;

let currentState = store.getState();
console.log('currentSate', currentState);

store.dispatch({
  type:'CHANG_NAME',
  name: 'lee'
});


store.dispatch({
  type: 'CHANG_NAME',
  name: 'yi'
})
