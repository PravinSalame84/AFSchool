import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element, and a boolean that flips to true
 * once the element enters the viewport. Used to drive scroll-reveal
 * animations (`.reveal` class) and to trigger count-up stats.
 */
export default function useOnScreen({ threshold = 0.2, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}
