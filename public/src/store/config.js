import { createStore, compose,combineReducers,applyMiddleware } from 'redux';
import { nameReducer,hobbiesReducer,moviesReducer,mapReducer} from './../reducers/index'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export let config = ()=> {
  //-----build a reducer
  var reduer = combineReducers({
    name: nameReducer,
    hobbies:hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  })

  //----store
  var store = createStore(reduer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
