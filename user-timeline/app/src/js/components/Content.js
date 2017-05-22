import React from "react";
import ActivityItem from "./ActivityItem";

export default class Content extends React.Component {
    render() {
        
        const {activities} = this.props;

        return (
            <div>
            {activities.map((activity) => (
                <ActivityItem key={activity.user.id} activity={activity} />                
            ))}
            </div>
        );
    }
}