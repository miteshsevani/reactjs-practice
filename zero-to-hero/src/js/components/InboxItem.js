import React from "react";
import Conversation from "./Conversation.js";
export default class InboxItem extends React.Component {

    loadChat(message) {
        <div className="row">
            <div className="col-sm-12 column-2">
                {console.log(message)}
            </div>
        </div>
    }

    render () {    
        return (            
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders[0].pizzas[0].toppings}</td>
                <td>{this.props.details.orders[0].pizzas[0].size}</td>
                <td>{this.props.details.orders[0].price}</td>
                <td>{this.props.details.orders[0].time.toLocaleString()}</td>
                <td>{this.props.details.orders[0].address}</td>
                <td>{this.props.details.orders[0].status}</td>
                <td onClick={this.loadChat.bind(this.props.details.orders[0])}>Load Chat</td>
            </tr>
        );
    }
}