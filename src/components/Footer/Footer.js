import React, { Component} from 'react'
import './Footer.css'
import Social from './Social'
export default class Footer extends Component {
  constructor(props){
    super(props)
    this.state  ={
      collapsedContact: true,
      collapsedSocial: true

    }

    this.toggleContact = this.toggleContact.bind(this)
    this.toggleSocial = this.toggleSocial.bind(this)

  }

  toggleContact(){
    this.setState({
      collapsedContact: !this.state.collapsedContact
    })
  }

  toggleSocial(){
    this.setState({
      collapsedSocial: !this.state.collapsedSocial
    })
  }

  render(){

    const collapsedSocial = this.state.collapsedSocial
    // const collapsedContact = this.state.collapsedContact



  return (
    <nav className="navbar fixed-bottom bg-info">

      <Social collapsedSocial={collapsedSocial}
              toggleSocial={this.toggleSocial} />

      <div id='footer-contact'>

          <a className="btn text-warning m-1 p-2" href="FrankCravenResume.pdf" download="FrankCravenResume">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small className='contact-button-text'><b>Resume </b></small>
                    <i className="fas fa-file-download"></i>
            </button>
          </a>

          <a className="btn text-warning m-1 p-2" href="mailto:craven.francis@gmail.com?subject=Let's get in touch!">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small className='contact-button-text'><b>E-Mail </b></small>
                    <b><i className="far fa-envelope"></i></b>
            </button>
          </a>

          <a className="btn text-warning m-1 p-2" href="tel:+19146028799">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small className='contact-button-text'><b>Call </b></small>
                    <b><i className="fas fa-phone"></i></b>
            </button>
          </a>

        </div>

      </nav>
  )}
}
