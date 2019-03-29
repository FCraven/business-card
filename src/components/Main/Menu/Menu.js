import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'
// import { NavLink } from 'react-router-dom'

//to hide small writing in buttons add d-none d-md-block

const Menu =()=> {
  return (
    <div id='main-menu' className='align-items-center list-group text-center'>

      <NavLink  to='/projects'
                className='m-1 m-md-auto bg-primary text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Projects</b></h5>
        </div>
        <p className="mb-1 d-sm-none d-md-block">Check out all the fun things I am working on!</p>
        <small></small>
      </NavLink>

      <NavLink  to='/techstack'
                className='m-1 m-md-auto bg-primary text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>TechStack</b></h5>
        </div>
        <p className="mb-1 d-sm-none d-md-block">See a list of programming languages and libraries I can work in!</p>
        <small></small>
      </NavLink>

      <NavLink  to='/education'
                className='m-1 m-md-auto bg-primary text-light list-group-item list-group-item-action'
                activeClassName='list-group-item list-group-item-action active'
                id='main-menu-item'>
        <div className="d-flex w-100 justify-content-center">
          <h5 className="mb-1"><b>Education</b></h5>
        </div>
        <p className="mb-1 d-sm-none d-md-block">All those smarts</p>
        <small></small>
      </NavLink>




    </div>

  )
}

export default Menu
