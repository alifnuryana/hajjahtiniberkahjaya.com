<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6">
    <i :class="`uil ${icon}`" />
  </div>
</template>
