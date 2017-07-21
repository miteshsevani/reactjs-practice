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
            }
        ]*/        
    },

    filterTodos(todos, showCompleted, searchText) {
        let filteredTodos = todos;
        
        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by searchText
        
        filteredTodos = filteredTodos.filter((todo) => {
            let todoItem = todo.text.toLowerCase();
            return (!searchText || todoItem.indexOf(searchText) > -1);
        });

        // sort todos with non-completed first
        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        })

        return filteredTodos;

    },

    removeAll() {
        localStorage.remove('todos');
    }
};