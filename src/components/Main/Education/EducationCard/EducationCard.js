import React from 'react'
import './EducationCard.css'



const EducationCard =(props)=> {
  const school = props.school
  console.log(`school =--->`,school)
  return (

    <div id='education-card mx-auto shadow-lg' className="card mb-3">
      <img onClick={()=> window.open(`${school.schoolUrl}`)} src={`${school.imageUrl}`} className="card-img-top img-fluid img-thumbnail" alt="school"  />
      <div className="card-body">
        <h5 className="card-title text-center">{school.schoolName}</h5>
        <p className="card-text text-center">{school.schoolDescription}</p>
        <p className="card-text text-center"><small className="text-muted">{school.degree}</small></p>
      </div>
    </div>


  )
}

export default EducationCard
