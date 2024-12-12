<script setup lang="ts">
const { hero } = useAppConfig()
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
