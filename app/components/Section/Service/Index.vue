<script setup lang="ts">
const { service: { services } } = useAppConfig()
</script>

<template>
  <SectionServiceHeader />
  <div class="row gx-md-8 gy-8 mb-14 mb-md-18">
    <SectionServiceItem
      v-for="service in services"
      :key="service.icon"
      :service
    />
  </div>
</template>
