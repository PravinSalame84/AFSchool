import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import { BRAND_NEUTRALS, PAGE_BACKGROUND_SEQUENCE } from '../../constants/brand'

const PAGE_BACKGROUND_INDEX = Object.freeze({
  '/': 0,
  '/about': 1,
  '/why-us': 0,
  '/admissions': 1,
  '/locations': 0,
  '/blog': 1,
  '/alumni': 0,
  '/careers': 1,
  '/contact': 0,
  '/privacy-policy': 1,
  '/terms': 0,
})

function getHeaderOffset(width) {
  if (width >= 1200) return 156
  if (width >= 600) return 116
  return 100
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  const pageBaseBackground =
    PAGE_BACKGROUND_SEQUENCE[PAGE_BACKGROUND_INDEX[pathname] ?? 0]

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          const headerOffset = getHeaderOffset(window.innerWidth)
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
          window.scrollTo({ top, behavior: 'smooth' })
        }, 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', bgcolor: BRAND_NEUTRALS.page }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          '--page-base-bg': pageBaseBackground,
          bgcolor: 'var(--page-base-bg)',
          pt: { xs: '92px', sm: '108px', lg: '148px' },
          animation: 'pageEnter 420ms cubic-bezier(0.22, 1, 0.36, 1)',
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
      <FloatingButtons />
    </Box>
  )
}
