import { createStore, compose,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log('starting redux test');





//你把reducer 切分之后，state 只代表在 整个tree里面的一部分。


//name reducer and action generator
//------------------------
let nameReducer = (state = 'Anonymous', action)=> {
  switch(action.type) {
    case 'CHANG_NAME':
      return action.name;
    default:
      return state;
  }
}

//action genertator just a simple functions
let changeName = (name) => {
  return {
    type: 'CHANG_NAME',
    name // = name : name
  }
};

//hobbies Reducer and action generator
//------------------------
let nextHobbyId = 1;
let hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    default:
      return state;
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((e) => e.id !== action.id);
  }
}

let addHobbies = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

let removeHobbies = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  }
}

//movies Reducer and action generator
//------------------------
let nextMovieId = 1;
let moviesReducer = (state = [],action) => {
  switch(action.type) {
    default:
      return state;
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
      return state.filter((movie) => movie.id !== action.id)
  }
}

let addMovie = (title,genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

let removeMovice = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}


//-----build a reducer
let reduer = combineReducers({
  name: nameReducer,
  hobbies:hobbiesReducer,
  movies: moviesReducer
})

//----store
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



store.dispatch(changeName('jonason'));

store.dispatch(addHobbies('running'))

store.dispatch(addHobbies('setting'))

store.dispatch(changeName('yi'))

store.dispatch(removeHobbies(2));
store.dispatch(addMovie('Mad Max', 'Action'))
store.dispatch(removeMovice(1));

// store.dispatch({
//   type:'CHANG_NAME',
//   name: 'lee'
// });

// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Mad Max',
//   genre: 'Action'
// })

// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id:2
// })

// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id:1
// })
