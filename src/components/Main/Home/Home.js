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
          <p className='text-light'>I'm a Full Stack Developer </p>
          <p className='text-light'>and I'd like to help you see the forest <u>and</u> the trees</p>
          <p></p>
          <hr className='bg-light mb-2' />

          <button className='btn btn-outline-light home-button'>Learn More</button>
        </div>
      </div>

    )
  }
}

