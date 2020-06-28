import React, { Component } from 'react';
import './App.css';
import Forecaster from './components/Forecaster';
import MainMap from './components/MainMap';


class App extends Component {
  render() {
  return (
    <div>
        <Forecaster />
        <MainMap />
    </div>
  )
}
}

export default App;
