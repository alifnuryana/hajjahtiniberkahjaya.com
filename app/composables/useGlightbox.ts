interface GLightboxOptions {
  selector: string
  touchNavigation?: boolean
  loop?: boolean
  autoplayVideos?: boolean
  zoomable?: boolean
  draggable?: boolean
  videosWidth?: string
  videosHeight?: string
  moreLength?: number
  slideExtraAttributes?: {
    poster: string
  }
  plyr?: {
    js?: string
    css?: string
    config?: {
      ratio?: string
      fullscreen?: {
        enabled?: boolean
        iosNative?: boolean
      }
      youtube?: {
        noCookie?: boolean
        rel?: number
        showinfo?: number
        iv_load_policy?: number
      }
      vimeo?: {
        byline?: boolean
        portrait?: boolean
        title?: boolean
        transparent?: boolean
      }
    }
  }
  width?: string
  height?: string
  preload?: number
  lightboxHTML?: string
  closeButtonHTML?: string
  nextButtonHTML?: string
  prevButtonHTML?: string
  onOpen?: () => void
  onClose?: () => void
  beforeSlideChange?: (currentIndex: number, nextIndex: number) => void
  afterSlideChange?: (currentIndex: number) => void
  slideInserted?: (index: number) => void
  slideRemoved?: (index: number) => void
  slideNextHTML?: string
  slidePrevHTML?: string
  touchSensitivity?: number
}

interface GLightboxApi {
  GLightbox: (options: GLightboxOptions) => void
}

const useGlightbox = () => {
  return useScriptNpm<GLightboxApi>({
    packageName: 'glightbox',
    file: 'dist/js/glightbox.min.js',
    version: '3.2.0',
    scriptOptions: {
      bundle: true,
      use() {
        return {
          GLightbox: window.GLightbox,
        }
      },
    },
  })
}

export default useGlightbox
