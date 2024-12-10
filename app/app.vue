<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  titleTemplate: title => title ? `${title} | ${appConfig.title}` : appConfig.title,
  description: appConfig.description,
  ogTitle: appConfig.title,
  ogDescription: appConfig.description,
  ogImage: '/images/og-image.png',
  ogUrl: runtimeConfig.public.appUrl,
  twitterTitle: appConfig.title,
  twitterDescription: appConfig.description,
  twitterImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})

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
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
