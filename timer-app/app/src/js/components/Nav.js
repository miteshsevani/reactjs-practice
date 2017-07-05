import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {    
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li><NavLink exact activeClassName="active" to="/">Timer</NavLink></li>
                    <li><NavLink activeClassName="active" to="/countdown">Countdown</NavLink></li>
                </ul>
            </div>                
            <div className="top-bar-right">                    
                <ul className="menu">
                    <li className="menu-text">Created by <a href="http://www.miteshsevani.com" target="_blank">Mitesh Sevani</a></li>
                </ul>                    
            </div>
        </div>
    )
}

module.exports = Nav;