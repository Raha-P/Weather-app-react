import React, { useState } from "react";
import axios from "axios";
import FriendlyDate from "./FriendlyDate";


export default function Weather() {
  let [city, setCity] = useState(" ");
  let [weatherItems, setWeatherItems] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function update(event) {
    setCity(event.target.value);
  }

  function showTemp(response) {
    console.log(response);
    setWeatherItems({
    cityName: response.data.name,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
})};

  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input className="search " type="search" placeholder="Enter a city" onChange={update} />
        <input className="btn btn-outline-light" type="submit" value="Search" />
      </form>

      <p>
        <div className="row">
          <div className="col-md-6 pe-4 ps-0">
            <h1 className="cityname">{weatherItems.cityName}</h1>
            <p className="time">
              <FriendlyDate date={weatherItems.date} />
            </p>
            <p className="humidityandwind">
              Humidity: {weatherItems.humidity} %
              <br />
              Wind: {weatherItems.wind} km/h
            </p>
            <h3 className="temperature">{weatherItems.temperature}°C</h3>
          </div>

          <div className="col-md-6 ps-4 pe-0">
            <img src={weatherItems.icon} alt="weather icon" />
            <h2 className="text-capitalize description">{weatherItems.description}</h2>
          </div>
          <span className="raha">Open-source code by <a href="https://github.com/Raha-P/Weather-app-react">Raha Pedram</a></span>


        </div>
      </p>
    </div>
  );
  }