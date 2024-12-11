<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="offcanvas-header d-lg-none">
    <h3 class="text-white fs-30 mb-0">
      {{ appConfig.title }}
    </h3>
    <button
      type="button"
      class="btn-close btn-close-white ms-auto"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    />
  </div>
</template>
