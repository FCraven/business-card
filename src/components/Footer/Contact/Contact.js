import React from 'react'

const Contact =(props)=> {

  const collapsedContact = props.collapsedContact
  const classOne = collapsedContact ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsedContact ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'

  return (

    <div id='footer-contact'>

      <nav className='navbar-expand-md'>

      <button onClick={props.toggleContact}
                    className={`${classTwo} btn btn-outline-warning col`}
                    type='button'
                    data-toggle='collapse'
                    data-target='#footerContact'>
              <span className='contact-button-text'><b> Contact </b></span>
              <i className='fas fa-angle-double-down'></i>
            </button>

    <div id='footerContact' className={`${classOne}`}>

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
    </div>
  )
}


export default Contact


