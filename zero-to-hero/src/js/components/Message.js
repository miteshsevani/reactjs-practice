import React from "react";

export default class Message extends React.Component {
    render() {
        return(            
            <tr>
                <td>{this.props.details.conversations[0].who}</td>
                <td>{this.props.details.conversations[0].text}</td>
                <td>{this.props.details.conversations[0].time.toLocaleString()}</td>
            </tr>
        )
    }
}