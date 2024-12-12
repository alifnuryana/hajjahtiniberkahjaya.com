import GLightbox from 'glightbox'

export default defineNuxtPlugin({
  name: 'glightbox',
  dependsOn: ['bootstrap'],
  setup(_nuxtApp) {
    window.GLightbox = GLightbox
  },
  hooks: {
    'app:mounted'() {
      window.GLightbox({
        selector: '*[data-glightbox]',
        touchNavigation: true,
        loop: false,
        zoomable: false,
        autoplayVideos: true,
        moreLength: 0,
        plyr: {
          css: '',
          js: '',
          config: {
            ratio: '',
            fullscreen: {
              enabled: false,
              iosNative: false,
            },
            youtube: {
              noCookie: true,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
            },
            vimeo: {
              byline: false,
              portrait: false,
              title: false,
              transparent: false,
            },
          },
        },
      })
    },
  },
})
