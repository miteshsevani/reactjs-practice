import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city: "London",
            temperature: "20"
        }
    }
    getWeather(city) {
        this.setState({
            city: city,
            temperature: "32"
        })
    }

    render() {
        return(
            <div>
                <h1>Get Weather</h1>
                <WeatherForm 
                    getWeather={this.getWeather.bind(this)} 
                />
                <WeatherResult 
                    city={this.state.city} 
                    temperature={this.state.temperature} 
                />
            </div>
        )
    }
}