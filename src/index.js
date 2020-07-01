import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';


// Initial Location of our Redux Store and Initial State

const initialState = {
  latitude: 'TESTING LAT',
  longitude: 'T3STING LONG'
}


const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_COORDS': 
    return { 
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude
    }
    default: 
      return state
  }
}
  const store = createStore(reducer)
   
  // if (action.type === 'ADD_COORDS') {
  //   return {
  //     ...state,
  //     latitude: action.payload.latitude,
  //     longitude: action.payload.longitude
  //   }
    
  //   }
  //   return state 
  // }




ReactDOM.render(

    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
