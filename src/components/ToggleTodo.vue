<template>
  <div class="toggle-todo-wrapper">
    <label class="toggle">
      <input
        class="toggle-input"
        type="checkbox"
        :checked="(theme === 'dark') ? 'checked' : false"
        @change="$emit('toggle')"
        >
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['theme']
}
</script>

<style scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  background: rgb(24, 24, 24);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  left: 4px;
  bottom: 4px;
  height: 26px;
  width: 26px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: rgb(179, 175, 175);
}
input:focus + toggler {
  box-shadow: 0 0 2px rgb(179, 175, 175);
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
@media(max-width: 780px) {
  .toggle {
    width: 50px;
    height: 24px;
  }
  .toggler:before {
    position: absolute;
    content: "";
    left: 4px;
    bottom: 4px;
    height: 16px;
    width: 16px;
    background: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}
</style>