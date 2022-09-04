
import './App.css';

import UimReact from '@iconscout/react-unicons-monochrome/icons/uim-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/WeatherService';
import getFormattedWeatherData from './services/WeatherService';

import React, { useEffect, useState } from "react";


function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    const fetchWeather = async() =>
  {
   
   await getFormattedWeatherData({...query,units})
   .then((data) =>{
      setWeather(data);
     });
    };
  fetchWeather();
  },[query,units]);

    



  // const fetchWeather =async() =>
  // {
   
  //   const data= await getFormattedWeatherData({ q:"London"} );

  //   console.log(data);
    
  // };
  // fetchWeather();
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-600 to to-blue-600 h-fit shadow-xl shadow-green-300 '>


<TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      { weather && (
      <div>
         
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
         {/* <Forecast title="Hourly Forecast"/>
        <Forecast title="Daily Forecast"/>  */}
        {/* //no daily + weekly update on free api */}
        </div>

      )



      

      }


     </div>
     
  );
}


export default App;
