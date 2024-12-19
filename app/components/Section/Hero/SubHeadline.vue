<script setup lang="ts">
const { hero } = useAppConfig()
</script>

<template>
  <p class="lead fs-24 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15">
    {{ hero.subHeadline }}
  </p>
</template>
