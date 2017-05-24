import React from "react";
import Clock from "./Clock";
import Header from "./Header";
import Content from "./Content";

export default class UserTimeline extends React.Component {

    render() {
        const data = [
            {
                time: new Date().toLocaleString(),
                user: {
                    id: 1,
                    name: "Doug",
                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                post: "Just had lunch",
                comments: [
                    {id:1, from: "Ari",text: "Me too!"},
                    {id:2, from: "Greg",text: "Yum!"},
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
                    {id:1, from: "Tom",text: "Boring..."},
                    {id:2, from: "Liz",text: "Where do you work?"},
                    {id:3, from: "Liz",text: "When do you finish"},
                ]
            },
        ];

        return(
            <div>
                <Clock />
                <Header />
                <Content activities={data} />
            </div>
        );
    }
}