import React from 'react'
import './SingleProject.css'

const SingleProject = (props) => {
  const project = props.project
  return (
    <div className='col-sm-6' >
      <div className="card mx-auto mb-3" style={{}}>

        {/* Card Image or Video */}
        {project.hasVideo ?
          <div className="embed-responsive embed-responsive-16by9">
            <iframe title={`${project.title}`} width="560" height="315" src={`${project.imageUrl}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          :
          <img src={`${project.imageUrl}`} className="card-img-top img-fluid" alt="project" />
        }


        {/* CardBody */}
        <div className="card-body text-center">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>

          <div className='card-footer'>
          <button onClick={() => window.open(`${project.githubUrl}`)}
                  disabled={project.githubUrl ? false : true}
                  className={project.githubUrl ? "btn bg-primary text-light" : "btn bg-primary disabled"} >
                  {project.githubUrl? 'Check out the Code' : 'Coming Soon!'}
          </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleProject
