import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import Home from './Home'
import Menu from './Menu'
import Projects from './Projects'
import TechStack from './TechStack'
import Education from './Education'
import FrontEnd from './TechStack/FrontEnd'
import BackEnd from './TechStack/BackEnd'
import OtherTech from './TechStack/OtherTech'




export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {

       frontEnd: {
          languages: [
            {
              title:'HTML',
              imageUrl:'http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png',
              shortDescription:'Hypertext Markup Language',
              longDescription:'The standard markup language for creating web pages and web applications.',
              homepage:'https://developer.mozilla.org/en-US/docs/Web/HTML'
            },
            {
              title:'CSS',
              imageUrl:'https://png2.kisspng.com/sh/0c283fc92e52b8413928b432ad972788/L0KzQYm3VMAzN6lpiZH0aYP2gLBuTfN0e2Qye9N8Y3HnebBuTgN1gZ1qReVxZXX3g37qjB1xfaVqip9yY3Bxg37vlP1tNZZyet5ubT24cbS5VMVnOWE8edc8MT62QIK7UcAyPWI6SqQBOEG2Qoq3U8E2NqFzf3==/kisspng-css3-cascading-style-sheets-computer-icons-html-emblem-5ac245f107ae31.3014101515226813290315.png',
              shortDescription:'Cascading Style Sheets',
              longDescription:'A stylesheet language used to describe the presentation of a document written in HTML or XML.',
              homepage:'https://developer.mozilla.org/en-US/docs/Web/CSS'
            },
            {
              title:'JavaScript',
              imageUrl:'https://png.pngtree.com/svg/20170719/91de50e59c.svg',
              shortDescription:'High level, interpreted programming language',
              longDescription:`JavaScript is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.`,
              homepage:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            }
          ],
          libraries:[
            {
                title: 'React',
                imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                shortDescription: 'A JavaScript library for building user interfaces',
                longDescription: 'React is maintained by Facebook and a community of developers. React is used as a  base in the development of single-page or mobile applications.',
                homepage: 'https://reactjs.org/'
            },
            {
                title: 'Redux',
                imageUrl: 'http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png',
                shortDescription: 'A Predictable State Container for JS Apps',
                longDescription: 'Redux is an open-source JavaScript library for managing application state. It is most  commonly used with libraries for building user interfaces.',
                homepage: 'https://redux.js.org/'
            },
            {
              title: 'Bootstrap',
              imageUrl: 'http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png',
              shortDescription: 'Styles for developing responsive, mobile-first design.',
              longDescription: 'Bootstrap contains HTML and CSS-based design templates for typography, forms, buttons and navigation, as well as optional JavaScript extensions.',
              homepage: 'https://www.getbootstrap.com/'
            },
            {
              title: 'jQuery',
              imageUrl: 'http://pluspng.com/img-png/jquery-logo-png-jquery-320.png',
              shortDescription: 'DOM traversal and manipulation',
              longDescription: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
              homepage: 'https://jquery.com/'
            }
          ]
    },

    backEnd: {
      architecture:{
        title:'REST API',
        imageUrl:'http://www.odoo.com/apps/icon_image?module_id=37657',
        shortDescription:'Representational State Transfer',
        longDescription:'A software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the style provide interoperability between computer systems on the Internet.',
        homepage:'https://restfulapi.net/'
      },
      runtime:{
        title:'NodeJS',
        imageUrl:'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
        shortDescription:`Built on Chrome's V8 JavaScript engine`,
        longDescription:'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser',
        homepage:'https://nodejs.org/en/'
      },
      database:[
        {
        title:'PostgreSQL',
        imageUrl:'http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png',
        shortDescription:'Relational Database Management System',
        longDescription:'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        homepage:'https://www.postgresql.org/'
      },
      {
        title:'SQL',
        imageUrl:'http://www.free-icons-download.net/images/sql-file-icon-71677.png',
        shortDescription:'Structured Query Language',
        longDescription:'A domain-specific language used in programming and designed for managing data held in a relational database management system.',
        homepage:'https://en.wikipedia.org/wiki/SQL'
      },
      {
        title:'Sequelize',
        imageUrl:'http://www.stickpng.com/assets/images/58482ee4cef1014c0b5e4a75.png',
        shortDescription:'Object Relational Mapping',
        longDescription:'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.',
        homepage:'http://docs.sequelizejs.com/'
      }
    ],
      server:
        {
        title:'Express',
        imageUrl:'https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61',
        shortDescription:'Fast, unopinionated minimalist web framework for Node.js',
        longDescription:'Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the de facto standard server framework for Node.js.',
        homepage:'https://expressjs.com/'
      }

    },

      otherTech:[
        {
          title:'',
          imageUrl:'',
          shortDescription:'',
          longDescription:'',
          homepage:''
        }
      ]
    ,

      backgrounds: ['/hero-background.jpeg','/landing-page-background.jpeg', '/sanfran.jpeg','/waterfall.jpeg','/graffiti.jpg','/boardwalk.jpeg'],

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
          title: 'Drop',
          imageUrl: "https://www.youtube.com/embed/MWY60alDvVg",
          githubUrl:'https://github.com/dropar/drop',
          description:`A lean browser based progressive web application that pulls from Google's Poly to create an AR and VR experience`,
          hasVideo: true
        },
        {
          title: 'The Yoyo Adventure',
          imageUrl: "https://www.youtube.com/embed/v79vy17DJWs",
          githubUrl:'https://github.com/FCraven/theYoyoAdventure',
          description:'The product of a 4-day hackathon to learn something new. I went from zero to this!',
          hasVideo: true
        },
        {
          title: `Member's Dashboard`,
          imageUrl:'https://www.publicdomainpictures.net/pictures/140000/velka/vintage-newspaper-print.jpg',
          githubUrl:'https://github.com/FCraven/nytimes-dashboard',
          description:'Just started this one. An easy to use dashboard that consumes the NYTimes API and returns an easily navigable, user-friendly decluttering of the news.',
          hasVideo: false
        },
        {
          title: 'This Page',
          imageUrl:'/moustacheSelfie.JPG',
          githubUrl:'https://github.com/FCraven/business-card',
          description:`This is a responsive single page application. I built it using CRA, React, React Router and Bootstrap.`,
          hasVideo: false
        },
        {
          title: 'Fire & Ironman',
          imageUrl:'https://static1.squarespace.com/static/58518b50197aeabc8e85286d/t/5b69fcd770a6ad4074ee7959/1533672668893/new+layout.jpg',
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
    const frontEnd = this.state.frontEnd
    const backEnd = this.state.backEnd
    const otherTech = this.state.otherTech

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
          <Route path='/menu' component={Menu} />
          <Route path='/projects' render={(props)=> <Projects projects={projects} />} />
          <Route path='/techstack' component={TechStack} />
          <Route path='/education' render={(props)=> <Education education={education} />} />
          <Route path='/frontend' render={(props)=> <FrontEnd frontEnd={frontEnd} />} />
          <Route path='/backend' render={(props)=> <BackEnd backEnd={backEnd} />} />
          <Route path='/othertech' render={(props)=> <OtherTech otherTech={otherTech} />} />
        </Switch>

      </div>




    )
  }
}

