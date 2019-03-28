import React from 'react'
import EducationCard from './EducationCard'
import './Education.css'


const Education =(props)=> {
  const education = props.education
  const cardMap = education.map((school,idx) => <EducationCard school={school} key={idx} /> )

  console.log(`==--->`, education)
  return (
    <div className='card bg-dark education-main container container-fluid col-10 col-md-6 col-lg-8 mx-auto pb-5'>
    {cardMap}
    </div>
    )
}

export default Education
