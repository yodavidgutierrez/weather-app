import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Washington,us",
  "Mexico,mx",
  "Bogota,col",
  "Buenos Aires,ar",
  "Barcelona,es"
]

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
  return (
    <div className="App">
      <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
    </div>
  );
 }
}

export default App;
