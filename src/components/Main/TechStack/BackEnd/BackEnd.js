import React from 'react'
import StackCard from '../StackCard'


const BackEnd =(props)=> {
  console.log(`BackEnd Props ==-->`,props)

  const database = props.backEnd.database
  const databaseCards = database.map((database,idx) => <StackCard {...database}/>)

  return (
    <div className="container">
     <div className="row justify-content-center pt-3">

        <div>
        <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Runtime</h2>
        <div className="justify-content-center pt-3 row">
          <StackCard {...props.backEnd.runtime} />
        </div>
        </div>

        <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Server</h2>
        <div className="justify-content-center pt-3 row">
          <StackCard {...props.backEnd.server} />
        </div>

        <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Database</h2>
        <div className="row justify-content-center pt-3">
          {databaseCards}
        </div>

        <h2 className='text-center bg-primary rounded text-light w-50 mx-auto m-4 p-2'>Architecture</h2>
        <div className="justify-content-center pt-3 row">
          <StackCard {...props.backEnd.architecture} />
        </div>

      </div>
    </div>
  )
}

export default BackEnd
