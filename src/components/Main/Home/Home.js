import React from 'react'
import Typing from 'react-typing-animation'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home =()=> {
    return (
      <div className="hero-image container container-fluid">
        <div className="hero-text">

              <Typing startDelay={2500} speed={75}>
              <p className='text-light h4 p-1'> Hi!</p>
                <p className='text-light h4 p-1'><Typing.Delay ms={1000} /> My name is Frank.</p>
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

          <hr className='bg-light'style={{width:'50%'}}/>

          <NavLink to='/menu'>
            <button className='btn btn-large-block bg-primary nav-text text-light learn-more-button'>
              <b>Learn More About Me</b>
            </button>
          </NavLink>
        </div>
      </div>
    )
  }

  export default Home

