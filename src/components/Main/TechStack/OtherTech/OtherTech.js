import React from 'react'
import { Link } from 'react-router-dom'

//add compilers, bundlers, all fthe other stuff from your resume

const OtherTech = (props) => {
  return (
    <div className="container">
      <div className="jumbotron  text-center mt-5 display-4">
        Currently under construction, check back soon!
      <Link to='/techstack'>
          <button className='btn btn-large btn-primary'>Back to<br />TechStack</button>
        </Link>
      </div>
    </div>
  )
}

export default OtherTech
