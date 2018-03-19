import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      randomList: [
        'Bears, ',
        'Beets, ',
        'Battelstar, ',
        'Galactica, ',
        'MICHAEL, ',
        'Fact, ',
        'Question, ',
        'Tuna, ',
        'Beasley, ',
        'Halpert, ',
        'Thats, ', 
        'What, ', 
        'She, ', 
        'Said, '
      ]
    }
  }

  inputChange(val){
    this.setState (() => {
      return {
        message: val
      }
    })
  }
  



  render() {
    let changes =this.state.randomList.filter((e) => {
      return e.includes(this.state.message)
    })
    return (
      <div className="App">
      <input onChange={e => this.inputChange(e.target.value)}  type="text"/>
      <p>{changes}</p>
      </div>
    );
  }
}

export default App;
