import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import { NavLink } from 'react-router-dom'
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

      <div className="hero-image container container-fluid">
        <div className="hero-text">

              <Typing startDelay={2500} speed={75}>
                <p className='text-light h4 p-1'> Hi! <Typing.Delay ms={1000} /> My name is Frank.</p>
                <p className='text-light h4'>
                  <Typing.Delay ms={1000}/>
                      I'm a front end
                      <Typing.Delay ms={1000} />
                      <Typing.Backspace count={9}/>
                      back end
                      <Typing.Delay ms={1000} />
                      <Typing.Backspace count={8}/>
                      Full Stack Software Engineer
                </p>
              </Typing>

            <img src={picture} className='rounded-circle m-2 img-fluid hero-picture border border-light' alt='me' />

          <hr className='bg-light'style={{width:'50%'}}/>

          <NavLink to='/menu'>
            <button className='btn btn-large bg-dark text-light learn-more-button'>
              <b>Learn More About Me</b>
            </button>
          </NavLink>
        </div>
      </div>


    )
  }
}

