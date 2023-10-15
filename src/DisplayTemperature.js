import React, { useState } from "react"; 

export default function DisplayTemperature(props) {
    let [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("faren"); 

    }

    function convertTocelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }


    if (unit === "celsius") {
    return (
    <h3>
        <span className="temperature">{props.celsius}°</span>
        <span className="celandfaren">

            <span className="convertitems">C</span>
            │
            <a className="convertitems active" href="/" onClick={convertToFahrenheit}>F</a>

        </span>
    </h3>
    )} else {
        let farenheit = Math.round(props.celsius*(9/5)+32);
    return (
    <h3>
        <span className="temperature">{farenheit}°</span>
        <span className="celandfaren">

            <a className="convertitems active" href="/" onClick={convertTocelsius}>C</a>
            │
            <span className="convertitems">F</span>

        </span>
    </h3>
    )}

    }
 