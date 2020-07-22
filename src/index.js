import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';


import * as serviceWorker from './serviceWorker';


// Initial Location of our Redux Store and Initial State
// Hard-coded in coordinates for Little Five Points ATL until updated by compDidMount
const initialState = {
  latitude: null,
  longitude: null,
  searchBeaches: null,
  beaches: null
}

// Our main/only reducer function for Redux 
const reducer = (state = initialState, action) => {

  // First action receives the user's lat/long from landing page
  switch(action.type) {
    case 'ADD_COORDS': 
      return { 
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      }
   // Add Search Beaches also updates on landing page component mounting after query made to our server/db
   // This adds into redux state our list of nearest beaches to the user from which to query google DM later   
    case 'ADD_SEARCH_BEACHES':
      return {
        ...state,
        searchBeaches: action.payload.searchBeaches
      }  
   // Add_Beaches updates recdux state once MainMap is loaded/rendered and Google's Distance Matrix has been queried   
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
