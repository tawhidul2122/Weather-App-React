import {DateTime} from "luxon";


const API_KEY="e5f1fed1092556a043dac7d91ce8ad0d";
const BASE_URL="https://api.openweathermap.org/data/2.5"

// const BASE_URL= "https://api.openweathermap.org/data/2.5"
// http://https//api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5



const getWeatherData=(infoType,searchParams)=>{
    const url= new URL(BASE_URL+"/"+infoType);
    url.search= new URLSearchParams({...searchParams,appid:API_KEY}
        )
        
        return fetch(url).
        then((res)=>res.json());
        
};

const fomatCurrentWeather= (data) => {
    const {
        coord:{lat,lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
    } =data ;
    const {main:details,icon}=weather[0]
    return{ lat,lon,temp,feels_like,temp_min,
        temp_max,humidity,name,dt,
        details,icon,speed, country,
        sunrise,sunset,
        weather}


    



}

const formatForecastWeather = (data) => {
    // let {
    //     timezone,daily,hourly
    // }=data;
    // console.log(data);
    // daily=daily.slice(1,6).map(d=>{
    //     return{
    //         title:formatToLocalTime(d.dt,timezone,'ccc'),
    //         temp:d.temp.day,
    //         icon:d.weather[0].icon

    //     }

        


    // }
    // );

    // hourly=hourly.slice(1,6).map(d=>{
    //     return{
    //         title:formatToLocalTime(d.dt,timezone,'hh:mm a'),
    //         temp:d.temp.day,
    //         icon:d.weather[0].icon
    //     }
    // }
    // );

    // return {timezone,daily,hourly}
    //don't have the daily data in free api


};

const getFormattedWeatherData= async (searchParams) => {
    const formattedCurrentWeather= await getWeatherData('weather',searchParams).
    then(fomatCurrentWeather)

    const {lat,lon} =formattedCurrentWeather
    const formattedForecastWeather= await getWeatherData ('weather',
    {
        lat,lon, exclude:'current.minutely,alerts',units:searchParams.units

    }).then(formatForecastWeather)

    return {...formattedCurrentWeather,...formattedForecastWeather}

}

const formatToLocalTime = (secs, zone, format="cccc,dd LLL yyy' | Local time:'hh:mm a")=>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>`http://openweathermap.org/img/wn/${code}@2x.png`
export { formatToLocalTime, iconUrlFromCode };
export default getFormattedWeatherData



