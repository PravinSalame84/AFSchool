import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import AnnouncementBar from './AnnouncementBar'
import TopBar from './TopBar'
import Navbar from './Navbar'

export default function Header() {
  const theme = useTheme()
  const isDesktopHeader = useMediaQuery(theme.breakpoints.up('lg'))
  const [compact, setCompact] = useState(false)
  const compactRef = useRef(false)
  const lockUntilRef = useRef(0)

  useEffect(() => {
    if (!isDesktopHeader) {
      compactRef.current = false
      lockUntilRef.current = 0
      setCompact(false)
      return undefined
    }

    let lastY = window.scrollY
    let ticking = false

    const showThreshold = 18
    const hideThreshold = 96
    const deltaThreshold = 12
    const stateChangeLockMs = 360

    const syncCompactState = (nextCompact) => {
      if (compactRef.current === nextCompact) return
      compactRef.current = nextCompact
      lockUntilRef.current = window.performance.now() + stateChangeLockMs
      setCompact(nextCompact)
    }

    const updateHeaderState = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY
      const now = window.performance.now()

      if (now < lockUntilRef.current) {
        lastY = currentY
        ticking = false
        return
      }

      if (Math.abs(delta) < deltaThreshold) {
        lastY = currentY
        ticking = false
        return
      }

      if (currentY <= showThreshold) {
        syncCompactState(false)
      } else if (delta > 0 && currentY >= hideThreshold) {
        syncCompactState(true)
      } else if (delta < 0) {
        syncCompactState(false)
      }

      lastY = currentY
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateHeaderState)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDesktopHeader])

  return (
    <Box component="header" sx={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <AnnouncementBar compact={isDesktopHeader ? compact : false} />
      <TopBar compact={isDesktopHeader ? compact : false} />
      <Navbar compact={isDesktopHeader ? compact : false} />
    </Box>
  )
}
