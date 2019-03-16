import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    return (
      <div className='container container-fluid justify-content-center'>
        <nav className="navbar fixed-bottom navbar-light bg-dark ">
          <a className="btn btn-info" role="button" href="FrankCravenResume.pdf" download="FrankCravenResume">
            Download My Resume!
          </a>



          <ul className="nav">
            <li className="nav-item">
              <NavLink className='nav-link text-white m-3' activeClassName='nav-link active btn-info' to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white navbar-dark m-3" activeClassName='nav-link active btn-info' to="/stack">TechStack</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white navbar-dark m-3" activeClassName='nav-link active btn-info' to="/education">Education</NavLink>
            </li>
          </ul>
        </nav>
      </div>


    )
  }
}
