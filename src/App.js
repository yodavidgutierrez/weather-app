import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
  return (
    <div className="App">
      <LocationList ></LocationList>
    </div>
  );
 }
}

export default App;
