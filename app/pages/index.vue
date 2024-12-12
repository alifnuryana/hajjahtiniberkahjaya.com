<script setup lang="ts">
const title = ref('Under Construction')

useSeoMeta({
  title: title,
})
</script>

<template>
  <div>
    <SectionHero />
    <section class="wrapper bg-light">
      <div class="container pt-19 pt-md-21 pb-16 pb-md-18">
        <SectionService />
      </div>
    </section>
  </div>
</template>
