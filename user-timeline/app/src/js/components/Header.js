import React from "react";
import Title from "./title";

export default class Header extends React.Component {
    render() {
        return(
            <header>                
                <i className="fa fa-bars"></i>
                <h1><Title title="Timeline" /></h1>
                <input type="text" name="search" placeholder="Search" />
                <i className="fa fa-search"></i>
            </header>
        );
    }
}