import React from 'react'
import '../Footer.css'

const Social =(props)=>{

    const collapsedSocial = props.collapsedSocial
    const classOne = collapsedSocial ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsedSocial ? 'navbar-toggler collapsed text-light' : 'navbar-toggler-light navbar-toggler-left'

  return (
      <div className='footer-social'>

        <nav className='navbar-expand-md'>

            <button onClick={props.toggleSocial}
                    className={`${classTwo} btn btn-outline-light bg-primary col mb-3`}
                    type='button'
                    data-toggle='collapse'
                    data-target='#footerSocial'>
              <i className={collapsedSocial? `fas fa-angle-double-up`:`fas fa-angle-double-down`}></i>
              <span className='footer-button-text'><b> Social</b></span>
            </button>

          <div id='footerSocial' className={`${classOne}`}>

            <button type="button"
                    className="btn bg-primary text-light m-1 p-2"
                    onClick={()=> window.open('https://www.linkedin.com/in/frank-craven-ab1029b3/')}>
                    <b><i className="fab fa-linkedin fa-2x"></i></b>
            </button>

            <button type="button"
                    className="btn bg-primary text-light m-1 p-2"
                    onClick={()=> window.open('https://www.github.com/FCraven')}>
                    <b><i className="fab fa-github fa-2x"></i></b>
            </button>

            <button type="button"
                    className="btn bg-primary text-light m-1 p-2"
                    onClick={()=> window.open('https://www.instagram.com/francois_letanqa/')}>
                    <b><i className="fab fa-instagram fa-2x"></i></b>
            </button>
        </div>
      </nav>
    </div>
    )
  }


export default Social
