import React from "react";
import Header from "./Header";
import Content from "./Content";

export default class UserTimeline extends React.Component {

    render() {
        const data = [
            {
                time: new Date().getTime(),
                user: {
                    id: 1,
                    name: "Doug",
                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                post: "Just had lunch",
                comments: [
                    {from: "Ari",text: "Me too!"},
                    {from: "Greg",text: "Yum!"},
                ]
            },
            {
                time: new Date().getTime(),
                user: {
                    id: 2,
                    name: "Doug",
                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                post: "Time for work",
                comments: [
                    {from: "Tom",text: "Boring..."},
                    {from: "Liz",text: "Where do you work?"},
                    {from: "Liz",text: "When do you finish"},
                ]
            },
        ];

        return(
            <div>
                <Header />
                <Content activities={data} />
            </div>
        );
    }
}