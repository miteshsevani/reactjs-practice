import { connect } from "react-redux";
import React from "react";
import moment from "moment";
const actions = require('../actions/actions');


const ToDo = React.createClass({

    render() {
        const { id, text, completed, createdTime, completedTime, dispatch } = this.props;
        const todoClassname = completed ? "todo-item completed" : "todo-item not-completed";

        const renderTime = () => {
            if(!completed) {                
                return "Created on " + moment.unix(createdTime).format('Do MMMM YYYY [at] HH:mm');
            } else {
                return "Completed on " + moment.unix(completedTime).format('Do MMMM YYYY [at] HH:mm');
            }
            
        }

        return(
            <div className={todoClassname} onClick={() => {                
                    dispatch(actions.toggleTodo(id));
                }}>
                <input type="checkbox" checked={completed} />
                <p className="todo-text">{text}</p>
                <p className="time">{renderTime()}</p>
            </div>
        )
    }
});


module.exports = connect()(ToDo);