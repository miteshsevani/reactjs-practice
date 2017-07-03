import React from "react";

export default class WeatherForm extends React.Component{
    sendCity(e) {
        e.preventDefault();
        const city = this.refs.city.value;

        if(city.length > 0) {
            this.refs.city.value = "";
            this.props.getWeather(city);
        } else {
            alert("Please provide a valid city name")
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.sendCity.bind(this)}>
                    <input type="text" ref="city" placeholder="Enter city name" />
                    <input type="submit" className="button expanded hollow" value="Get Weather" />
                </form>
            </div>
        )
    }
}