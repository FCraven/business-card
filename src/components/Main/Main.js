import React, { Component } from 'react'
import FrontEndStack from './Stack/FrontEndStack'


export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
       frontEndStack: [
        {
            title: 'React',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            shortDescription: 'A JavaScript library for building user interfaces',
            longDescription: 'React is maintained by Facebook and a community of developers. React is used as a  base in the development of single-page or mobile applications.',
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
    }
  }


  render() {
    return (
      <div className='container container-fluid card-group bg-dark'>
        <FrontEndStack frontEndStack={this.state.frontEndStack} />
      </div>

    )
  }
}