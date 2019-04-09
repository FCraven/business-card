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
                <p className='text-light h4 p-1'><Typing.Delay ms={100} /> My name is Frank</p>
                <p className='text-light h4'>
                  <Typing.Delay ms={1000}/>
                      I'm a Full Stack Software Engineer
                </p>
              </Typing>

          <hr className='bg-light animated fadeInUp slower delay-5s'style={{width:'50%'}}/>

          <NavLink to='/menu'>
            <button className='btn btn-large-block bg-primary nav-text text-light learn-more-button animated fadeInUp slower delay-5s'>
              <b>Learn More About Me</b>
            </button>
          </NavLink>
        </div>
      </div>
    )
  }

  export default Home

