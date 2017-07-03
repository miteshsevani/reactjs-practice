import React from "react";
import InboxItem from "./InboxItem.js";
const data = require("../../data/sample-data.js");

export default class InboxPane extends React.Component {
    
    renderInboxItem(person) {
        return(
            <InboxItem key={person} index={person} details={this.props.humans[person]} />
        )
    }

    render () {
        const person = this.props.humans;

        return (
            <div>
                <h3>Inbox</h3>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Address</th>
                            <th>Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(person).map(this.renderInboxItem.bind(this))}
                    </tbody>
                </table>                
                
            </div>
        );
    }
}