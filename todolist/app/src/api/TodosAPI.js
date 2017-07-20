import uuid from "node-uuid";
const $ = require('jQuery');

module.exports = {

    setTodos(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },

    getTodos() {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {

        }

        return $.isArray(todos) ? todos : [];

        /*return [
            {
                id: uuid(),
                text:'Shopping',
                completed: false
            },
            {
                id: uuid(),
                text:'Wash car',
                completed: true
            },
            {
                id: uuid(),
                text:'Complete assignment',
                completed: false
            },
            {
                id: uuid(),
                text:'Book Spa',
                completed: true
            }
        ]*/        
    }
};