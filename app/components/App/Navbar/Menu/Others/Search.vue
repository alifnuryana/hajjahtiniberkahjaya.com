<script setup lang="ts">
const offCanvasSearchRef = useTemplateRef('off-canvas-search-ref')
const searchInputRef = useTemplateRef('search-input-ref')

onMounted(() => {
  offCanvasSearchRef.value?.addEventListener('shown.bs.offcanvas', () => {
    searchInputRef.value?.focus()
  })
})
</script>

<template>
  <div
    id="offcanvas-search"
    ref="off-canvas-search-ref"
    class="offcanvas offcanvas-top bg-light"
    data-bs-scroll="true"
  >
    <div class="container d-flex flex-row py-6">
      <form class="search-form w-100">
        <input
          id="search-form"
          ref="search-input-ref"
          type="text"
          class="form-control"
          placeholder="Ketik kata kunci dan tekan enter"
        >
      </form>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
  </div>
</template>
