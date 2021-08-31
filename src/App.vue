<template>
  <div class="app">
  </div>
</template>

<script>
export default {
  name: 'App',

  async created() {
    const child = await import('./components/Child.vue')
    console.log(child)
  }
}
</script>

<style module>
.title {
  color: red;
}
</style>
