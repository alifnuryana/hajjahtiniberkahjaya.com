import GLightbox from 'glightbox'

export default defineNuxtPlugin({
  name: 'glightbox',
  dependsOn: ['plyr'],
  setup(_nuxtApp) {
    window.GLightbox = GLightbox
  },
})
