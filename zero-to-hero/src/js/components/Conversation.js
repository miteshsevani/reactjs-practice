import React from "react";
import Message from "./Message.js";

export default class Conversation extends React.Component {
    
    render() {
        return(
            <div id="conversation">
                <h3>Chats</h3><br />
                <table>
                    <thead>
                        <tr>
                            <th>Who</th>
                            <th>Text</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>                                                    
                        
                    </tbody>
                </table>     
                
            </div>
        )
    }
}