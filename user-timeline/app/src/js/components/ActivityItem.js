import React from "react";

export default class ActivityItem extends React.Component {
    render() {
        const {activity} = this.props;

        return(
            <div key={activity.user.id} className="content">
                
                <div className="item">
                    <div className="avatar">
                        <img className="user-image" src={activity.user.avatar} />
                        <div className="user-name">{activity.user.name}</div>
                    </div>
                </div>

                <div className="description">
                    <p className="time">{activity.time}</p>    
                    <p className="post">{activity.post}</p>    
                </div>
                
                <div className="comments">
                    <i className="fa fa-comment"></i>
                    <span>{activity.comments.length}</span>
                </div>                
            </div>
        );
    }
}