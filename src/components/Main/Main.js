import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import Home from './Home'
// import Languages from '../Languages'
// import Libraries from '../Libraries'



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
      ],
      backgrounds: ['/hero-background.jpeg','/landing-page-background.jpeg','/color-hero-background.jpeg', '/color-circles.jpeg','/sanfran.jpeg','/sunset.jpeg','/waterfall.jpeg','/graffiti.jpg','/boardwalk.jpeg']
    }
  }


  render() {
    const backgrounds = this.state.backgrounds;
    const randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)]

    return (
      <div className='main-component' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${randomBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100%'
      }}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/projects' component={Projects}/> */}
          {/* <Route path='/languages' component={Languages} /> */}
          {/* <Route path='/libraries' component={Libraries} /> */}
          {/* <Route path='/education' component={Education} /> */}
        </Switch>
      </div>



    )
  }
}
