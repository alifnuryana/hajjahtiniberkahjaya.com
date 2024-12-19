<script setup lang="ts">
const { $bootstrap } = useNuxtApp()
const navbarRef = useTemplateRef('navbar-ref')
const navOffCanvasRef = useTemplateRef('nav-off-canvas-ref')
const bsOffCanvas = computed(() => {
  if (!navOffCanvasRef.value?.navOffCanvasRef) return

  return new $bootstrap.Offcanvas(navOffCanvasRef.value.navOffCanvasRef, {
    scroll: false,
  })
})

const showOffCanvas = () => bsOffCanvas.value?.toggle()

const { onLoaded } = useHeadhesive()
onMounted(() => {
  onLoaded(({ Headhesive }) => {
    if (!navbarRef.value) return

    new Headhesive(navbarRef.value, {
      offset: 350,
      offsetSide: 'top',
      classes: {
        clone: 'navbar-clone fixed',
        stick: 'navbar-stick',
        unstick: 'navbar-unstick',
      },
      onStick: function () {
        const navbarClonedClass = this.clonedElem.classList
        if (navbarClonedClass.contains('transparent') && navbarClonedClass.contains('navbar-dark')) {
          this.clonedElem.className = this.clonedElem.className.replace('navbar-dark', 'navbar-light')
        }
      },
    })
  })
})
</script>

<template>
  <nav
    ref="navbar-ref"
    class="navbar navbar-expand-lg center-nav transparent navbar-dark"
  >
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
