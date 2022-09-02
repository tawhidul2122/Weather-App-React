const API_KEY= "e5f1fed1092556a043dac7d91ce8ad0d";
const BASE_URL= "https://api.openweathermap.org/data/2.5"

const getWeatherData=(infoType,searchParams)=> {
    const url= new URL(BASE_URL+"/"+infoType);
    url.search= new URLSearchParams({...searchParams,apiid:API_KEY})

    return fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);
}
export default getWeatherData

// http://https//api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=e5f1fed1092556a043dac7d91ce8ad0d




// api.openweathermap.org/data/2.5/weather?q=London&appid=47b2e2a4033fd435d7fbd685050866a5
// api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5




