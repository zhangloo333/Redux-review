import {changeName,addHobbies,removeHobbies,addMovie,removeMovice,fetchLocation} from './action/index';
import {config} from './store/config';

var store = config();
console.log('starting redux test');


let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('new state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading.....';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">view your Location</a>';
  }

})

let currentState = store.getState();
console.log('currentSate', currentState);
/*我们不能直接用到fetchlocation这个函数，因为，在这个函数里面，
我们调用store.dispatch 和 store.getState. 应为在action的里面
并没有store这个函数我们先不可以用。我们没法把这个直接引入，
我们需要在 store连理的时候，加一个后门thunk，只要用store.dispatch()发一个请求
这个请求可以是一个function，store.dispatch(fun)，在这个fun里面就可以用到store里面的内容来

*/
// fetchLocation();
store.dispatch(fetchLocation());

store.dispatch(changeName('jonason'));
store.dispatch(addHobbies('running'))
store.dispatch(addHobbies('setting'))
store.dispatch(changeName('yi'))
store.dispatch(removeHobbies(2));
store.dispatch(addMovie('Mad Max', 'Action'))
store.dispatch(removeMovice(1));
