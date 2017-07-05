import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();
require('../sass/style.scss');

ReactDOM.render(    
    <Main />,
    document.getElementById("app")
);