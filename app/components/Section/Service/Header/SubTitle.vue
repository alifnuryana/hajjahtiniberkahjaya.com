<script setup lang="ts">
const { service: { subHeadline } } = useAppConfig()
</script>

<template>
  <h3 class="display-4 mb-9">
    {{ subHeadline }}
  </h3>
</template>
