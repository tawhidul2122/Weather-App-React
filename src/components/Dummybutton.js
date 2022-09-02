import React from 'react'

 function Dummybutton() {
    const cities = [
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
    <div className='flex-items-center justify-center my-5'>
        {
            cities.map((city)=>(
                city.title
             )) 
        }

        

      
    </div>
  )
}
export default Dummybutton