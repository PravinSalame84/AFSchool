import { useCallback, useEffect, useRef, useState } from 'react'
import { alpha } from '@mui/material/styles'
import { useLocale } from '../../context/LocaleContext'
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({
  children,
  autoPlay = false,
  interval = 4000,
  ariaLabel = 'Carousel',
}) {
  const theme = useTheme()
  const { t } = useLocale()
  const prefersReducedMotion = useReducedMotion()
  const canAutoPlayOnViewport = useMediaQuery(theme.breakpoints.up('md'))
  const trackRef = useRef(null)
  const frameRef = useRef(0)
  const sectionRef = useRef(null)

  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const itemCount = Array.isArray(children) ? children.length : 1
  const shouldAutoPlay = autoPlay && itemCount > 1 && canAutoPlayOnViewport && !prefersReducedMotion && isVisible

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)

    const cards = Array.from(el.querySelectorAll('[data-carousel-item]'))
    if (!cards.length) return

    const closestIndex = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - el.scrollLeft)
        return distance < best.distance ? { index, distance } : best
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index

    setActiveIndex(closestIndex)
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
    if (!('IntersectionObserver' in window)) return undefined

    const el = sectionRef.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldAutoPlay) return

    const id = setInterval(() => {
      if (document.hidden) return

      const el = trackRef.current
      if (!el) return

      const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4

      if (isEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, interval)

    return () => clearInterval(id)
  }, [interval, scrollByCard, shouldAutoPlay])

  return (
    <Box ref={sectionRef} component="section" role="region" aria-label={ariaLabel} sx={{ position: 'relative', minWidth: 0 }}>
      {/* Left fade */}
      <Box
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 48,
          zIndex: 10,
          display: { xs: 'none', md: 'block' },
          // background:
          //   'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent)',
          // '.dark &': {
          //   background:
          //     'linear-gradient(to right, #0b1220, rgba(11,18,32,0.7), transparent)',
          // },
        }}
      />

      {/* Right fade */}
      <Box
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 48,
          zIndex: 10,
          display: { xs: 'none', md: 'block' },
          // background:
          //   'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0.7), transparent)',
          // '.dark &': {
          //   background:
          //     'linear-gradient(to left, #0b1220, rgba(11,18,32,0.7), transparent)',
          // },
        }}
      />

      {/* Track */}
      <Box sx={{ overflow: 'hidden', minWidth: 0 }}>
        <Box
          ref={trackRef}
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            scrollPaddingInline: { xs: 4, sm: 8 },
            pb: 1,
            pr: { xs: 0.5, sm: 1 },
            minWidth: 0,
            scrollbarWidth: 'thin',
            scrollbarColor: `${alpha(theme.palette.primary.main, 0.3)} transparent`,
            '&::-webkit-scrollbar': {
              height: 7,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: alpha(theme.palette.primary.main, 0.26),
              borderRadius: 999,
            },
            '& > *': {
              scrollSnapAlign: 'start',
            },
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Controls */}
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <IconButton
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label={t('Previous')}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
            '&.Mui-disabled': { opacity: 0.3 },
          }}
        >
          <ChevronLeft size={20} />
        </IconButton>

        {itemCount > 1 ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {Array.from({ length: itemCount }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: index === activeIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  transition: 'all 0.2s ease',
                  bgcolor:
                    index === activeIndex
                      ? theme.palette.secondary.main
                      : alpha(theme.palette.primary.main, 0.18),
                }}
              />
            ))}
          </Box>
        ) : null}

        <IconButton
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label={t('Next')}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
            '&.Mui-disabled': { opacity: 0.3 },
          }}
        >
          <ChevronRight size={20} />
        </IconButton>
      </Box>
    </Box>
  )
}
