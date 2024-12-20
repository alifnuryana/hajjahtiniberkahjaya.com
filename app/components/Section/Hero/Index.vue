<script setup lang="ts">
const { hero } = useAppConfig()

const { onLoaded } = useScrollCue()
onMounted(() => {
  onLoaded(({ scrollCue }) => {
    scrollCue.init({
      interval: -400,
      duration: 700,
      percentage: 0.8,
    })

    scrollCue.update()
  })
})
</script>

<template>
  <section class="wrapper bg-dark angled lower-start">
    <div class="container pt-7 pt-md-11 pb-8">
      <div class="row gx-0 gy-10 align-items-center">
        <div
          class="col-lg-6"
          data-cues="slideInDown"
          data-group="page-title"
          data-delay="600"
        >
          <ClientOnly>
            <SectionHeroHeadline />
          </ClientOnly>
          <SectionHeroSubHeadline />
          <div>
            <NuxtLink class="btn btn-lg btn-primary rounded">
              {{ hero.ctaText }}
            </NuxtLink>
          </div>
        </div>
        <SectionHeroVideoBox />
      </div>
    </div>
  </section>
</template>
