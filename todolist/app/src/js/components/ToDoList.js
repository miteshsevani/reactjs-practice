import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import ToDo from "./ToDo";
export default class ToDoList extends React.Component{
    render() {
        const {todos, onToggle} = this.props;

        const renderTodos = () => {
            return(
                todos.map((todo, key) => (                    
                    <ToDo key={key} {...todo} onToggle={onToggle} />
                ))
            )
        }

        return(
            <Grid>
                <Row>
                    <Col sm={8} smOffset={3}>
                        {renderTodos()}
                    </Col>
                </Row>
            </Grid>
        )
    }
}