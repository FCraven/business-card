import React, { Component } from 'react'

import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
        pictures: ['/moustacheSelfie.JPG','/skylineSelfie.jpeg','/twinningSelfie.jpeg']
    }
  }

  render() {
    const pictures = this.state.pictures;
    const picture = pictures[Math.floor(Math.random()*pictures.length)]
    return (

      <div class="hero-image container container-fluid animated fadeOut">
        <div class="hero-text">

          <img src={picture} className='rounded-circle img-fluid hero-picture border border-light' alt='me'/>
          <div className='typed-stuff pt-4'>
            <p className='text-light h4'> Hi! My name is Frank.</p>
            <p className='text-light h4'>I'm a Full Stack Developer</p>
          </div>

          <hr className='bg-light ' />

          <button className='btn btn-outline-light learn-more-button'>Learn More</button>
        </div>
      </div>


    )
  }
}

