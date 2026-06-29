import { useEffect } from 'react'
import Box from '@mui/material/Box'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import BackToTopButton from './BackToTopButton'
import useHomeIntroScroll from '../../hooks/useHomeIntroScroll'
import useRuntimeContent from '../../hooks/useRuntimeContent'
import Maintenance from '../../pages/Maintenance'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const { content } = useRuntimeContent()
  useHomeIntroScroll(pathname)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  const maintenanceMode = content.siteStatus?.mode === 'maintenance' && pathname !== '/maintenance'

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: 'transparent' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, color: 'text.primary' }}>
        {maintenanceMode ? (
          <Maintenance
            title={content.siteStatus?.title}
            message={content.siteStatus?.message}
            updatedAt={content.siteStatus?.updatedAt}
          />
        ) : (
          <Outlet />
        )}
      </Box>
      <Footer />
      <FloatingButtons />
      <BackToTopButton />
    </Box>
  )
}
