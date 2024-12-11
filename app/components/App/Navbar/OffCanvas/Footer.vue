<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="offcanvas-footer d-lg-none p-6">
    <div>
      <NuxtLink
        external
        :to="`mailto:${appConfig.email}`"
        class="link-inverse"
      >
        {{ appConfig.email }}
      </NuxtLink>
      <br>
      {{ appConfig.phone }}
      <br>
      <SocialLinks class="mt-4" />
    </div>
  </div>
</template>
