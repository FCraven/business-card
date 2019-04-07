import React, { Component } from 'react'
import './TechStack.css'

export default class TechStack extends Component {
  render() {
    return (

        <div id="techStackCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators ">

            <li data-target="#techStackCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#techStackCarousel" data-slide-to="1"></li>
            <li data-target="#techStackCarousel" data-slide-to="2"></li>

          </ol>

          <div className="carousel-inner">

            <div className="carousel-item active bg-primary h-100 w-100">
{/*
              <img  className="d-block w-100 "
                    src="https://cdn.acodez.in/wp-content/uploads/2017/11/Javascript-Front-End-Development-Frameworks.jpg"
                    alt="Client Side"
                    /> */}
               
              <div className='carousel-caption'>
                <h2 className='text-white'><b>Client Side</b></h2>
                <p className='text-white text-center'>Check out how I develop the Front End</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>

          <a className="carousel-control-prev" href="#techStackCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#techStackCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    )
  }
}


