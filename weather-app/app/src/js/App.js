import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Weather from "./components/Weather";
import About from "./components/About";
import Examples from "./components/Examples";

require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

ReactDOM.render(    
    <BrowserRouter>
      <div>
        <Nav />                
        <Route exact path="/" component={Weather} />
        <Route path="/about" component={About} />
        <Route path="/examples" component={Examples} />        
      </div>
    </BrowserRouter>,
    document.getElementById("app")
);