import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin({
  name: 'bootstrap',
  setup(nuxtApp) {
    nuxtApp.provide('bootstrap', bootstrap)
    window.bootstrap = bootstrap
  },
})
