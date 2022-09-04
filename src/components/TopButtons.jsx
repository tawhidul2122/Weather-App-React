import React from 'react'

function TopButtons({setQuery}) {

    const cities=[
        {   
            id:1,
            title:'Riyadh'
        

        },
        {   
            id:2,
            title:'Pabna'
        

        },
        {   
            id:3,
            title:'Chittagong'
        

        },
        {   
            id:4,
            title:'Rajshahi'
        

        },
        {   
            id:5,
            title:'Jerusalem'
        

        },

        
    ]


    return (
        <div className="flex items-center justify-around my-6">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white text-lg font-medium"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
      );
    }
    
    export default TopButtons;