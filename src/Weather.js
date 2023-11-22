import React, { useState } from "react";
import axios from "axios";
import FriendlyDate from "./FriendlyDate";
import { Audio } from 'react-loader-spinner';
import WeatherIcon from "./WeatherIcon";
import DisplayTemperature from "./DisplayTemperature";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  let [city, setCity] = useState(props.defaultcity);
  let [weatherItems, setWeatherItems] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search(){
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);}

  function update(event) {
    setCity(event.target.value);
  }

  function showTemp(response) {
    setWeatherItems({
    ready:true,
    coordinate: response.data.coord,
    cityName: response.data.name,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
})};

if (weatherItems.ready) {
  return (
    <div>
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input className="search " type="search" placeholder="Enter a city" onChange={update} />
        <input className="btn btn-outline-light" type="submit" value="Search" />
      </form>

      <p>
        <div className="row firstcol">
          <div className="col-md-6">
            <h1 className="cityname">{weatherItems.cityName}</h1>
            <p className="humidityandwindandtime">
              <FriendlyDate date={weatherItems.date} />
              Humidity: {weatherItems.humidity} %
              <br />
              Wind: {weatherItems.wind} km/h
            </p>
            <DisplayTemperature celsius={weatherItems.temperature}/>
      
          </div>

          <div className="col-md-6 secondcol">
            <WeatherIcon code={weatherItems.icon} size={70}/>
            <h2 className="text-capitalize description">{weatherItems.description}</h2>
          </div>

        </div>
      </p>
    </div> 
    <div className="WeatherForecast">
    <WeatherForecast coordinate={weatherItems.coordinate}/>
    </div>
    <span className="raha">Open-source code by <a href="https://github.com/Raha-P/Weather-app-react">Raha Pedram</a></span>
    </div>
  );}
  else {
    search();
      return (
        <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />    
        </div>


  );}

  }
  