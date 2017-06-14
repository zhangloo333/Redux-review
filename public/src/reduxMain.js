import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log('starting redux test');

let stateDefault ={
  name: 'Anonymous',
  hobbies: [],
  movies:[]
}

let nextHobbyId = 1;
let nextMovieId = 1;
let reduer = (state,action) => {
  state = state || stateDefault;
  switch(action.type) {
    case 'CHANG_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies:[
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
      //使用filter，如果filter中的方程返回的是true,的情况下，就保留，否则删除
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(function(hobby){
          return hobby.id !== action.id;
        })
      };

    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
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

  console.log('new state', store.getState());

})
// unsubscribe();//this is for unsubscribe;

let currentState = store.getState();
console.log('currentSate', currentState);

store.dispatch({
  type:'CHANG_NAME',
  name: 'lee'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'setting'
})

store.dispatch({
  type: 'CHANG_NAME',
  name: 'yi'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'Action'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'litter red',
  genre: 'drama'
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  id:2
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id:1
})
