import React from "react";
import InboxPane from "./InboxPane.js";
const data = require("../../data/sample-data.js");
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            humans: {}
        }
    }

    loadSampleData() {
        this.setState(data)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 column-1">
                        <InboxPane humans={this.state.humans} />
                        <br /><button className="btn btn-default" onClick={this.loadSampleData.bind(this)}>Load Orders</button><br /><br />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 column-3">
                        
                    </div>
                </div>
            </div>
        );
    }
}