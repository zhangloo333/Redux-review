import {createStore} from 'redux';
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

let store = createStore(reduer);

store.dispatch({
  type:'CHANG_STEXT',
  searchText: 'youtube video'
})
console.log('currentSate',store.getState());
