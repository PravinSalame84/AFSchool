import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ children, autoPlay = false, interval = 4000, ariaLabel = 'Carousel' }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-carousel-item]')
    const distance = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * distance, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    return () => el.removeEventListener('scroll', updateEdges)
  }, [updateEdges])

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, interval)
    return () => clearInterval(id)
  }, [autoPlay, interval])

  return (
    <div className="relative" role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-900 transition disabled:opacity-30 hover:bg-primary-900 hover:text-white disabled:hover:bg-white disabled:hover:text-primary-900"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-white text-primary-900 transition disabled:opacity-30 hover:bg-primary-900 hover:text-white disabled:hover:bg-white disabled:hover:text-primary-900"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
