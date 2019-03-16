import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    return (
      <div className='container'>
        <nav className="navbar fixed-bottom navbar-light bg-dark">
          <a className="btn btn-info" role="button" href="FrankCravenResume.pdf" download="FrankCravenResume">
            Download My Resume!
          </a>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link navbar-btn" activeClassName='nav-link active' to="#contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navbar-btn" activeClassName='nav-link active' to="#education">Education</NavLink>
            </li>
          </ul>
        </div>
        </nav>
      </div>


    )
  }
}
