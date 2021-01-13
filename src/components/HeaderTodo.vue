<template>
  <div class="header">
    <h2 class="header-title">{{ theme }} Theme</h2>
    <h1 class="header-main-title">Task List</h1>
    <ToggleTodo :theme="theme" @toggle="$emit('toggle')"/>
  </div>
</template>

<script>
import ToggleTodo from "./ToggleTodo";

export default {
  name: "HeaderTodo",
  components: {
    ToggleTodo
  },
  props: ['theme']
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  width: 100%;
  height: 50px;
  background:rgb(207, 205, 205);
  color: rgb(17, 20, 27);
  transition: background 0.3s ease-in-out;
}
.header-title, .header-main-title{
  text-transform: uppercase;
  color: rgb(24, 24, 24);
  transition: color 0.3s ease-in-out;
}
.dark .header-main-title {
   color: #fff;
}
.dark .header-title  {
  color: rgb(179, 175, 175);
}
.dark .header {
  opacity: 0.7;
  background: #000;
  color: #fff;
}
@media(max-width: 780px) {
  .header-title, .header-main-title  {
    font-size: 17px;
  }
}
</style>