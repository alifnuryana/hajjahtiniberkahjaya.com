declare module 'typer-dot-js'

declare module 'glightbox' {
  interface GLightboxOptions {
    selector?: string
    elements?: HTMLElement[]
    skin?: string
    openEffect?: string
    closeEffect?: string
    slideEffect?: string
    moreLength?: number
    moreText?: string
    loop: boolean
    zoomable: boolean
    autoplayVideos: boolean
    touchNavigation: boolean
    slideExtraAttributes: {
      poster: string
    }
    plyr: {
      css: string
      js: string
      config: {
        ratio: string
        fullscreen: {
          enabled: boolean
          iosNative: boolean
        }
        youtube: {
          noCookie: boolean
          rel: number
          showinfo: number
          iv_load_policy: number
        }
        vimeo: {
          byline: boolean
          portrait: boolean
          title: boolean
          transparent: boolean
        }
      }
      touchNavigation?: boolean
      loop?: boolean
      autoplayVideos?: boolean
      zoomable?: boolean
      draggable?: boolean
      videosWidth?: string
      videosHeight?: string
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
  }

  interface GLightbox {
    open(): void

    close(): void

    destroy(): void

    setElements(elements: HTMLElement[]): void

    getActiveSlide(): HTMLElement | null

    nextSlide(): void

    prevSlide(): void

    // on(event: string, callback: (...args: any[]) => void): void
    // off(event: string, callback?: (...args: any[]) => void): void
  }

  /**
     * Factory function to create a new GLightbox instance.
     * @param options Options for customizing the GLightbox instance.
     * @returns A new GLightbox instance.
     */
  function GLightbox(options?: GLightboxOptions): GLightbox

  export default GLightbox
}

interface Window {
  Headhesive: {
    new(element: HTMLElement | string, options: HeadhesiveOptions): Headhesive
  }
}
