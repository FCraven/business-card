import React from 'react'


const FrontEnd =(props)=> {
  const frontEnd = props.frontEnd
  console.log(frontEnd)
  const test = frontEnd.libraries[0]
  const languageTest = frontEnd.languages[2]
  return (
    <div className='container pt-3'>


    <div className="container pt-3">
      <h2 className='text-center bg-primary rounded text-light w-50 mx-auto'>Languages</h2>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img  src={`${languageTest.imageUrl}`}
                  className='card-img-top img-fluid bg-dark'
                  alt={languageTest.title}
                  onClick={()=> window.open(`${languageTest.homepage}`)}/>
            <div className="card-block p-2">
              <h3 className='card-title '>{languageTest.title}</h3>
              <p className='text-muted card-subtitle mb-2'>{languageTest.shortDescription}</p>
              <p>{languageTest.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="container pt-3">
      <h2 className='text-center bg-info rounded text-light w-50 mx-auto '>Libraries</h2>
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
    </div>
  )
}

export default FrontEnd
