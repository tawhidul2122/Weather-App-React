import React from 'react'
import { iconUrlFromCode } from '../services/WeatherService'

 function Forecast({title,items}) {
  return (
    <div>
        <div className='flex items-center justify-start my-6 '>
<p className='text-white font-medium uppercase '>{title}

</p>

        </div>
        <hr className='mt-1 '/>
        <div className='flex flex-row item-center 
        justify-between text-white'>
            {items.map (item => (
                <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {item.title}
                    <img src={iconUrlFromCode(`${item.temp.toFixed()}*`)} 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-medium">22° </p>

            </div>

            ))}
            



        </div>

    </div>
  )
}
export default Forecast