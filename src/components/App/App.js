import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousPeople from '../FamousPeople/FamousPeople';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPeople />
      </div>
    );
  }
}

export default App;
