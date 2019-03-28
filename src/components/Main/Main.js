import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import Home from './Home'
import Menu from './Menu'
import Projects from './Projects'
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
          schoolDescription: `Out of high school I went to the United States Military Academy. The year I spent there was a formative experience. It taught me a lot about leadership, teamwork, discipline, adaptability and accountability. I'll never forget those lessons.`,
          degree: '',
          schoolUrl:'https://westpoint.edu'
        }
      ],

      projects: [
        {
          title: 'DropXR',
          imageUrl: "https://www.youtube.com/embed/MWY60alDvVg",
          githubUrl:'https://github.com/dropar/drop',
          description:`A lean browser based progressive web application that pulls from Google's Poly to create an AR and VR experience`,
          hasVideo: true
        },
        {
          title: 'The Yoyo Adventure',
          imageUrl: "https://www.youtube.com/embed/v79vy17DJWs",
          githubUrl:'',
          description:'The product of a 4-day hackathon to learn something new. I went from zero to this!',
          hasVideo: true
        },
        {
          title: 'Members Dashboard',
          imageUrl:'https://cdn.vox-cdn.com/thumbor/lRKtyaeK_DTPFE_blIeK0o0KSTk=/0x0:3000x2000/920x613/filters:focal(1315x220:1795x700):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59035787/shutterstock_272424740.0.jpg',
          githubUrl:'https://github.com/FCraven/nytimes-dashboard',
          description:'Just started this one. An easy to use dashboard that consumes the NYTimes API and returns an easily navigable, user-friendly decluttering of the news.',
          hasVideo: false
        },
        {
          title: 'Fire & Ironman',
          imageUrl:'http://www.stickpng.com/assets/images/58889577bc2fc2ef3a1860be.png',
          githubUrl:'',
          description:'Lifestyle application for Kevin Duffy. Motivational Speaker, Fireman, Ironman triathlete. Plant based life',
          hasVideo: false
        }
      ]






    }
  }


  render() {
    const backgrounds = this.state.backgrounds;
    const randomBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)]
    const education = this.state.education
    const projects = this.state.projects

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
          <Route path='/projects' render={(props)=> <Projects projects={projects} />} />
          {/* <Route path='/languages' component={Languages} /> */}
          {/* <Route path='/libraries' component={Libraries} /> */}
          <Route path='/education' render={(props)=> <Education education={education} />} />
        </Switch>
      </div>



    )
  }
}
