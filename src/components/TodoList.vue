<template>
  <div class="todo-list">
    <div class="todo-input-wrapper">
      <input class="todo-input" @keyup.enter="addTodo" v-model="todoText" type="text" placeholder="New Task...">
      <button @keyup.enter="addTodo" @click="addTodo" class="btn-add">+</button>
    </div>
      <TodoItem :theme="theme" :todos="ObjTodos" :doneTodos="arrIsDone" @addDoneTask="getDoneTask"/>
      <TodoDone  :isDoneTodos="arrIsDone" :allTodos="ObjTodos" />

  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoDone from "./TodoDone";
import { v1 } from "uuid";

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoDone,
  },
  data: () => ({
    todoText: "",
    ObjTodos: [],
    arrIsDone: [],

  }),
  props: ['theme'],
  async mounted() {
    const data = await localStorage.getItem('todos');
    const doneData = await localStorage.getItem('redoValue')
    if(data) {
      this.ObjTodos = JSON.parse(data);
    }
    if(doneData) {
      this.arrIsDone = JSON.parse(doneData);
    }
  },

  methods: {
    getDoneTask(value) {
      localStorage.setItem('redoValue', JSON.stringify(value));
    },
    addTodo() {
      if(this.todoText.trim()) {
        this.ObjTodos.push({
          title: this.todoText ? this.todoText : this.todoText = false,
          id: v1(),
          isDone: false,
        });

        localStorage.setItem('todos', JSON.stringify(this.ObjTodos));
      } else {
        return;
      }
      this.todoText = "";
    },

  }

}
</script>

<style scoped>
.none {
  display: none;
}
.block {
  display: block;
}
.todo-list {
  border-radius: 20px;
  width: 60%;
  background: rgb(228, 226, 226);
  margin: 30px auto ;
}
.todo-input-wrapper {
  display: flex;
  align-items: center;
  margin: 20px auto;
  text-align: center;
}
.todo-input {
  margin-left: auto;
  display: flex;
  width: 90%;
  height: 50px;
  font-size: 18px;
  opacity: 0.8;
  background: #fff;
  border: none;
  border-radius: 3px;
  outline: none;
}
.dark .todo-input {
  color: #fff;
}
input::-webkit-input-placeholder {
  padding-left: 3px;
  color: #000;
  font-weight: 600;
}
.dark input::-webkit-input-placeholder {
  color: rgb(179, 175, 175)
}
.dark .btn-add {
  background: #000;
  color: rgb(179, 175, 175);
}
.dark .todo-input {
  background: #000;
}
.dark .todo-list {
  background: rgb(14, 50, 128);
}
.btn-add {
  cursor: pointer;
  margin-right: auto;
  padding: 0;
  font-size: 25px;
  height: 52px;
  width: 55px;
  border-radius: 5px;
  margin-left: 5px;
  font-weight: 600;
  border: none;
  outline: none;
  opacity: 0.8;
  background: #fff;
  color: #000;
}
@media(max-width: 780px) {
  .todo-list {
    margin: 7px auto;
    width: 80%;
  }
  .todo-input {
  width: 80%;
  height: 30px;
  font-size: 11px;
  }
  .btn-add {
  font-size: 15px;
  height: 32px;
  width: 35px;
  }
}
</style>