import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./Nav";
import Timer from "./Timer";
import Countdown from "./Countdown";

const Main = (props) => {
    return(
        <BrowserRouter>
            <div>
                <Nav />                
                <Route exact path="/" component={Timer} />
                <Route path="/countdown" component={Countdown} />            
            </div>
        </BrowserRouter>
    )
}

module.exports = Main;