import React from "react";
import InboxPane from "./InboxPane.js";

export default class Content extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="col column-1">
                    <InboxPane />
                </div>
                <div className="col column-2">

                </div>
                <div className="col column-3">

                </div>
            </div>
        );
    }
}