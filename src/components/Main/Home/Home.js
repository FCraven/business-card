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

          <p className='text-light display-3 animated fadeIn slower'>Hi!</p>
          <p className='text-light h4'>My name is Frank</p>
          <p className='text-light h5'>I'm a Full Stack Developer </p>

          <hr className='bg-light mb-2' />

          <button className='btn btn-outline-light home-button'>Learn More</button>
        </div>
      </div>


    )
  }
}

