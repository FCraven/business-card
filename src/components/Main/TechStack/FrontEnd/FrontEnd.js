import React from 'react'


const FrontEnd =(props)=> {
  const frontEnd = props.frontEnd
  console.log(frontEnd)
  const test = frontEnd[0]
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img  src={`${test.imageUrl}`}
                  className='card-img-top img-fluid bg-dark'
                  alt={test.title}
                  onClick={()=> window.open(`${test.homepage}`)}/>
            <div className="card-block p-2">
              <h3 className='card-title '>{test.title}</h3>
              <p className='text-muted card-subtitle mb-2'>{test.shortDescription}</p>
              <p>{test.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontEnd
