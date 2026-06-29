import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        aria-label="Back to top"
        size="medium"
        sx={{
          position: 'fixed',
          bottom: { xs: 146, sm: 150 },
          right: 24,
          zIndex: 1400,

          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(17,28,43,0.9)' : 'rgba(255,255,255,0.92)',
          color: 'primary.main',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.6)',

          '&:hover': {
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(17,28,43,1)' : '#fff',
            transform: 'translateY(-4px)',
          },
        }}
      >
        <ArrowUp size={20} />
      </Fab>
    </Zoom>
  )
}
