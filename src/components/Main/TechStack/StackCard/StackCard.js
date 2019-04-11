import React from 'react'

const StackCard =(props)=> {
  console.log(`StackCard props -->`, props)

  return (
    <div className="col-md-6 col-lg-4">
          <div className="card m-4 p-2"
               style={{maxHeight:'25rem',overflow:'auto'}}>
            <img  src={`${props.imageUrl}`}
                  className='card-img-top img-fluid bg-dark'
                  alt={props.title}
                  onClick={()=> window.open(`${props.homepage}`)}/>
            <div className="card-body">
              <h3 className='card-title'>{props.title}</h3>
              <p className='text-muted card-subtitle mb-2'>{props.shortDescription}</p>
              <p>{props.longDescription}</p>
            </div>
          </div>
        </div>
  )
}

export default StackCard

