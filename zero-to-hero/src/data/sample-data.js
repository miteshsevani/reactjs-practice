module.exports = {
    "humans" : {
        "Mitesh Sevani" : {
            "conversations" : [
                { 
                    "who": "bot",
                    "text": "Hello, can i take your order please?",
                    "time": new Date(2017, 4, 6, 15, 10, 0, 0)
                },
                {
                    "who": "human",
                    "text": "Can I have a small cheese pizza please?",
                    "time": new Date(2017, 4, 6, 15, 10, 30, 0)
                },
                {
                    "who": "bot",
                    "text": "Were would you like it delivered?",
                    "time": new Date(2017, 4, 6, 15, 11, 0, 0)
                },
                {
                    "who": "human",
                    "text": "123 High Street",
                    "time": new Date(2017, 4, 6, 15, 11, 30, 0)
                },
            ],
            "orders" : [
                {
                    "time": new Date(2017, 4, 6, 15, 11, 45, 0),
                    "pizzas" : [{
                        "toppings": "Cheese",
                        "size" : "S"
                    }],
                    "price" : 15,
                    "address" : "123 High STreet",
                    "status" : "Confirmed"
                }
            ]
        },
        "Tom Whatts" : {
            "conversations" : [
                { 
                    "who": "bot",
                    "text": "Hello, can i take your order please?",
                    "time": new Date(2017, 5, 6, 15, 10, 0, 0)
                },
                {
                    "who": "human",
                    "text": "Can I have a large vege hot pizza please?",
                    "time": new Date(2017, 5, 6, 15, 10, 30, 0)
                },
                {
                    "who": "bot",
                    "text": "Were would you like it delivered?",
                    "time": new Date(2017, 5, 6, 15, 11, 0, 0)
                },
                {
                    "who": "human",
                    "text": "8 Crescent Road",
                    "time": new Date(2017, 5, 6, 15, 11, 30, 0)
                },
            ],
            "orders" : [
                {
                    "time": new Date(2017, 5, 6, 15, 11, 45, 0),
                    "pizzas" : [{
                        "toppings": "Tomatoes, Peppers, Sweetcorn, Green Chillies",
                        "size" : "M"
                    }],
                    "price" : 25,
                    "address" : "8 Crescent Road",
                    "status" : "Ready",
                }
            ]
        }       
    }
}