import React, { Component} from 'react'
import './Footer.css'
import Social from './Social'
import Contact from './Contact'

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
    const collapsedContact = this.state.collapsedContact

  return (

    <nav className="bg-primary footer ">
      <div className='container row justify-content-center mx-auto'>

      <Social collapsedSocial={collapsedSocial}
              toggleSocial={this.toggleSocial} />

      <Contact  collapsedContact={collapsedContact}
                toggleContact={this.toggleContact} />
      </div>
    </nav>
  )}
}
