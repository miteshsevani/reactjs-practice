import React from "react";

export default class WeatherWeatherResultForm extends React.Component{
    render() {
        return(
            <div>
                <p>The weather in {this.props.city} today is {this.props.temperature}*C</p>
            </div>
        )
    }
}