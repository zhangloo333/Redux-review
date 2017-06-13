import {createStore} from 'redux';

console.log('starting redux test');

let reduer = (state,action) => {
  state = state || {name: 'Anoymous'};
  console.log('new action',action);
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


let store = createStore(reduer);

let currentState = store.getState();
console.log('currentSate', currentState);

// let action = {
//   type:'CHANG_NAME',
//   name: 'lee'
// }
store.dispatch({
  type:'CHANG_NAME',
  name: 'lee'
});

console.log('Name should be lee', store.getState());
