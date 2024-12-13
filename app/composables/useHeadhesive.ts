interface Headhesive {
  visible: boolean
  elem: HTMLElement
  clonedElem: HTMLElement
  scrollOffset: number
  options: HeadhesiveOptions
  init(): void
  destroy(): void
  stick(): void
  unstick(): void
  update(): void
}

interface HeadhesiveOptions {
  offset?: number | string
  offsetSide?: 'top' | 'bottom'
  classes?: {
    clone?: string
    stick?: string
    unstick?: string
  }
  throttle?: number
  onInit?: (this: Headhesive) => void
  onStick?: (this: Headhesive) => void
  onUnstick?: (this: Headhesive) => void
  onDestroy?: (this: Headhesive) => void
}

interface HeadhesiveApi {
  Headhesive: {
    new(element: HTMLElement | string, options: HeadhesiveOptions): Headhesive
  }
}

const useHeadhesive = () => {
  return useScriptNpm<HeadhesiveApi>({
    packageName: 'headhesive',
    version: '1.2.3',
    file: 'dist/headhesive.min.js',
    scriptOptions: {
      bundle: true,
      use() {
        return {
          Headhesive: window.Headhesive,
        }
      },
    },
  })
}

export default useHeadhesive
