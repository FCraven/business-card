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
        <div className="hero-text ">


            <div className='typed-stuff pt-4 ml-auto'>
              <Typing startDelay={2500} speed={75}>
                <p className='text-light h4'> Hi! <Typing.Delay ms={1000} /> My name is Frank.</p>
                <p className='text-light h4'>
                  <Typing.Delay ms={1000}/>
                      I'm a front end developer.
                      <Typing.Delay ms={750} />
                      <Typing.Backspace count={20}/>
                      back end developer.
                      <Typing.Delay ms={750} />
                      <Typing.Backspace count={19}/>
                      Full Stack Software Engineer
                </p>
              </Typing>
            </div>

            <img src={picture} className='rounded-circle m-2 img-fluid hero-picture border border-light' alt='me' />

          <hr className='bg-light'style={{width:'50%'}}/>

          <NavLink to='/menu'>
            <button className='btn btn-outline-light learn-more-button'> Learn More About Me </button>
          </NavLink>
        </div>
      </div>


    )
  }
}

