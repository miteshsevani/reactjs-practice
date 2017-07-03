import React from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    onSearch(e) {
        e.preventDefault();
        alert();
    }

    render() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><NavLink exact activeClassName="active" activeStyle={{color:"green"}} to="/">Get Weather</NavLink></li>
                        <li><NavLink activeClassName="active" activeStyle={{color:"green"}} to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" activeStyle={{color:"green"}} to="/examples">Examples</NavLink></li>
                    </ul>
                </div>                
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch.bind(this)}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search" /></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }   
}