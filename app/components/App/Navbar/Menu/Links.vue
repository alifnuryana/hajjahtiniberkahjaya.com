<script setup lang="ts">
const { links } = useAppConfig()
</script>

<template>
  <ul class="navbar-nav">
    <AppNavbarMenuItem
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </ul>
</template>
