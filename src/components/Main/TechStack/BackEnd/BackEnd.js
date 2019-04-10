import React from 'react'
import StackCard from '../StackCard'


const BackEnd =(props)=> {
  console.log(`BackEnd Props ==-->`,props)

  const database = props.backEnd.database
  const databaseCards = database.map((database,idx) => <StackCard {...database}/>)

  return (
    <div className="container pt-3">
    



      <h2 className='text-center bg-primary rounded text-light w-50 mx-auto mt-5'>Database</h2>
        <div className="row justify-content-center pt-3">
          {databaseCards}
        </div>
    </div>
  )
}

export default BackEnd
