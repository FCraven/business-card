import React, { Component } from 'react'

export default class Stack extends Component {
  render() {
    const frontEndStack = [
      {
          title: 'React',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          shortDescription: 'A JavaScript library for building user interfaces',
          longDescription: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
          homepage: 'https://reactjs.org/'
      },
      {
          title: 'Redux',
          imageUrl: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
          shortDescription: 'A Predictable State Container for JavaScript Apps',
          longDescription: 'Redux is an open-source JavaScript library for managing application state. It is most  commonly used with libraries such as React or Angular for building user interfaces.',
          homepage: 'https://redux.js.org/'
      }
    ]

    const mappedFrontEnd = frontEndStack.map((item,index) =>
        <div className="card row" style={{width: '18rem'}} key={index}>
          <img className="card-img-top" src={item.imageUrl} alt="Card top/cap" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.shortDescription}</h6>
            <p className="card-text">{item.longDescription}</p>
            <a href={item.homepage} className="card-link">See the Docs!</a>

          </div>
        </div>
      )

    return (
      <div className='container container-fluid' id='front-end-stack'>
        <h1 className='text-center'>Front-End Stack</h1>
        <hr/>
        {mappedFrontEnd}
      </div>
    )
  }
}


