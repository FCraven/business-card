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
      <div class="hero-image">
        <div class="hero-text">
          <h1 className='text-primary'>Hi! My name is Frank</h1>
          <p className='text-primary'>and I am Full Stack Developer </p>
          <button>Learn More About Me!</button>
        </div>
      </div>

    )
  }
}

