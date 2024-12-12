import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin({
  name: 'bootstrap',
  setup(_nuxtApp) {
    window.bootstrap = bootstrap
  },
})
