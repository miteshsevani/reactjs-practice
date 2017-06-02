import React from "react";

export default class InboxItem extends React.Component {
    
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
            </tr>
        );
    }
}