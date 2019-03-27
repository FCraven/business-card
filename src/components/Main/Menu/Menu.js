import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'
// import { NavLink } from 'react-router-dom'

const Menu =()=> {
  return (
    <div id='main-menu' className='align-items-center list-group text-center'>

      <NavLink  to='/projects'
                className='m-md-auto bg-dark text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Projects</b></h5>
        </div>
        <p className="mb-1">Check out all the fun things I am working on!</p>
        <small></small>
      </NavLink>

      <NavLink  to='/languages'
                className='m-md-auto bg-dark text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Languages</b></h5>
        </div>
        <p className="mb-1">See a list of programming languages I can work in!</p>
        <small></small>
      </NavLink>

      <NavLink  to='/libraries'
                className='m-md-auto bg-dark text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Libraries</b></h5>
        </div>
        <p className="mb-1">JavaScript has a lot of powerful libraries. See which ones I like to use!</p>
        <small></small>
      </NavLink>

      <NavLink  to='/education'
                className='m-md-auto bg-dark text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Education</b></h5>
        </div>
        <p className="mb-1">All those smarts</p>
        <small></small>
      </NavLink>




    </div>

  )
}

export default Menu
