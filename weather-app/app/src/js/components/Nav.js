import React from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    onSearch(e) {
        e.preventDefault();
        const city = this.refs.city.value;
        const cityEncode = encodeURIComponent(city);
        
        if(city.length > 0) {
            this.refs.city.value = "";
            window.location = "/?city="+city;
        }
    }

    render() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><NavLink exact activeClassName="active" to="/">Get Weather</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/examples">Examples</NavLink></li>
                    </ul>
                </div>                
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch.bind(this)}>
                        <ul className="menu">
                            <li><input type="search" ref="city" placeholder="Search weather by city" /></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }   
}