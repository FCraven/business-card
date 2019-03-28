import React from 'react'

const EducationCard =(props)=> {
  const school = props.school
  return (
    <div id='education-cards' className="card-deck ">
        <div className="card bg-dark">
          <img src={`${school.imageUrl}`} className="card-img-top" alt="school logo" />
          <div className="card-body">
            <h5 className="card-title text-light">{school.schoolName}</h5>
            <p className="card-text text-light">{school.schoolDescription}</p>
          </div>
          <div className="card-footer">
            <small className="text-light">{school.degree}</small>
          </div>
        </div>
      </div>
  )
}

export default EducationCard
