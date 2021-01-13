<template>
  <div class="todo-item">
    <div class="todo-item-content" v-for="(todo, index) in todos" :key="todo.id">
      <div class="todo-item-index">{{ index  + 1}}.</div>
      <span  contenteditable="true" class="todo-item-title">{{ todo.title }} </span>
      <button class="btn-done" @click="todo.isDone = !todo.isDone, addDoneTodo(), deleteEvent(index), tryTodo()">✔</button>
      <button class="btn-delete" @click="deleteEvent(index, todo.title)">+</button>
      <TodoDone class="none" :isDoneTodos="doneTodos" />
    </div>
  </div>
</template>

<script>

import TodoDone from "./TodoDone"

export default {
  name: 'TodoItem',
  components: {
    TodoDone
  },
  props: {
    todos: {
      type: Array
    },
    doneTodos: {
      type: Array
    },

  },
  computed: {
    doneData() {
      return this.doneTodos;
    }

  },
  methods: {
    tryTodo() {
      this.$emit('addDoneTask', this.doneData);
    },
    deleteEvent(index, name) {
      const isConfirm = confirm( `Are you realy want to delete "${name}"`)
      if(isConfirm) {
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }else {
        return;
      }

    },

    addDoneTodo() {
            console.log(this.theme);
      this.todos.forEach((item) => {
        if(item.isDone) {
          this.doneTodos.push({item})
        } else {
          return;
        }
        localStorage.setItem('todos', JSON.stringify(this.todos));
        localStorage.setItem('todoDone', JSON.stringify(this.doneTodos));
      })
    }
    },


  }

</script>

<style>
.todo-item {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.todo-item-content {
  background:rgb(207, 205, 205);
  padding: 10px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
}
.dark .todo-item-content {
  background: #000;
  opacity: 0.7;
  transition: background 0.4s ease-in-out;
}
.todo-item-index {
  font-weight: 600;
  font-size: 20px;
  margin-right: 7px;
  color: #000;
}
.btn-done {
  cursor: pointer;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: rgb(1, 165, 1);
  color: #fff;
}
.dark .btn-done {
  color: #000;
}
.btn-delete {
  cursor: pointer;
  font-size: 21px;
  font-weight: 600;
  border-radius: 50%;
  transform: rotate(45deg);
  border: none;
  outline: none;
  width: 25px;
  height: 25px;
  background: red;
  opacity: 0.9;
  color: #fff;
}
.dark .btn-delete {
  color: #000;
}
.todo-item-title {
  margin-right: auto;
  outline: none;
  color: #000;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
}
.dark .todo-item-index {
  color: #fff;
}
.dark .todo-item-title {
  color: #fff;
}
.none {
  display: flex;
}
</style>