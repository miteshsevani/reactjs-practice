import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import openWeatherMap from "../data/openWeatherMap";
import Error from "./Error";

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

        openWeatherMap.getTemp(city).then((temp) => {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false,
                errorMessage: undefined
            })
        }, (errorMessage) => {
            that.setState({ 
                isLoading: false,
                errorMessage: errorMessage.message
            });            
        });
    }

    render() {
        const {isLoading, temp, city, errorMessage } = this.state;

        var renderMessage = () => {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp, city) {
                return <WeatherResult temp={temp} city={city} />;
            }
        }

        var renderError = () => {
            if (typeof errorMessage === 'string') {
                return(
                    <Error />
                )
            }
        }

        return(            
            <div className="grid-container">
                <div className="grid-x align-center">
                    <div className="cell small-6 large-4">
                        <h1 className="text-center">Weather</h1>
                        <WeatherForm getWeather={this.getWeather.bind(this)} />
                        {renderMessage()}
                        {renderError()}
                    </div>
                </div>
            </div>
        )
    }
}

