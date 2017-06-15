//name reducer and action generator
//------------------------
export let nameReducer = (state = 'Anonymous', action)=> {
  switch(action.type) {
    case 'CHANG_NAME':
      return action.name;
    default:
      return state;
  }
}

//hobbies Reducer and action generator
//------------------------
let nextHobbyId = 1;
export let hobbiesReducer = (state = [], action) => {
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

//movies Reducer and action generator
//------------------------
let nextMovieId = 1;
export let moviesReducer = (state = [],action) => {
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


//map Reducer and action generator
//------------------------
export let mapReducer = (state = {isFetching: false, url:undefined},action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
        return {
          isFetching: true,
          url: undefined
        };
    case 'COMPLETE_LOCATION_FETCH':
      return{
          isFetching:false,
          url:action.url
      };
    default:
      return state
  }
}
