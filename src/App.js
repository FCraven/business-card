import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Navbar />
      </div>
    );
  }
}

export default App;
