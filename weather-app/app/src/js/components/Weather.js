import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import openWeatherMap from "../data/openWeatherMap";
import Error from "./Error";
import queryString from "query-string";

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {            
            isLoading: false                        
        }
    }
    
    getWeather(city) {
        let that = this;        
        this.setState({ 
            isLoading: true,
            errorMessage: undefined,
            city: undefined,
            temp: undefined
        });

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

    componentDidMount() {        
        let city = queryString.parse(location.search).city;
        if(city && city.length > 0) {
            this.getWeather(city);            
        }
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
                    <Error eMessage={errorMessage} />
                )
            }
        }

        return(            
            <div className="grid-container">
                <div className="grid-x align-center">
                    <div className="cell small-6 large-4">
                        <h1 className="text-center page-title">Weather</h1>
                        <WeatherForm getWeather={this.getWeather.bind(this)} />
                        {renderMessage()}
                        {renderError()}
                    </div>
                </div>
            </div>
        )
    }
}

