import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        message: '',
}
  }

  textInput (val) {
    this.setState (() => {
      return {
        message: val
      }
    })
  }
  render() {
    return (
      <div className="App">
      <input onChange={e => this.textInput(e.target.value)} type = 'text'/>
      <p> {this.state.message}</p>
      </div>
    );
  }
}

export default App;
