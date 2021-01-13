<template>
  <div class="app" :class="theme">
    <HeaderTodo :theme="theme" @toggle="toggle"/>

    <TodoList :class="theme"/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import HeaderTodo from "./components/HeaderTodo";

export default {
  name: "App",
  async mounted() {
    const dataTheme = await localStorage.getItem('theme');
    if(dataTheme) {
      this.theme = JSON.parse(dataTheme);
    }

  },
  data () {
    return {
      theme: 'dark'
    }
  },
  components: {
    TodoList,
    HeaderTodo
  },
  methods: {
    toggle() {
      if(this.theme === 'dark') {
        this.theme = 'light'
      } else {
        this.theme = 'dark'
      }
      localStorage.setItem('theme', JSON.stringify(this.theme));
    }
  }
};
</script>

<style >
body {
  margin: 0;

}
.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
  margin: 0;
  transition: background 0.3s ease-in-out;
}

.dark  {
  background: rgb(8, 16, 59);
  transition: background 0.6s ease-in-out;
}
</style>
