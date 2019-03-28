import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import Home from './Home'
import Menu from './Menu'
// import Languages from '../Languages'
// import Libraries from '../Libraries'
import Education from './Education'



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
      backgrounds: ['/hero-background.jpeg','/landing-page-background.jpeg','/color-hero-background.jpeg', '/color-circles.jpeg','/sanfran.jpeg','/waterfall.jpeg','/graffiti.jpg','/boardwalk.jpeg','/romanesco.jpg'],
      education:[
        {
          schoolName: 'FullStack Academy',
          imageUrl: 'https://cdn-images-1.medium.com/max/1000/1*i0rG0owbE0lDeD0dsIaw4Q.jpeg',
          schoolDescription: `An immersive software engineering bootcamp in downtown NYC. The program taught me how to pick up new tech efficiently and quickly put it to use. High speed environment where adaptability was the key to success. I learned so much and it was an incredible first step. `,
          degree: 'Certificate- Software Engineering Immersive',
          schoolUrl:'https://www.fullstackacademy.com'
        },
        {
          schoolName: 'Fordham University',
          imageUrl: 'https://static1.squarespace.com/static/548748b1e4b083fc03ebf70e/t/587e4533e58c62775cb8c86f/1484670263948/?format=750w',
          schoolDescription: `While working full-time, I also attended Fordham full-time. Balancing both was difficult but it taught me a lot about time management, dedication and perseverance.`,
          degree: 'BA - Economics',
          schoolUrl:'https://www.fordham.edu'
        },
        {
          schoolName: 'West Point',
          imageUrl: 'https://www.carnegiecouncil.org/publications/articles_papers_reports/0174/_res/id=Picture/WestPoint-1.jpg',
          schoolDescription: `Out of high school I went to the United States Military Academy. Despite only spending a year there, it was a formative experience. It taught me a lot about leadership, teamwork, discipline, adaptability and accountability. I'll never forget those lessons `,
          degree: '',
          schoolUrl:'https://westpoint.edu'
        }

      ]




    }
  }


  render() {
    const backgrounds = this.state.backgrounds;
    const randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)]
    const education = this.state.education

    return (
      <div className='main-component animated fadeIn slower' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${randomBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100%'
      }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          {/* <Route path='/projects' component={Projects}/> */}
          {/* <Route path='/languages' component={Languages} /> */}
          {/* <Route path='/libraries' component={Libraries} /> */}
          <Route path='/education' render={(props)=> <Education education={education} />} />
        </Switch>
      </div>



    )
  }
}
