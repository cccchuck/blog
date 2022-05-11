export class Animate {
  elementsQuery: string[]
  intersectionObserver: IntersectionObserver
  y: number
  down2up: boolean

  constructor(elementsQuery: string[]) {
    this.elementsQuery = elementsQuery
    this.intersectionObserver = this.createIntersectionObserver()
    this.y = 0
    this.down2up = true
  }

  createIntersectionObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            if (this.down2up) {
              entry.target.classList.add('slide-in-down')
              entry.target.classList.remove('slide-in-up')
            } else {
              entry.target.classList.add('slide-in-up')
              entry.target.classList.remove('slide-in-down')
            }
            entry.target.classList.remove('slide-out-down')
            entry.target.classList.remove('slide-out-up')
          } else {
            if (this.down2up) {
              entry.target.classList.add('slide-out-down')
              entry.target.classList.remove('slide-out-up')
            } else {
              entry.target.classList.add('slide-out-up')
              entry.target.classList.remove('slide-out-down')
            }
            entry.target.classList.remove('slide-in-down')
            entry.target.classList.remove('slide-in-up')
          }
        })
      },
      {
        rootMargin: '-10% 0px -10% 0px',
      }
    )
  }

  observe() {
    window.addEventListener('scroll', () => {
      const element: Element | null = document.querySelector(
        this.elementsQuery[0]
      )
      if (element) {
        const y = element.getBoundingClientRect().y
        if (y - this.y < 0) {
          this.down2up = true
        } else {
          this.down2up = false
        }
        this.y = y
      }
    })
    this.elementsQuery.forEach((elementQuery: string) => {
      const element: Element | null = document.querySelector(elementQuery)
      if (element) {
        this.intersectionObserver.observe(element)
      }
    })
  }

  unobserve(elementQuery: string) {
    const element: Element | null = document.querySelector(elementQuery)
    if (element) {
      this.intersectionObserver.unobserve(element)
    }
  }
}
