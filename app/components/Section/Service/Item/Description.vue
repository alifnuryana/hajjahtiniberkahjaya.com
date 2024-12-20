<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<template>
  <p class="mb-3">
    {{ description }}
  </p>
</template>
