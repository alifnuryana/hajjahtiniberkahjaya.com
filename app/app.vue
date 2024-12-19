<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

useHead({
  htmlAttrs: {
    lang: 'id',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  titleTemplate: '%s %separator PT. Hajjah Tini Berkah Jaya',
  description: appConfig.description,

  ogTitle: '%s',
  ogDescription: appConfig.description,
  ogImage: '/images/og-image.png',
  ogUrl: runtimeConfig.public.appUrl,
  ogType: 'website',

  twitterTitle: '%s',
  twitterDescription: appConfig.description,
  twitterImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="content-wrapper">
    <header class="wrapper bg-dark">
      <AppNavbar />
    </header>
    <NuxtPage />
  </div>
</template>
