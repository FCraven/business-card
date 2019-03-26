import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: ['/moustacheSelfie.JPG', '/skylineSelfie.jpeg', '/twinningSelfie.jpeg']
    }
  }

  render() {
    const pictures = this.state.pictures;
    const picture = pictures[Math.floor(Math.random() * pictures.length)]
    return (

      <div class="hero-image container container-fluid">
        <div class="hero-text ">

          <div className='row-sm'>

            <img src={picture} className='rounded-circle img-fluid hero-picture border border-light' alt='me' />

            <div className='typed-stuff pt-4 ml-auto'>
              <Typing startDelay={2500} speed={75}>
                <p className='text-light h4'> Hi! <Typing.Delay ms={1000} /> My name is Frank.</p>
                <p className='text-light h4'><Typing.Delay ms={1000}/> I'm a Full Stack Developer</p>
              </Typing>
            </div>
          </div>

          <hr className='bg-light ' />

          <button className='btn btn-outline-light learn-more-button'> Learn More About Me </button>
        </div>
      </div>


    )
  }
}

