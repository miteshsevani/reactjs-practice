import React from "react";

export default class WeatherForm extends React.Component{
    sendCity(e) {
        e.preventDefault();
        const city = this.refs.city.value;        
        this.props.getWeather(city);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.sendCity.bind(this)}>
                    <input type="text" ref="city" placeholder="Enter city name" />
                    <button type="submit">Get Weather</button>
                </form>
            </div>
        )
    }
}