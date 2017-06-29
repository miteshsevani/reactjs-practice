import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import openWeatherMap from "../data/openWeatherMap";

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {            
            isLoading: false
        }
    }
    getWeather(city) {
        let that = this;        
        this.setState({ isLoading: true });

        openWeatherMap.getTemp(city).then(function(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage) {
            that.setState({ isLoading: false });
            alert(errorMessage);
        });
    }

    render() {
        const {isLoading, temp, city } = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp, city) {
                return <WeatherResult temp={temp} city={city} />;
            }
        }

        return(
            <div>
                <h1>Get Weather</h1>
                <WeatherForm getWeather={this.getWeather.bind(this)} />
                {renderMessage()}
            </div>
        )
    }
}

