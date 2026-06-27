import { useEffect } from 'react'

const STORAGE_KEY = 'afs-home-intro-scroll-v1'

function easeOutBack(progress) {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2)
}

export default function useHomeIntroScroll(pathname) {
  useEffect(() => {
    if (pathname !== '/' || typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.localStorage.getItem(STORAGE_KEY) === 'done') return

    let frameId = 0
    let timeoutId = 0

    const runAnimation = () => {
      const start = performance.now()
      const duration = 1050
      const peak = Math.min(window.innerHeight * 0.22, 150)

      const tick = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)

        let nextY = 0

        if (progress < 0.48) {
          nextY = peak * easeOutBack(progress / 0.48)
        } else {
          const reverseProgress = (progress - 0.48) / 0.52
          nextY = peak * (1 - easeOutBack(reverseProgress))
        }

        window.scrollTo({ top: Math.max(0, nextY), left: 0, behavior: 'auto' })

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick)
          return
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        window.localStorage.setItem(STORAGE_KEY, 'done')
      }

      frameId = window.requestAnimationFrame(tick)
    }

    timeoutId = window.setTimeout(runAnimation, 280)

    return () => {
      window.clearTimeout(timeoutId)
      window.cancelAnimationFrame(frameId)
    }
  }, [pathname])
}
