import React from 'react'

function TopButtons() {

    const cities=[
        {   
            id:1,
            title:'London'
        

        },
        {   
            id:2,
            title:'Sydney'
        

        },
        {   
            id:3,
            title:'Dhaka'
        

        },
        {   
            id:4,
            title:'Moscow'
        

        },
        {   
            id:5,
            title:'Jerusalem'
        

        },

        
    ]


  return (
    <div className='flex items-center justify-around my-3'>
        {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium transition ease-out hover:scale-150"> {city.title} </button>

            )
        )}

    </div>

  )  
  
}

export default TopButtons