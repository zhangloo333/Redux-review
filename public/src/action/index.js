//action genertator just a simple functions
import axios from 'axios';

export let changeName = (name) => {
  return {
    type: 'CHANG_NAME',
    name // = name : name
  }
};

export let addHobbies = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

export let removeHobbies = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  }
}

export let addMovie = (title,genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

export let removeMovice = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

export let startLocationFetch = () => {
  return{
    type: 'START_LOCATION_FETCH'
  }
}

export let completeLocationFetch = (url) => {
  return {
    type:'COMPLETE_LOCATION_FETCH',
    url
  }
}

export let fetchLocation = () => {
  return (dispatch,getState)=>{
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res) {
      let loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';
      dispatch(completeLocationFetch(baseUrl+loc));
    })
  }
}
