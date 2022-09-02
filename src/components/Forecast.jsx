import React from 'react'

 function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start my-6 '>
<p className='text-white font-medium uppercase '>{title}

</p>

        </div>
        <hr className='mt-1 '/>
        <div className='flex flex-row item-center 
        justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:40 pm 
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-medium">22° </p>

            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:40 pm 
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-medium">22° </p>

            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:40 pm 
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-small">22° </p>

            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:40 pm 
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-medium">22° </p>

            </div>

            <div className='flex flex-col flex-items-center justify-center'>
                <p className='font-light text-sm'>
                    04:40 pm 
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" 
                    className='width-12 my-1 ' alt="" />
                </p>
                <p className="font-medium">22° </p>

            </div>

        </div>

    </div>
  )
}
export default Forecast