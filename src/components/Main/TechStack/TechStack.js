import React, { Component } from 'react'
import './TechStack.css'

export default class TechStack extends Component {
  render() {

    return (
<div className='container container-fluid'>
        <div className="card bg-dark text-white stack-card mx-auto">
          <img className="card-img img-fluid" style={{maxHeight:'75vh'}} src="https://c.pxhere.com/photos/53/bb/apple_business_computer_desk_imac_ipad_keyboard_laptop-911811.jpg!d" alt="Front End Stack" />
          <div className="card-img-overlay">
            <h5 className="card-title">Client Side</h5>
            <p className="card-text">See what languages and libraries I use to develop the Front End</p>
            <p className="card-text"> Front End </p>
          </div>
        </div>
</div>
    )
  }
}


