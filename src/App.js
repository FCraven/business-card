import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="bg-dark cover-container container-fluid mx-auto h-100 w-100 d-flex">
        <Main />
        <Navbar />
      </div>
    );
  }
}

export default App;
