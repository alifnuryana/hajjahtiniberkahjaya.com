<script setup lang="ts">
const { hero } = useAppConfig()
</script>

<template>
  <h1 class="display-1 text-white mb-4">
    {{ hero.headline }} <span
      class="typer text-primary text-nowrap"
      data-delay="100"
      :data-words="hero.typerHeadline.join(',')"
    /><span
      class="cursor text-primary"
      data-owner="typer"
    />
  </h1>
</template>
