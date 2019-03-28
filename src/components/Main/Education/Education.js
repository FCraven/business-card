import React from 'react'
import EducationCard from './EducationCard'
import './Education.css'


const Education =(props)=> {
  const education = props.education
  const cardMap = education.map((school,idx) => <EducationCard school={school} key={idx} /> )

  console.log(`==--->`, education)
  return (
    <div>
    {cardMap}
    </div>
    )
}

export default Education
