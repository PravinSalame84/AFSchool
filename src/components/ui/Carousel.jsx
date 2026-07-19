// import { useCallback, useEffect, useRef, useState } from 'react'
// import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
// import { Box, IconButton } from '@mui/material'

// export default function Carousel({ children, autoPlay = false, interval = 4000, ariaLabel = 'Carousel' }) {
//   const trackRef = useRef(null)
//   const [atStart, setAtStart] = useState(true)
//   const [atEnd, setAtEnd] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)

//   const updateEdges = useCallback(() => {
//     const el = trackRef.current
//     if (!el) return
//     setAtStart(el.scrollLeft <= 4)
//     setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
//   }, [])

//   const scrollByCard = useCallback((dir) => {
//     const el = trackRef.current
//     if (!el) return
//     const card = el.querySelector('[data-carousel-item]')
//     const styles = card ? window.getComputedStyle(card) : null
//     const cardGap = styles ? Number.parseFloat(styles.marginRight || '0') : 0
//     const distance = card ? card.offsetWidth + cardGap + 24 : el.clientWidth * 0.8
//     el.scrollBy({ left: dir * distance, behavior: 'smooth' })
//   }, [])

//   useEffect(() => {
//     const el = trackRef.current
//     if (!el) return
//     updateEdges()
//     el.addEventListener('scroll', updateEdges, { passive: true })
//     window.addEventListener('resize', updateEdges)
//     return () => {
//       el.removeEventListener('scroll', updateEdges)
//       window.removeEventListener('resize', updateEdges)
//     }
//   }, [updateEdges])

//   useEffect(() => {
//     if (!autoPlay) return
//     if (isPaused) return
//     const el = trackRef.current
//     if (!el) return
//     if (el.scrollWidth <= el.clientWidth + 4) return
//     const id = setInterval(() => {
//       const track = trackRef.current
//       if (!track) return
//       if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
//         track.scrollTo({ left: 0, behavior: 'smooth' })
//       } else {
//         scrollByCard(1)
//       }
//     }, interval)
//     return () => clearInterval(id)
//   }, [autoPlay, interval, isPaused, scrollByCard])

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         minWidth: 0,
//         maxWidth: '100%',
//         overflow: 'hidden',
//       }}
//       role="region"
//       aria-label={ariaLabel}
//     >
//       <Box
//         ref={trackRef}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         sx={{
//           width: '100%',
//           minWidth: 0,
//           maxWidth: '100%',
//           boxSizing: 'border-box',
//           display: 'flex',
//           gap: { xs: 2, sm: 3 },
//           overflowX: 'auto',
//           scrollBehavior: 'smooth',
//           scrollSnapType: 'x mandatory',
//           px: { xs: 0, sm: 0.25 },
//           pb: 0.75,
//           WebkitOverflowScrolling: 'touch',
//           scrollbarWidth: 'none',
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//         }}
//       >
//         {children}
//       </Box>

//       <Box sx={{ mt: 3, display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
//         <IconButton
//           aria-label="Previous"
//           disabled={atStart}
//           onClick={() => scrollByCard(-1)}
//           sx={{
//             width: { xs: 40, sm: 44 },
//             height: { xs: 40, sm: 44 },
//             border: '1px solid rgba(17,26,36,0.12)',
//             backgroundColor: '#ffffff',
//             '&:hover': {
//               backgroundColor: 'primary.main',
//               color: '#ffffff',
//             },
//           }}
//         >
//           <ChevronLeftRoundedIcon />
//         </IconButton>
//         <IconButton
//           aria-label="Next"
//           disabled={atEnd}
//           onClick={() => scrollByCard(1)}
//           sx={{
//             width: { xs: 40, sm: 44 },
//             height: { xs: 40, sm: 44 },
//             border: '1px solid rgba(17,26,36,0.12)',
//             backgroundColor: '#ffffff',
//             '&:hover': {
//               backgroundColor: 'primary.main',
//               color: '#ffffff',
//             },
//           }}
//         >
//           <ChevronRightRoundedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   )
// }
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

  const scrollByCard = useCallback((dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-carousel-item]')
    const styles = card ? window.getComputedStyle(card) : null
    const cardGap = styles ? Number.parseFloat(styles.marginRight || '0') : 0
    const distance = card ? card.offsetWidth + cardGap + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * distance, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  useEffect(() => {
    if (!autoPlay) return
    if (isPaused) return
    const el = trackRef.current
    if (!el) return
    if (el.scrollWidth <= el.clientWidth + 4) return
    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, interval)
    return () => clearInterval(id)
  }, [autoPlay, interval, isPaused, scrollByCard])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      role="region"
      aria-label={ariaLabel}
    >
      <Box
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          gap: { xs: 2, sm: 3 },
          overflowX: 'auto',
          overflowY: 'hidden',
          overscrollBehaviorX: 'contain',
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          px: { xs: 0, sm: 0.25 },
          pb: 0.75,
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '& > *': {
            flexShrink: 0,
            boxSizing: 'border-box',
            scrollSnapAlign: 'start',
          },
        }}
      >
        {children}
      </Box>

      <Box sx={{ mt: 3, display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
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