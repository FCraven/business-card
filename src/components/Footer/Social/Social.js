import React from 'react'
import '../Footer.css'

const Social =(props)=>{
{

    const collapsedSocial = props.collapsedSocial
    const classOne = collapsedSocial ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsedSocial ? 'navbar-toggler navbar-toggler-left collapsed' : 'navbar-toggler navbar-toggler-left'

  return (
      <div className='footer-social'>

        <nav className='navbar-expand-md'>

      <button onClick={props.toggleSocial}
              className={`${classTwo} btn btn-outline-warning`}
              type='button'
              data-toggle='collapse'
              data-target='#footerSocial'>
        <i className='fas fa-angle-double-down'></i>
        <span className='contact-button-text'><b> Social</b></span>
      </button>

      <div id='footerSocial' className={`${classOne}`}>

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
      </nav>
    </div>
    )
  }
}

export default Social
