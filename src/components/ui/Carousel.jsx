import { useCallback, useEffect, useRef, useState } from 'react'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Box, IconButton } from '@mui/material'

export default function Carousel({ children, autoPlay = false, interval = 4000, ariaLabel = 'Carousel' }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

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
    if (isPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
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
  }, [autoPlay, interval, isPaused])

  return (
    <Box sx={{ position: 'relative' }} role="region" aria-label={ariaLabel}>
      <Box
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        sx={{
          display: 'flex',
          gap: { xs: 2, sm: 3 },
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          px: 0.25,
          pb: 0.75,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {children}
      </Box>

      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
        <IconButton
          aria-label="Previous"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
          sx={{
            width: { xs: 40, sm: 44 },
            height: { xs: 40, sm: 44 },
            border: '1px solid rgba(17,26,36,0.12)',
            backgroundColor: '#ffffff',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: '#ffffff',
            },
          }}
        >
          <ChevronLeftRoundedIcon />
        </IconButton>
        <IconButton
          aria-label="Next"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
          sx={{
            width: { xs: 40, sm: 44 },
            height: { xs: 40, sm: 44 },
            border: '1px solid rgba(17,26,36,0.12)',
            backgroundColor: '#ffffff',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: '#ffffff',
            },
          }}
        >
          <ChevronRightRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
