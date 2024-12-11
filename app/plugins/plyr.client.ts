import Plyr from 'plyr'

export default defineNuxtPlugin({
  name: 'plyr',
  setup(_nuxtApp) {
    window.Plyr = Plyr
  },
})
