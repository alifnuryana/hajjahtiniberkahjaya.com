export default defineNuxtPlugin({
  name: 'typer-dot-js',
  dependsOn: ['bootstrap'],
  async setup(_nuxtApp) {
    import('typer-dot-js')
  },
})
