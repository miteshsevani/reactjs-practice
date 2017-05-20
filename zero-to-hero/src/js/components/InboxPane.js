import React from "react";
import InboxItem from "./InboxItem.js";

export default class InboxPane extends React.Component {
    render () {
        return (
            <div>
                <h3>Inbox</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <InboxItem />
                    </tbody>
                </table>
            </div>
        );
    }
}