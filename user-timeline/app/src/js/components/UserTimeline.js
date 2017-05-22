import React from "react";
import Header from "./Header";
import Activity from "./Activity";

export default class UserTimeline extends React.Component {

    render() {
        const data = {
            time: "An hour ago",
            user: {
                id: 1,
                name: "Doug",
                avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
            },
            post: "Just had lunch",
            comments: {
                from: "Ari",
                text: "Me too!"
            }
        }

        return(
            <div>
                <Header />
                <Activity activity={data} />
            </div>
        );
    }
}