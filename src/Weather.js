import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("Tehran");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState(" ");
  let [humidity, setHumidity] = useState(" ");
  let [wind, setWind] = useState(" ");
  let [icon, setIcon] = useState(" ");
  let [cityName, setCityName] = useState("");

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
    let cityname = response.data.name;
    let temp = response.data.main.temp;
    let desc = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;


    setTemperature(Math.round(temp));
    setDescription(desc);
    setHumidity(humidity);
    setWind(wind);
    setIcon(icon);
    setCityName(cityname);
  }

  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <input className="search " type="search" placeholder="Enter a city" onChange={update} />
        <input className="btn btn-outline-light" type="submit" value="Search" />
      </form>

      <p>
        <div className="row">
          <div className="col-md-6 pe-0">
            <h1 className="cityname">{cityName}</h1>
            <p className="humidityandwind">
              humidity: {humidity} %
              <br />
              wind: {wind} km/h
            </p>
            <h3 className="temperature">{temperature}°C</h3>
          </div>

          <div className="col-md-6 ps-0">
            <img src={icon} alt="weather icon" />
            <h2 className="description">{description}</h2>
          </div>
          <span className="raha">Open-source code by <a href="https://github.com/Raha-P/Weather-app-react">Raha Pedram</a></span>


        </div>
      </p>
    </div>
  ); 
}
