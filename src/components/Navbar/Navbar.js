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
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right bg-primary collapsed' : 'navbar-toggler navbar-toggler-right bg-light'

    return (
      <div className='container container-fluid header-nav'>

        <nav className="navbar fixed-top navbar-dark bg-primary navbar-expand-md animated fadeInDownBig slower delay-3s">

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

              {/* TechStack */}
              <li className="nav-item" >
                <NavLink  onClick={this.toggleNavbar}
                          className='nav-link text-light m-3'
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="/techstack" >
                          <b>TechStack</b>
                </NavLink>
              </li>

              {/* Education */}
              <li className='nav-item'>
                <NavLink  onClick={this.toggleNavbar}
                          className="nav-link text-light m-3"
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="/education">
                          <b>Education</b>
                </NavLink>
              </li>

              {/* Social */}
              <li className='nav-item dropdown'>
                <NavLink
                          className="nav-link dropdown-toggle text-light mt-3"
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="#"
                          id='socialDropdown'
                          data-toggle='dropdown'>
                          <b>Social</b></NavLink>

                  {/* dropdown menu */}
                  <div className='dropdown-menu bg-primary' aria-labelledby='socialDropdown'>

                    {/* LinkedIn dropdown button */}
                    <button type="button"
                            className="btn bg-primary text-light w-100 h-100"
                            onClick={()=> window.open('https://www.linkedin.com/in/frank-craven-ab1029b3/')}>
                            <b><i className="fab fa-linkedin fa-2x"></i></b>
                    </button>

                  <div className='dropdown-divider'></div>

                  {/* Github dropdown button */}
                  <button type="button"
                          className="btn bg-primary text-light w-100 h-100"
                          onClick={()=> window.open('https://www.github.com/FCraven')}>
                          <b><i className="fab fa-github fa-2x"></i></b>
                  </button>


                  <div className='dropdown-divider'></div>

                  {/* Instagram dropdown button */}
                  <button type="button"
                          className="btn bg-primary text-light w-100 h-100"
                          onClick={()=> window.open('https://www.instagram.com/francois_letanqa/')}>
                          <b><i className="fab fa-instagram fa-2x"></i></b>
                  </button>

                  </div>
              </li>


            {/* Contact */}
            <li className='nav-item dropdown'>

                {/* Contact Navbar Button (dropdown) */}
                <NavLink
                          className="nav-link dropdown-toggle text-light mt-3"
                          activeClassName='nav-link active btn-outline-secondary p-2 m-2'
                          to="#"
                          id='contactDropdown'
                          data-toggle='dropdown'>
                          <b>Contact</b></NavLink>

                  {/* Contact Dropdown Menu */}
                  <div className='dropdown-menu bg-primary mx-auto' aria-labelledby='contactDropdown'>

                  {/* Download Resume button */}
                  <a className="p-1 m-1" href="FrankCravenResume.pdf" download="FrankCravenResume">
                    <button type="button"
                            className="btn btn-outline-light bg-primary text-light">
                            <small className='contact-button-text'><b>Resume </b></small>
                            <i className="fas fa-file-download"></i>
                    </button>
                  </a>

                  <div className='dropdown-divider'></div>

                  {/* Email Me button */}
                  <a className="p-1 m-1" href="mailto:craven.francis@gmail.com?subject=Let's get in touch!">
                    <button type="button"
                            className="btn btn-outline-light bg-primary text-light">
                            <small className='contact-button-text'><b>E-Mail </b></small>
                            <b><i className="far fa-envelope"></i></b>
                    </button>
                  </a>

                  <div className='dropdown-divider'></div>

                  <a className="m-1" href="tel:+19146028799">
                    <button type="button"
                            className="btn btn-outline-light bg-primary text-light">
                            <small className='contact-button-text'><b>Call </b></small>
                            <b><i className="fas fa-phone"></i></b>
                    </button>
                  </a>


              </div>
            </li>



            </ul>
          </div>
        </nav>
        <div>
          <div>
            Kill the boy Jon Snow
          </div>
        </div>
      </div>
    )
  }
}
