interface PlyrOptions {
  loadSprite?: boolean
  fullscreen?: {
    enabled: boolean
    iosNative: boolean
  }
  muted?: boolean
}

interface Plyr {
  setup(selector: string, options?: PlyrOptions): void
}

interface PlyrApi {
  Plyr: Plyr
}

const usePlyr = () => {
  return useScriptNpm<PlyrApi>({
    packageName: 'plyr',
    version: '3.7.2',
    file: 'dist/plyr.min.js',
    scriptOptions: {
      bundle: true,
      use() {
        return {
          Plyr: window.Plyr,
        }
      },
    },
  })
}

export default usePlyr
