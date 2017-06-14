import {createStore, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log('starting todo redux test');

const stateDefault = {
    searchText: '',
    showCompleted: false,
    todos:[]
};

var reduer = (state = stateDefault, action) => {
  switch(action.type) {
    case "CHANG_STEXT":
      return{
        ...state,
        searchText:action.searchText
      }
    default:
      return state;
  }
}

let store = createStore(reduer,compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscribe = store.subscribe(()=>{
  let state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})

store.dispatch({
  type:'CHANG_STEXT',
  searchText: 'youtube video'
})

store.dispatch({
  type:'CHANG_STEXT',
  searchText: 'hello word'
})
store.dispatch({
  type:'CHANG_STEXT',
  searchText: ' you are best'
})
store.dispatch({
  type:'CHANG_STEXT',
  searchText: 'microsoft'
})
store.dispatch({
  type:'CHANG_STEXT',
  searchText: 'google'
})
console.log('currentSate',store.getState());
