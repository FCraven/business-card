import React from 'react'
import StackCard from '../StackCard'


const FrontEnd =(props)=> {

console.log(`Front End Props -->`, props)
  // const test = frontEnd.libraries[0]
  // const languageTest = frontEnd.languages[2]
  const languages = props.frontEnd.languages
  const libraries = props.frontEnd.libraries
  console.log(languages)

  const languageCards = languages.map((language,idx) => <StackCard {...language}/>)

  const libraryCards = libraries.map((library,idx) => <StackCard {...library}/>)

  return (


    <div className="container pt-3">
      <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Languages</h2>

        <div className="row justify-content-center pt-3">
          {languageCards}
        </div>

      <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Libraries</h2>

        <div className="row justify-content-center pt-3 pb-5">
        {libraryCards}
        </div>

      </div>



  )
}

export default FrontEnd
