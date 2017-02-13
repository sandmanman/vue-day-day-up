/**
 * Todo
 */

Vue.config.debug = true;
Vue.config.devtools = true;

// localStorage
var STORAGE_KEY = 'todos';
var todoStorage = {
    fetch: function() {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach(function(todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};

// filters
var filters = {
    all: function(todos) {
        return todos
    },
    active: function(todos) {
        return todos.filter(function(todo) {
            return !todo.completed
        });
    },
    completed: function(todos) {
        return todos.filter(function(todo) {
            return todo.completed
        });
    }
};


var todoApp = new Vue({
    el: '#todo',
    data: {
        todos: todoStorage.fetch(),
        newTodo: '',
        editedTodo: null,
        visibility: 'all' // 默认显示全部 todo
    },
    watch: {
        // 监测 todos 的变化，及 localStorage
        todos: {
            handler: function(todos) {
                todoStorage.save(todos);
            },
            deep: true
        }
    },
    computed: {
        filteredTodos: function() {
            return filters[this.visibility](this.todos)
        },
        remaining: function() {
            return filters.active(this.todos).length
        },
        allDone: {
            get: function() {
                return this.remaining === 0
            },
            set: function(value) {
                this.todos.forEach(function(todo){
                    todo.completed = value
                })
            }
        }
    },
    filters: {
        pluralize: function(n) {
            return n === 1 ? 'item':'items'
        }
    },
    methods: {
        addTodo: function() {
            // 新增
            var value = this.newTodo || this.newTodo.trim();
            if (!value) {
                return
            }
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            })
            this.newTodo = ''
        },

        removeTodo: function(todo) {
            // 移除
            this.todos.splice(this.todos.indexOf(todo), 1)
        },

        editTodo: function(todo) {
            // 修改
            this.beforeEditCache = todo.title
            this.editedTodo = todo
        },

        doneEdit: function(todo) {
            if ( !this.editedTodo ) {
                return
            }
            this.editedTodo = null;
            todo.title = todo.title.trim();
            if ( !todo.title ) {
                this.removeTodo(todo)
            }
        },

        cancelEdit: function(todo) {
            // 取消修改
            this.editedTodo = null
            todo.title = this.beforeEditCache
        },

        removeCompleted: function() {
            // 移除已完成的 todo
            this.todos = filters.active(this.todos)
        }
    },
    directives: {
        'todo-focus': function(el, value) {
            if (value) {
                el.focus()
            }
        }
    }
});


// handle routing
function onHashChange() {
    var visibility = window.location.hash.replace(/#\/?/, '');
    if ( filters[visibility] ) {
        todoApp.visibility = visibility
    } else {
        window.location.hash = ''
        todoApp.visibility = 'all'
    }
}

window.addEventListener('hashchange', onHashChange);
onHashChange();
