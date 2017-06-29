import React from "react";

export default class WeatherWeatherResultForm extends React.Component{
    render() {
        const { temp, city } = this.props;
        return(
            <div>
                <h3>It is {temp}°C in {city}</h3>
            </div>
        )
    }
}