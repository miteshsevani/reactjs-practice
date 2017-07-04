import React from "react";
import Error from "./Error";
export default class WeatherForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {errorMessage: false}
    }

    sendCity(e) {
        e.preventDefault();
        const city = this.refs.city.value;

        if(city.length > 0) {
            this.refs.city.value = "";
            this.props.getWeather(city);
        } else {
            this.setState({
                errorMessage: true
            })
        }
    }    

    render() {
        var renderError = () => {
            if (this.state.errorMessage === true) {
                return(
                    <Error eMessage="Please enter a city name" />
                )                
            }
        }

        return(
            <div>
                <form onSubmit={this.sendCity.bind(this)}>
                    <input type="search" ref="city" placeholder="Search weather by city" />
                    <input type="submit" className="button expanded hollow" value="Get Weather" />
                </form>
                {renderError()}
            </div>
        )
    }
}