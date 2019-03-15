import React, { Component } from 'react'

export default class Stack extends Component {
  render() {
    const frontEndStack = [
      {
          title: 'React',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          shortDescription: 'A JavaScript library for building user interfaces',
          longDescription: 'React is maintained by Facebook and a community of developers. React is usedas a  base in the development of single-page or mobile applications.',
          homepage: 'https://reactjs.org/'
      },
      {
          title: 'Redux',
          imageUrl: 'https://www.brandeps.com/logo-download/R/Redux-01.png',
          shortDescription: 'A Predictable State Container for JS Apps',
          longDescription: 'Redux is an open-source JavaScript library for managing application state. It is most  commonly used with libraries for building user interfaces.',
          homepage: 'https://redux.js.org/'
      },
      {
        title: 'Bootstrap',
        imageUrl: 'http://pluspng.com/img-png/bootstrap-logo-vector-png-bootstrap-logo-512.jpg',
        shortDescription: 'Styles for developing responsive, mobile-first design.',
        longDescription: 'Bootstrap contains HTML and CSS-based design templates for typography, forms, buttons an d navigation, as well as optional JavaScript extensions.',
        homepage: 'https://www.getbootstrap.com/'
      }
    ]

    // style={{width: '18rem'}}
    const mappedFrontEnd = frontEndStack.map((item,index) =>

          <div className="card"  key={index} style={{width: '18rem'}}>
            <div className='card-header'>
                <h5>{item.title}</h5>
            </div>
            <img className="card-img-top responsive" src={item.imageUrl} alt="Card top/cap" />
            <div className="card-body">
              <hr/>
              <h6 className="card-subtitle mb-2 text-muted">{item.shortDescription}</h6>
              <hr/>
              <p className="card-text">{item.longDescription}</p>
               <div className='card-footer'>
                <a href={item.homepage} className='btn btn-primary'>See the docs</a>
                </div>
            </div>
          </div>





      








      )

    return (
      <div className='container container-fluid ' id='front-end-stack'>
        <h1 className='text-center'>Front-End Stack</h1>
        <hr/>
        <div className='container container-fluid card-group'>
          {mappedFrontEnd}
        </div>
      </div>
    )
  }
}


