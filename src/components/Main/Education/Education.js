import React from 'react'
import EducationCard from './EducationCard'
import './Education.css'


const Education =(props)=> {
  const education = props.education
  const cardMap = education.map((school,idx) => <EducationCard school={school} key={idx} /> )

  return (
    <div className='card bg-transparent education-main container container-fluid col-10 col-md-6 col-lg-6 mx-auto pb-5'>
    {cardMap}
    </div>
    )
}

export default Education
