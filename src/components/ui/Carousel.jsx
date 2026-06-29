import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ children, autoPlay = false, interval = 4000, ariaLabel = 'Carousel' }) {
  const trackRef = useRef(null)
  const frameRef = useRef(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  const scrollByCard = useCallback((dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-carousel-item]')
    const distance = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * distance, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateEdges()
    const onScroll = () => {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(updateEdges)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frameRef.current)
      el.removeEventListener('scroll', onScroll)
    }
  }, [updateEdges])

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => {
      if (document.hidden) return
      const el = trackRef.current
      if (!el) return
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, interval)
    return () => clearInterval(id)
  }, [autoPlay, interval, scrollByCard])

  return (
    <div className="relative" role="region" aria-label={ariaLabel}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-white via-white/72 to-transparent dark:from-primary-950 dark:via-primary-950/74 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-white via-white/72 to-transparent dark:from-primary-950 dark:via-primary-950/74 md:block" />
      <div
        ref={trackRef}
        className="no-scrollbar flex items-start gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-gradient-to-br from-white to-skyback-soft text-primary-900 transition disabled:opacity-30 hover:border-accent/40 hover:bg-gradient-to-br hover:from-secondary hover:to-primary-700 hover:text-white disabled:hover:from-white disabled:hover:to-skyback-soft disabled:hover:text-primary-900 dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-900 dark:to-secondary dark:text-skyback-light dark:hover:border-skyback/30 dark:hover:from-skyback-light dark:hover:to-white dark:hover:text-primary-950"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-gradient-to-br from-white to-skyback-soft text-primary-900 transition disabled:opacity-30 hover:border-accent/40 hover:bg-gradient-to-br hover:from-secondary hover:to-primary-700 hover:text-white disabled:hover:from-white disabled:hover:to-skyback-soft disabled:hover:text-primary-900 dark:border-white/10 dark:bg-gradient-to-br dark:from-primary-900 dark:to-secondary dark:text-skyback-light dark:hover:border-skyback/30 dark:hover:from-skyback-light dark:hover:to-white dark:hover:text-primary-950"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
