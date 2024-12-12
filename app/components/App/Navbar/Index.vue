<script setup lang="ts">
const { $bootstrap } = useNuxtApp()
const navOffCanvasRef = useTemplateRef('nav-off-canvas-ref')
const bsOffCanvas = computed(() => {
  if (!navOffCanvasRef.value?.navOffCanvasRef) return

  return new $bootstrap.Offcanvas(navOffCanvasRef.value.navOffCanvasRef, {
    scroll: false,
  })
})

const showOffCanvas = () => bsOffCanvas.value?.toggle()
</script>

<template>
  <nav class="navbar navbar-expand-lg center-nav transparent navbar-dark">
    <div class="container flex-lg-row flex-nowrap align-items-center">
      <AppNavbarBrand />
      <AppNavbarOffCanvas ref="nav-off-canvas-ref" />
      <AppNavbarMenuOthers
        ref="search-off-canvas-ref"
        @show-off-canvas="showOffCanvas"
      />
    </div>
  </nav>
  <AppNavbarMenuOthersSearch />
</template>
