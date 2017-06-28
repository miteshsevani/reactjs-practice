import React from "react";
import { NavLink } from 'react-router-dom';
export default class Nav extends React.Component {
    render() {
        return(
            <div>
                <ul>                    
                    <li><NavLink exact activeClassName="active" activeStyle={{fontWeight:'bold',color:"green"}} to="/">Get Weather</NavLink></li>
                    <li><NavLink activeClassName="active" activeStyle={{fontWeight:'bold',color:"green"}} to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" activeStyle={{fontWeight:'bold',color:"green"}} to="/examples">Examples</NavLink></li>
                </ul>
                <hr/>
            </div>
        )
    }
}