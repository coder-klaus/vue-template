<template>
  <div class="app">
    <h2 :class="$style.title">App</h2>
    <Child />
  </div>
</template>

<script>
import Child from './components/Child.vue'

export default {
  name: 'App',

  components: {
    Child
  }
}
</script>

<style module>
.title {
  color: red;
}
</style>
