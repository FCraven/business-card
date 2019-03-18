import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    return (
      <div className='container container-fluid justify-content-center'>
        <nav className="navbar fixed-top navbar-light bg-info ">
          <NavLink className='nav-link navbar-brand' to='/'>
            <h1 id='navbar-name' className='nav-text text-warning nav-link'>
              frank<b>Craven</b>
            </h1>
          </NavLink>



          <ul className="nav nav-list">

            <li className="nav-item">
              <NavLink className='nav-link text-warning m-3' activeClassName='nav-link active btn-outline-warning' to="/aboutme"><b>About Me</b></NavLink>
            </li>

            <li className="nav-item">
              <NavLink className='nav-link text-warning m-3' activeClassName='nav-link active btn-outline-warning' to="/contact"><b>Tech Stack</b></NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-warning navbar-dark m-3" activeClassName='nav-link active btn-outline-warning' to="/projects"><b>Projects</b></NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-warning navbar-dark m-3" activeClassName='nav-link active btn-outline-warning' to="/education"><b>Education</b></NavLink>
            </li>
          </ul>



         







        </nav>
      </div>


    )
  }
}
