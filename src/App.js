import React, { Component } from 'react';

import './App.css';
import Sidenav from './components/Sidenav'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Main />
      </div>
    );
  }
}

export default App;
