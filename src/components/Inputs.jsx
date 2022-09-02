import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (

    <div className='flex flex-row justify-center my-5'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-3 '>
            <input type="text"
            placeholder='Search for your city....'
             className='text-xl font-light p-2  w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
             />
             <UilSearch  size={30} className="text-white cursor-pointer transition ease-out hover:scale-150 "/>
             <UilLocationPoint size={30} className="text-white cursor-pointer transition ease-out hover:scale-150" />

        </div>

        <div className='flex flex-row w-1/4 items-center justify-center '>
            <button name="metric" className='text-xl text-white font-light mr-2'> 
            °C   </button>
            <p className='text-xl text-white mx-l' >|</p>
            <button name="imperial"  className='text-xl text-white font-light ml-2'> °F</button>
        </div>
        <h2>
            
        </h2>
    </div>
    
    

  )
}

export default Inputs