const API_KEY= "9cbbf7013f234b94adc94052220309";
const BASE_URL= "http://api.weatherapi.com/v1"
// http://api.weatherapi.com/v1/current.json?key=9cbbf7013f234b94adc94052220309&q=London&aqi=no
// http://api.weatherapi.com/v1/current.json?key=9cbbf7013f234b94adc94052220309&q=London&aqi=no
// http://api.weatherapi.com/v1/current.json?key=49cbbf7013f234b94adc94052220309&q=London
// http://api.weatherapi.com/v1/current.json?q=London&key=49cbbf7013f234b94adc94052220309

// const BASE_URL= "https://api.openweathermap.org/data/2.5"
// http://https//api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5


// const getWeatherData=(infoType,searchParams)=> {
    const getWeatherData=(infoType,searchParams)=> {
    // const url= new URL(BASE_URL+"/"+infoType);
    const url= new URL(BASE_URL+"/"+infoType);

     url.search= new URLSearchParams({key:API_KEY, ...searchParams});

    console.log(url);

    return fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);
};
export default getWeatherData;

// http://https//api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=e5f1fed1092556a043dac7d91ce8ad0d




// api.openweathermap.org/data/2.5/weather?q=London&appid=47b2e2a4033fd435d7fbd685050866a5
// api.openweathermap.org/data/2.5/weather?q=london&apiid=47b2e2a4033fd435d7fbd685050866a5




