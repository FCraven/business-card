import React, { Component } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right bg-warning collapsed' : 'navbar-toggler navbar-toggler-right bg-warning'

    return (
      <div className='container container-fluid justify-content-center header-nav'>

        <nav className="navbar fixed-top navbar-light bg-info navbar-expand-md">

          {/* Title Name */}
          <NavLink className='nav-link navbar-brand' to='/'>
            <h2 id='navbar-name' className='nav-text text-warning nav-link'>Frank Craven</h2>
          </NavLink>

          {/* Navbar Toggle Button Right  */}
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type='button' data-toggle='collapse' data-target='#navbarResponsive'>
            <span className='navbar-toggler-icon'></span>
          </button>

          {/* Navigation List  */}
          <div className={`${classOne}`} id='navbarResponsive'>
            <ul className="navbar-nav nav-list ml-auto">

            <li className="nav-item">
                <NavLink onClick={this.toggleNavbar} className="nav-link text-warning m-3" activeClassName='nav-link active btn-outline-warning' to="/projects"><b>Projects</b></NavLink>
              </li>

              <li className="nav-item">
                <NavLink onClick={this.toggleNavbar} className='nav-link text-warning m-3' activeClassName='nav-link active btn-outline-warning' to="/languages" ><b>Languages</b></NavLink>
              </li>

              <li className="nav-item">
                <NavLink onClick={this.toggleNavbar} className='nav-link text-warning m-3' activeClassName='nav-link active btn-outline-warning' to="/libraries"><b>Libraries</b></NavLink>
              </li>

              <li className="nav-item">
                <NavLink onClick={this.toggleNavbar} className="nav-link text-warning m-3" activeClassName='nav-link active btn-outline-warning' to="/education"><b>Education</b></NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
