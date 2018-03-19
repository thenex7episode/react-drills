import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: 'lasagna',
      car: 'lambo',
      place: 'las vegas'
    }
  }
  render() {
    return (
      <div className="App">
        <h4>{this.state.food}</h4>
        <h4>{this.state.car}</h4>
        <h4>{this.state.place}</h4>
      </div>
    );
  }
}

export default App;
