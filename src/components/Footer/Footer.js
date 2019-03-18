import React from 'react'

const Footer = () => {
  return (
    <div className="footer navbar fixed-bottom bg-info">

      <div>
        <button type="button" target="_blank" className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href='https://www.linkedin.com/in/frank-craven-ab1029b3/'>
            <b><i className="fab fa-linkedin fa-2x"></i></b>
          </a>
        </button>

        <button type="button" target='_blank' className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href='https://www.github.com/FCraven'>
            <b><i className="fab fa-github fa-2x"></i></b>
          </a>
        </button>

        <button type="button" target='_blank' className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href='https://www.instagram.com/francois_letanqa/'>
            <b><i className="fab fa-instagram fa-2x"></i></b>
          </a>
        </button>
      </div>

      <div>
        <button type="button" className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href="FrankCravenResume.pdf" download="FrankCravenResume">
            <i className="far fa-file fa-2x"></i>
          </a>
        </button>

        <button type="button" className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href="mailto:craven.francis@gmail.com?subject=Let's get in touch!">
            <b><i className="far fa-envelope fa-2x"></i></b>
          </a>
        </button>

        <button type="button" className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning" href="tel:+19146028799">

            <b><i className="fas fa-phone fa-2x"></i></b>
          </a>
        </button>

      </div>
    </div>
  )
}

export default Footer
