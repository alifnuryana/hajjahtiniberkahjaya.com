<script setup lang="ts">
const navOffCanvasRef = useTemplateRef('nav-off-canvas-ref')

defineExpose({
  navOffCanvasRef,
})
</script>

<template>
  <div
    ref="nav-off-canvas-ref"
    class="navbar-collapse offcanvas offcanvas-nav offcanvas-start w-100"
  >
    <AppNavbarOffCanvasHeader />
    <AppNavbarOffCanvasBody />
    <AppNavbarOffCanvasFooter />
  </div>
</template>
