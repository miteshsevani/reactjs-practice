import React from "react";

const WeatherWeatherResultForm = ({temp, city}) => {
    return(
        <div>
            <h3 className="text-center">It is {temp}°C in {city}</h3>
        </div>
    )
}

module.exports = WeatherWeatherResultForm;