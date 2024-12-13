interface ScrollCueOptions {
  interval?: number
  duration?: number
  percentage?: number
}

interface ScrollCue {
  init(options: ScrollCueOptions): void
  update(): void
}

interface ScrollCueApi {
  scrollCue: ScrollCue
}

const useScrollCue = () => {
  return useScriptNpm<ScrollCueApi>({
    packageName: 'scrollcue',
    file: 'scrollCue.min.js',
    version: '2.0.0',
    scriptOptions: {
      bundle: true,
      use() {
        return {
          scrollCue: window.scrollCue,
        }
      },
    },
  })
}

export default useScrollCue
