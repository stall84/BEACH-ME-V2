import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';


import * as serviceWorker from './serviceWorker';


// Initial Location of our Redux Store and Initial State

const initialState = {
  latitude: 33.748995,
  longitude: -84.387982,
  searchBeaches: null,
  beaches: null
}


const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_COORDS': 
      return { 
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      }
    case 'ADD_BEACHES':
      return {
        ...state,
        beaches: action.payload.beaches
      }
    default: 
      return state
      }
}
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
   



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
