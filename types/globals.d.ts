declare module 'typer-dot-js'
interface Window {
  Headhesive: {
    new(element: HTMLElement | string, options: HeadhesiveOptions): Headhesive
  }
  scrollCue: ScrollCue
  Plyr: Plyr
  GLightbox: (options: GLightboxOptions) => void
}
