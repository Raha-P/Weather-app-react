import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [Forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse (response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  };

  if (loaded){
    return(
    <div className="weatherForecast">
        <div className="row">
          <div className="col-md WeatherForecastDayOnebyOne">
          <WeatherForecastDay data={Forecast[0]} />
          </div>
          <div className="col-md WeatherForecastDayOnebyOne">
          <WeatherForecastDay data={Forecast[1]} />
          </div>
          <div className="col-md WeatherForecastDayOnebyOne">
          <WeatherForecastDay data={Forecast[2]} />
          </div>
          <div className="col-md WeatherForecastDayOnebyOne">
          <WeatherForecastDay data={Forecast[3]} />
          </div>
          <div className="col-md WeatherForecastDayOnebyOne">
          <WeatherForecastDay data={Forecast[4]} />
          </div>
        </div>
    </div>
    )
}
else { 
  let ApiKey = `1ee4264117b73d2263eecd562f31ef5c`;
  let longitude = props.coordinate.lon;
  let latitude = props.coordinate.lat;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(handleResponse);
  
  return null;}

}