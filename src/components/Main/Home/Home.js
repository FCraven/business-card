import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='hero-image'>
          <div className='hero-text'>
            <h1>Hi! My name is Frank and I am a (typed section)</h1>
            <button> Find out more!</button>
          </div>
      </div>


    )
  }
}

