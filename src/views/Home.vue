<template>
  <div class="-mobile-wrapper">
    <router-link :to="`/foo/${id}`">
      <button>点我去测试页</button>
    </router-link>
  </div>
</template>

<script setup>
const id = 1810166
</script>
