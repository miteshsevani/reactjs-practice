import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from "./components/Main";
import Weather from "./components/Weather";
import About from "./components/About";

ReactDOM.render(    
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>      
      <Route exact path="/" component={Main}/>
      <Route path="/weather" component={Weather}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>,
    document.getElementById("app")
);