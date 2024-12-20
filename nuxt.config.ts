// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxt/image', '@nuxt/scripts', '@nuxt/fonts'],
  devtools: { enabled: true },

  css: ['~/assets/scss/plugins.scss', '~/assets/scss/style.scss', '~/assets/scss/colors/yellow.scss', '~/assets/scss/fonts/thicccboi.scss'],

  runtimeConfig: {
    public: {
      appUrl: '',
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'color-functions', 'global-builtin', 'import'],
          outputStyle: 'compressed',
          quiteDeps: true,
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      { name: 'Custom', provider: 'local' },
      { name: 'Space Grotesk', provider: 'local', weights: ['300', '400', '500', '600', '700'] },
      { name: 'Thicccboi', provider: 'local', weights: ['400', '500', '700'] },
      { name: 'Unicons', provider: 'local' },
      { name: 'Urbanist', provider: 'local', weights: ['300', '400', '500', '600', '700'] },
    ],
  },

})
