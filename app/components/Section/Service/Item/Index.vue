<script setup lang="ts">
defineProps<{
  service: {
    icon: string
    title: string
    description: string
  }
}>()
</script>

<template>
  <div class="col-md-6 col-lg-3">
    <SectionServiceItemIcon :icon="service.icon" />
    <SectionServiceItemTitle :title="service.title" />
    <SectionServiceItemDescription :description="service.description" />
    <SectionServiceItemLink />
  </div>
</template>
