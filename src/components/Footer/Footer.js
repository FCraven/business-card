import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom bg-info">

      <div className='footer-social'>
          {/* <div className='text-center text-warning'>
            <b>Social Presence</b>
          </div> */}

            <button type="button"
                    className="btn btn-outline-warning m-1 p-2"
                    onClick={()=> window.open('https://www.linkedin.com/in/frank-craven-ab1029b3/')}>
                    <b><i className="fab fa-linkedin fa-2x"></i></b>
            </button>

            <button type="button"
                    className="btn btn-outline-warning m-1 p-2"
                    onClick={()=> window.open('https://www.github.com/FCraven')}>
                    <b><i className="fab fa-github fa-2x"></i></b>
            </button>

            <button type="button"
                    className="btn btn-outline-warning m-1 p-2"
                    onClick={()=> window.open('https://www.instagram.com/francois_letanqa/')}>
                    <b><i className="fab fa-instagram fa-2x"></i></b>
            </button>
        </div>


      <div id='footer-contact'>

        {/* <div className='text-center text-warning'>
          <b>Contact</b>
        </div> */}

          <a className="btn text-warning m-1 p-2" href="FrankCravenResume.pdf" download="FrankCravenResume">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small><b>Resume </b></small>
                    <i className="fas fa-file-download"></i>
            </button>
          </a>

          <a className="btn text-warning m-1 p-2" href="mailto:craven.francis@gmail.com?subject=Let's get in touch!">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small><b>E-Mail </b></small>
                    <b><i className="far fa-envelope"></i></b>
            </button>
          </a>

          <a className="btn text-warning m-1 p-2" href="tel:+19146028799">
            <button type="button"
                    className="btn btn-outline-warning">
                    <small><b>Call </b></small>
                    <b><i className="fas fa-phone"></i></b>
            </button>
          </a>

        </div>

      </nav>
  )
}

export default Footer
