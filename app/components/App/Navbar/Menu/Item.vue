<script setup lang="ts">
defineProps<{
  link: {
    label: string
    to: string
  }
}>()
</script>

<template>
  <li class="nav-item">
    <NuxtLink
      class="nav-link"
      :to="link.to"
    >
      {{ link.label }}
    </NuxtLink>
  </li>
</template>
