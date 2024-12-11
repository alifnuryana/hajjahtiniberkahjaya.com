<script setup lang="ts">
const { social } = useAppConfig()
</script>

<template>
  <nav class="nav social social-white">
    <NuxtLink
      v-if="social.twitter"
      external
      :to="social.twitter"
    >
      <i class="uil uil-twitter" />
    </NuxtLink>
    <NuxtLink
      v-if="social.facebook"
      external
      :to="social.facebook"
    >
      <i class="uil uil-facebook-f" />
    </NuxtLink>
    <NuxtLink
      v-if="social.linkedin"
      external
      :to="social.linkedin"
    >
      <i class="uil uil-linkedin" />
    </NuxtLink>
    <NuxtLink
      v-if="social.instagram"
      external
      :to="social.instagram"
    >
      <i class="uil uil-instagram" />
    </NuxtLink>
    <NuxtLink
      v-if="social.youtube"
      external
      :to="social.youtube"
    >
      <i class="uil uil-youtube" />
    </NuxtLink>
  </nav>
</template>
