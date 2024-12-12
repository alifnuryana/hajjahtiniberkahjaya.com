<script setup lang="ts">
const { hero } = useAppConfig()

onMounted(async () => {
  const Plyr = (await import('plyr')).default

  Plyr.setup('.player', {
    loadSprite: true,
    fullscreen: { enabled: true, iosNative: true },
    muted: false,
  })

  const GLightbox = (await import('glightbox')).default

  GLightbox({
    selector: '*[data-glightbox]',
    touchNavigation: true,
    loop: false,
    zoomable: false,
    autoplayVideos: true,
    moreLength: 0,
    slideExtraAttributes: {
      poster: '',
    },
    plyr: {
      css: '',
      js: '',
      config: {
        ratio: '',
        fullscreen: {
          enabled: false,
          iosNative: false,
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false,
        },
      },
    },
  })
})
</script>

<template>
  <div
    class="col-lg-5 offset-lg-1 mb-n18"
    data-cues="slideInDown"
  >
    <div class="position-relative">
      <a
        :href="hero.videoUrl"
        class="btn btn-circle btn-primary btn-play ripple mx-auto mb-6 position-absolute"
        style="top:50%; left: 50%; transform: translate(-50%,-50%); z-index:3;"
        data-glightbox
      >
        <i class="icn-caret-right" />
      </a>
      <figure class="rounded shadow-lg">
        <NuxtImg
          :src="hero.videoPosterImageUrl"
          alt="Produk akhir (pakan ternak) yang berkualitas"
        />
      </figure>
    </div>
  </div>
</template>
