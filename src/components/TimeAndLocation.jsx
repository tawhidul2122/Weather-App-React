import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

 function TimeAndLocation({weather: {dt,name,country,timezone}}) {
  return (
    <div>
        <div className='flex items-center mt-3 '>
            <p className='text-white text-l  font-light '>
               {formatToLocalTime (dt,timezone) } 

            </p>

        </div>
        <div className=' flex items-center justify-center my-2'>
            <p className=' text-white text-5xl font-medium'>
                {`${name},${country}`}
                
            </p>

        </div>
    </div>
  )
}
export default TimeAndLocation