<script setup lang="ts">
const { service: { headline } } = useAppConfig()
</script>

<template>
  <h2 class="fs-16 text-uppercase text-line text-primary mb-3">
    {{ headline }}
  </h2>
</template>
