import React from "react";

const WeatherWeatherResultForm = ({temp, city}) => {
    return(
        <div>
            <h3>It is {temp}°C in {city}</h3>
        </div>
    )
}

module.exports = WeatherWeatherResultForm;