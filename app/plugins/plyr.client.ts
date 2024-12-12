import Plyr from 'plyr'

export default defineNuxtPlugin({
  name: 'plyr',
  dependsOn: ['bootstrap'],
  setup(_nuxtApp) {
    window.Plyr = Plyr
  },
  hooks: {
    'app:mounted'() {
      window.Plyr.setup('.player', {
        loadSprite: true,
        fullscreen: { enabled: true, iosNative: true },
        muted: false,
      })
    },
  },
})
