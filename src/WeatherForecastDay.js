import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function MaxTemperature() {
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function MinTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function Day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return weekDays[day];
    }


    return(
        <div>
        <div className="ForecastDay">{Day()}</div>
            <div className="ForecastIcon">
                <WeatherIcon code={props.data.weather[0].icon} size={45}/>
            </div>
        <div className="ForecastTemperatures">
            <span className="ForecastMax">{MaxTemperature()}°</span>
            <span className="ForecastMin">{MinTemperature()}°</span>
            </div>
        </div>
    )
}
