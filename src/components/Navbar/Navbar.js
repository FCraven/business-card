import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    return (
      <div className='container container-fluid justify-content-center'>
        <nav className="navbar fixed-top navbar-light bg-info ">
          <h1 id='navbar-name' style={{color: '#5CB38C'}} className='nav-text'>frank<b>Craven</b></h1>

          <ul className="nav">

          <li className="nav-item">
              <NavLink className='nav-link text-warning m-3' activeClassName='nav-link active btn-info' to="/aboutme">About Me</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className='nav-link text-warning m-3' activeClassName='nav-link active btn-info' to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-warning navbar-dark m-3" activeClassName='nav-link active btn-info' to="/stack">TechStack</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-dark navbar-dark m-3" activeClassName='nav-link active btn-info' to="/education">Education</NavLink>
            </li>
          </ul>

        </nav>
      </div>


    )
  }
}
