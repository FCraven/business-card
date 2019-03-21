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

          <h3 className='text-light'>Hi!</h3>
          <h2>My name is Frank</h2>
          <p className='text-light'>I am Full Stack Developer </p>
          <button className='btn btn-outline-light'>Learn More</button>
        </div>
      </div>

    )
  }
}

