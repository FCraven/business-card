import React from 'react'

const Footer =()=> {
  return (



      <div className="footer navbar fixed-bottom bg-info justify-content-center">

      <button type="button" className="btn btn-outline-warning m-3 p-2">
        <a className="btn text-warning" href='/'>
          <b><i className="fab fa-linkedin fa-2x"></i></b>
        </a>
      </button>

      <button type="button" className="btn btn-outline-warning m-3 p-2">
        <a className="btn text-warning" href='/'>
          <b><i className="fab fa-github fa-2x"></i></b>
        </a>
      </button>

      <button type="button" className="btn btn-outline-warning m-3 p-2">
        <a className="btn text-warning" href='/'>
          <b><i className="fab fa-instagram fa-2x"></i></b>
        </a>
      </button>

      <button type="button" className="btn btn-outline-warning m-3 p-2">
          <a className="btn text-warning"  role="button" href="FrankCravenResume.pdf" download="FrankCravenResume">
          <i className="far fa-file fa-2x"></i>
          <span> Resume</span>
        </a>
      </button>

      <button type="button" className="btn btn-outline-warning m-3 p-2">
        <a className="btn text-warning" href='/'>
          <b><i className="far fa-envelope fa-2x"></i></b>
        </a>
      </button>

      </div>
  )
}

export default Footer
