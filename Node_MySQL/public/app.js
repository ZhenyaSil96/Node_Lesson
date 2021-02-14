
let e = require("express")
const { put } = require("../routes/todo")

new Vue({
    el: '#app',
    data() {
      return {
        isDark: true,
        show: true,
        todoTitle: '',
        todos: []
      }
    },
    creted() {
       fetch('/api/todo', {
         method: 'get'
       })
         .then(res => res.json())
         .then(todos => {
           this.todos = todos
           console.log(todos)
         })
         .catch(e => console.log(e))
    },
    methods: {
      addTodo() {
        const title = this.todoTitle.trim()
        if (!title) {
          return
        }
        // this.todos.push({
        //   title: title,
        //   id: Math.random(),
        //   done: false,
        //   date: new Date()
        // })
        fetch('/api/todo/', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title})
        })
         .then(res => res.json())
        .then(({todo}) => {
          console.log(todo)
          this.todos.push(todo)
          this.todoTitle = ''
        })
        .catch(e => console.log(e))
        
      },
      removeTodo(id) {
        fetch('/api/todo/' + id, {
          method: 'delete'
        })
         .then(() => {
          this.todos = this.todos.filter(t => t.id !== id)
         })
         .catch(e => console.log(e))
        
      },
      completeTodo(id){
        fetch('/api/todo/' + id, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({done: true})
        })
          .then(res => res.json())
          .then(({todo}) => {
            console.log(id)
            const idx = this.todos.findIndex(t => t.id === todo.id)
            this.todos[idx].updatedAt = todo.updatedAt
          })
          .catch((e) => console.log(e))
       
      }
    },
    filters: {
      capitalize(value, withTime) {
        return value.toString().charAt(0).toUpperCase() + value.slice(1)
      },
      date(value) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }

        if(withTime) {
          options.hour = '2-digit'
          options.minet = '2-digit'
          options.second = '2-digit'
        }

        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
      }
    }
  })