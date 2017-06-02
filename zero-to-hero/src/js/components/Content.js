import React from "react";
import InboxPane from "./InboxPane.js";
const data = require("../../data/sample-data.js");
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            humans: {},
            stores: {}
        }
    }

    loadSampleData() {
        this.setState(data)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 column-1">
                        <InboxPane humans={this.state.humans} />
                        <br /><button onClick={this.loadSampleData.bind(this)}>Load Data</button><br />
                    </div>
                    <div className="col-sm-2 column-2">

                    </div>
                    <div className="col-sm-2 column-3">

                    </div>
                </div>
            </div>
        );
    }
}