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
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right bg-dark collapsed' : 'navbar-toggler navbar-toggler-right bg-secondary'

    return (
      <div className='container container-fluid header-nav'>

        <nav className="navbar fixed-top navbar-dark bg-dark  navbar-expand-md">

          {/* Title Name */}
          <NavLink  className='nav-link navbar-brand d-inline-block'
                    onClick={()=> this.setState({collapsed: true})}
                    to='/'>

            <img  src='/favicon.ico'
                  className='img-fluid'
                  style={{maxWidth:'50px'}}
                  alt='A Raven'/>

              {collapsed? null : <span id='navbar-name'
                    className='text-light h6 d-md-none'>
                    <b>Home</b>
              </span>}


          </NavLink>

          {/* Navbar Toggle Button Right  */}
          <button onClick={this.toggleNavbar}
                  className={`${classTwo}`}
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarResponsive'>

              <span className='navbar-toggler-icon btn btn-sm justify-content-center'>
              </span>
          </button>

          {/* Navigation List  */}
          <div  className={`${classOne}`}
                id='navbarResponsive'>
            <ul className="navbar-nav nav-list ml-auto">

              <li className="nav-item">
                <NavLink  onClick={this.toggleNavbar}
                          className="nav-link text-light m-3"
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="/projects">
                          <b>Projects</b>
                </NavLink>
              </li>

              <li className="nav-item" >
                <NavLink  onClick={this.toggleNavbar}
                          className='nav-link text-light m-3'
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="/techstack" >
                          <b>TechStack</b>
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink  onClick={this.toggleNavbar}
                          className="nav-link text-light m-3"
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="/education">
                          <b>Education</b>
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
