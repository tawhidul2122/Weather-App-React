
import './App.css';

import UimReact from '@iconscout/react-unicons-monochrome/icons/uim-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/WeatherService';


function App() {

  const fetchWeather =async() =>
  {
    const data= await getWeatherData('weather',{ id: 524901});
    console.log(data);
  }
  fetchWeather();
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-600 to to-blue-600 h-fit shadow-xl shadow-green-300 '>


      <TopButtons/>
      <Inputs/>


      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title="Hourly Forecast"/>
      <Forecast title="Daily Forecast"/>




     </div>
     
  );
}

export default App;
