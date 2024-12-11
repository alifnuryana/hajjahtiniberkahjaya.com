<script setup lang="ts">
const title = ref('Under Construction')

useSeoMeta({
  title: title,
})
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>This page is under construction.</p>
  </div>
</template>
