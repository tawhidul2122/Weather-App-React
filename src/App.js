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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [query, setQuery] = useState({ q: "Dhaka" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };
  fetchWeather();
  },[query,units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-4500 to-blue-5600";
    const threshold = units === "metric" ? 20 : 40;
    if (weather.temp <= threshold) return "from-aqua-400 to-purple-700";

    else return "from-grey-700 to-orange-700";
  };



  // const fetchWeather =async() =>
  // {
   
  //   const data= await getFormattedWeatherData({ q:"London"} );

  //   console.log(data);
    
  // };
  // fetchWeather();
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
    from-cyan-600 to to-blue-600 h-fit shadow-xl shadow-green-300 ${formatBackground()}`}>


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
