<template>
  <div class="todo-item todo-done">
    <h1 class="todo-done-title">Tasks Done</h1>
    <span :class="hiddenOdjDone" class="have-no-task">You have no completed tasks.</span>
        <div class="todo-item-content" v-for="(todo, index) in isDoneTodos" :key="todo.id">
            <div class="todo-item-index">{{ index  + 1}}.</div>
            <span class="todo-item-title">{{ todo.item.title }} </span>
            <button class="btn-done btn-todo-done" @click="todo.isDone = !todo.isDone, goBackTodo(), deleteEvent(index)">⮌</button>
            <button class="btn-delete" @click="deleteEvent(index)">+</button>
        </div>
        <div class="container-progress">

          <div class="progress-bar" :class="hiddenOdjDoneReverse">
            <div class="progress-counter" >{{ counterDone }} / {{ counterAll }} (<span class="percent-sum">{{ percentSum }}%</span> done)</div>
            <div class="percentage" v-bind:style="{'width' : percentSum + '%'}"></div>
          </div>
        </div>
  </div>
</template>

<script>


export default {
  name: "TodoDone",

   props: {
    isDoneTodos: {
      type: Array
    },
    allTodos: {
      type: Array
    }
  },
  methods: {
    deleteEvent(index) {
      this.isDoneTodos.splice(index, 1);
      localStorage.setItem('redoValue', JSON.stringify(this.isDoneTodos));

    },
    goBackTodo() {
      this.isDoneTodos.forEach((item) => {
        if(item.isDone) {
          this.allTodos.push({title: item.item.title,})
        }
        localStorage.setItem('todos', JSON.stringify(this.allTodos));
      })
    },
  },
  computed: {
    counterDone() {
      return this.isDoneTodos.length;
    },
    counterAll() {
      return this.isDoneTodos.length + this.allTodos.length;
    },
    percentSum() {
      return Math.floor(this.counterDone / this.counterAll * 100);
    },
    hiddenOdjDone() {
      return {
        "block": !this.isDoneTodos.length,
        "none": this.isDoneTodos.length
      }
    },
    hiddenOdjDoneReverse() {
      return {
        "block": this.isDoneTodos.length,
        "none": !this.isDoneTodos.length
      }
    }
  }
}
</script>



<style scoped>
.todo-done {
  border-radius: 0px 0px 20px 20px;
  background: rgb(182, 182, 182);
  margin: 50px auto 0;
  width: 100%;
}
.dark .todo-done {
  background: rgb(0, 23, 73);
  transition: background 0.5s ease-in-out;
}
.todo-done-title {
  margin: 0px 0px 15px 0px;
  padding: 15px 0px;
  color: #000;
  background: rgb(207, 205, 205);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
}
.dark .todo-done-title {
  color: #fff;
  background: #000;
  opacity: 0.7;
  transition: background 0.5s ease-in-out;
}
.btn-todo-done {
  font-weight: 600;
  font-size: 16px;
  background: rgb(226, 230, 0);
  opacity: 0.8;
}
.todo-item-container {
  margin: auto;
  align-items: center;
  display: flex;

}
.color-counter {
  color:rgb(4, 0, 255);
  font-weight: 600;
}
.index-done {
  display: inline;
}
.todo-item-title {
  text-decoration: line-through;
  overflow: hidden;
}
.none {
  display: none;
}
.block {
  display: block;
}
.have-no-task {
  font-size: 18px;
  margin: 0px 0px 15px 0px;
  letter-spacing: 1px;
  color: #000;
  font-weight: 600;
  opacity: 0.8;
}
.dark .have-no-task {
  color: #fff;
}
.progress-bar {
  position: relative;
  width: 90%;
  opacity: 0.7;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #000;
  z-index: 1;
  margin: 20px auto;
}
.dark .progress-bar {
  border: 2px solid #fff;
}
.progress-counter {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 10px 0px;
}
.dark .progress-counter {
  color: #fff;
}
.percentage {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  display: block;
  height: 100%;
  border-radius: 20px;
  background:rgb(255, 255, 255);
  z-index: -1;
  transition: 0.2s ease-in;
}
.percent-sum {
  color: rgb(84 255 223);
}
.dark .percentage {
  background: rgb(3, 14, 172);
}
@media(max-width: 780px) {
  .todo-done-title {
    font-size: 17px;
  }
  .todo-done {
    margin: 20px auto 0;
  }
  .have-no-task {
    font-size: 14px;
  }
  .progress-bar {
    height: 30px;
    margin: 10px auto;
  }
  .progress-counter {
    font-size: 15px;
    padding: 7px 0px;
}
}
</style>
