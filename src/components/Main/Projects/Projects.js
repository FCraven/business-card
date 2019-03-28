import React from 'react'
import "./Projects.css"
import SingleProject from './SingleProject'

const Projects =(props)=> {
    const projects = props.projects
    const projectsMap = projects.map((project,index)=> <SingleProject key={index} project={project} />)

    return (
      <div className='card-deck container container-fluid row mx-auto pt-3 projects-container' >
      {projectsMap}
      </div>
      )
}

export default Projects
