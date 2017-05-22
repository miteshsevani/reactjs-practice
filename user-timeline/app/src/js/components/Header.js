import React from "react";
import Title from "./Title";
import Search from "./Search";
export default class Header extends React.Component {
    render() {
        return(
            <header>                
                <i className="fa fa-bars"></i>
                <div className="title">
                    <h1><Title title="Timeline" /></h1>
                </div>
                <Search />
            </header>
        );
    }
}