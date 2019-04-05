import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'


class App extends Component {
  render() {
    return (
      <div className='container container-fluid'>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
