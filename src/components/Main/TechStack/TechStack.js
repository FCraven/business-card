import React, { Component } from 'react'
import './TechStack.css'

export default class TechStack extends Component {
  render() {

    return (
      <div className='container container-fluid'>

        <div className="card bg-dark text-white stack-card mx-auto m-2">
          <img className="card-img img-fluid " style={{maxHeight:'65vh'}} src="https://c.pxhere.com/photos/5c/5b/office_freelancer_computer_business_work_laptop_creative_ipad-766903.jpg!d" alt="Front End Stack" />
          <div className="card-img-overlay">
            <h5 className="card-title text-right">Client Side</h5>
            <p className="card-text text-right">See the languages and libraries</p>
            <p className="card-text text-right">I use to develop the front end</p>
          </div>
        </div>


        <div className="card bg-dark text-white stack-card mx-auto m-2">
          <img className="card-img img-fluid" style={{maxHeight:'65vh'}} src="https://c.pxhere.com/photos/cb/46/server_room_datacenter_network_leds_night-1136169.jpg!d" alt="Back End Stack" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5 className="card-title text-center">Server Side</h5>
            <p className="card-text text-center">See how I code out the back end </p>
            <p className="card-text text-center">side to maintain solid data flow</p>
          </div>
        </div>

        <div className="card bg-dark text-white stack-card mx-auto m-2">
          <img className="card-img img-fluid" style={{maxHeight:'65vh'}} src="https://c.pxhere.com/photos/6e/68/business_code_coding_computer_connection_css_data_desk-1554323.jpg!d" alt="Other Tech" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title text-left">Other Tech</h5>
            <p className="card-text text-left">There are lots of really cool toys</p>
            <p className="card-text text-left">to play with out there.</p>
          </div>
        </div>

      </div>

    )
  }
}


