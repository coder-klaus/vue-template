<template>
  <div class="-mobile-wrapper">
    传入的id: {{ id }}
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  id: {
    type: String,
    require: true
  }
})
</script>
