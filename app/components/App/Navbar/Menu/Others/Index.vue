<script setup lang="ts">
defineEmits<{
  showOffCanvas: []
}>()
</script>

<template>
  <div class="navbar-other w-100 d-flex ms-auto">
    <ul class="navbar-nav flex-row align-items-center ms-auto">
      <li class="nav-item">
        <button
          class="nav-link"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-search"
        >
          <i class="uil uil-search" />
        </button>
      </li>
      <li class="nav-item d-none d-md-block">
        <NuxtLink
          to="/"
          class="btn btn-sm btn-primary rounded"
        >
          Hubungi Kami
        </NuxtLink>
      </li>
      <li
        class="nav-item d-lg-none"
      >
        <button
          class="hamburger offcanvas-nav-btn"
          @click="$emit('showOffCanvas')"
        >
          <span />
        </button>
      </li>
    </ul>
  </div>
</template>
