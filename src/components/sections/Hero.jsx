import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { alpha } from '@mui/material/styles'
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { ChevronLeft, ChevronRight, MapPin, Phone } from 'lucide-react'
import Button from '../ui/Button'
import OptimizedImage from '../ui/OptimizedImage'
import schoolContent from '../../data/schoolContent'
import siteConfig from '../../data/siteConfig'
import siteAssets from '../../data/siteAssets'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { brandColors } from '../../theme/colorTokens'

export default function Hero() {
  const theme = useTheme()
  const { openEnquiry } = useEnquiryModal()
  const slides = schoolContent.hero.slides
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const activeSlide = slides[activeIndex]
  const stats = useMemo(() => schoolContent.facts.slice(0, 4), [])

  const navigateSlide = (direction) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <Box
      component="section"
      className="hero-shell"
      sx={{
        '--hero-card-border': alpha(theme.palette.primary.main, 0.1),
        '--hero-card-bg': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fafdff', 0.92),
        '--hero-card-bg-soft': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.58) : alpha('#fafdff', 0.82),
        '--hero-card-shadow-soft': '0 12px 28px rgba(17, 26, 36, 0.08)',
        '--hero-frame-bg': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.5) : alpha('#fafdff', 0.86),
        '--hero-frame-shadow': '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
        '--hero-aside-bg': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.92) : alpha('#fafdff', 0.96),
        '--hero-aside-shadow': '0 20px 40px rgba(17, 26, 36, 0.12)',
        '--hero-pill-bg': alpha('#fafdff', 0.9),
        '--hero-pill-shadow': '0 14px 32px rgba(17, 26, 36, 0.14)',
      }}
    >
      <Box
        className="hero-ambient"
        sx={{
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(8,14,22,0.98), rgba(17,28,43,0.9) 48%, rgba(11,19,32,0.95))'
              : 'linear-gradient(180deg, rgba(186,226,238,0.96), rgba(215,239,246,0.88) 48%, rgba(228,246,251,0.96))',
        }}
      />
      <Box
        className="hero-ambient-overlay"
        sx={{
          background:
            'radial-gradient(circle at top right, rgba(240,147,75,0.18), transparent 24%), radial-gradient(circle at left, rgba(93,138,168,0.18), transparent 30%)',
        }}
      />
      <Box className="contour-lines" sx={{ opacity: theme.palette.mode === 'dark' ? 0.22 : 0.14 }} />

      <Container maxWidth="xl" className="hero-inner">
        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box className="hero-copy">
              <Typography
                variant="overline"
                className="hero-eyebrow"
                sx={{ color: 'secondary.main' }}
              >
                {schoolContent.hero.eyebrow}
              </Typography>

              <Typography
                component="h1"
                className="hero-title"
                sx={{ color: 'text.primary' }}
              >
                {schoolContent.hero.title}
              </Typography>

              <Typography
                className="hero-subtitle"
                sx={{ color: 'text.secondary' }}
              >
                {schoolContent.hero.subtitle}
              </Typography>

              <Stack className="hero-badges" direction="row" flexWrap="wrap">
                {schoolContent.hero.badges.map((badge) => (
                  <Chip
                    key={badge}
                    label={badge}
                    className="hero-badge"
                    sx={{
                      color: 'text.primary',
                      bgcolor: theme.palette.mode === 'dark' ? alpha(brandColors.white, 0.08) : alpha(brandColors.white, 0.8),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    }}
                  />
                ))}
              </Stack>

              <Stack className="cta-stack-responsive" direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button size="lg" onClick={() => openEnquiry('General Enquiry')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                  Start General Enquiry
                </Button>
                <Button size="lg" variant="outline" onClick={() => openEnquiry('School Details Request')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                  Request School Details
                </Button>
              </Stack>

              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    component={Link}
                    to="/contact"
                    className="surface-card-soft hero-contact-card"
                    sx={{
                      color: 'text.primary',
                      '--surface-border-soft': alpha(theme.palette.primary.main, 0.1),
                      '--surface-bg-soft': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fafdff', 0.92),
                    }}
                  >
                    <MapPin size={18} color={theme.palette.secondary.main} />
                    <Box>
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                        Campus Location
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontSize: '0.92rem', color: 'text.secondary' }}>
                        {siteConfig.brandSuffix}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    component="a"
                    href={`tel:${siteConfig.contact.phone}`}
                    className="surface-card-soft hero-contact-card"
                    sx={{
                      color: 'text.primary',
                      '--surface-border-soft': alpha(theme.palette.primary.main, 0.1),
                      '--surface-bg-soft': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fafdff', 0.92),
                    }}
                  >
                    <Phone size={18} color={theme.palette.secondary.main} />
                    <Box>
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                        School Office
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontSize: '0.92rem', color: 'text.secondary' }}>
                        {siteConfig.contact.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {stats.map((fact) => (
                  <Grid item xs={6} sm={3} key={fact.label}>
                    <Box
                      className="surface-card-soft hero-stat-card"
                      sx={{
                        '--surface-border-soft': alpha(theme.palette.primary.main, 0.08),
                        '--surface-bg-soft': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.58) : alpha('#fafdff', 0.82),
                        '--surface-shadow-soft': '0 12px 28px rgba(17, 26, 36, 0.08)',
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      <Typography sx={{ fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'text.secondary' }}>
                        {fact.label}
                      </Typography>
                      <Typography sx={{ mt: 1, fontSize: { xs: '1.2rem', sm: '1.35rem' }, fontWeight: 800, color: 'text.primary' }}>
                        {fact.value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              className="surface-card hero-stage-frame"
              sx={{
                '--surface-border': alpha(theme.palette.primary.main, 0.1),
                '--surface-bg': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.5) : alpha('#fafdff', 0.86),
                '--surface-shadow': '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                '--surface-blur': '18px',
              }}
            >
              <Box className="hero-stage-media">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0.4, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.35, scale: 0.99 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <OptimizedImage
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      priority
                      wrapperSx={{ height: '100%' }}
                      sx={{ height: { xs: 300, sm: 400, lg: 520 } }}
                    />
                  </motion.div>
                </AnimatePresence>

                <Box
                  className="hero-stage-overlay"
                  sx={{
                    background:
                      'linear-gradient(180deg, rgba(17,26,36,0.08), rgba(17,26,36,0.24) 38%, rgba(17,26,36,0.88))',
                  }}
                />

                <Stack className="hero-nav-controls" direction="row" spacing={1}>
                  <IconButton
                    onClick={() => navigateSlide(-1)}
                    aria-label="Previous slide"
                    className="hero-nav-button"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: brandColors.white,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                    }}
                  >
                    <ChevronLeft size={18} />
                  </IconButton>
                  <IconButton
                    onClick={() => navigateSlide(1)}
                    aria-label="Next slide"
                    className="hero-nav-button"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: brandColors.white,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                    }}
                  >
                    <ChevronRight size={18} />
                  </IconButton>
                </Stack>

                <Box className="hero-stage-copy">
                  <Box
                    className="hero-stage-pill"
                    sx={{
                      bgcolor: alpha('#fafdff', 0.9),
                      color: theme.palette.primary.main,
                      boxShadow: '0 14px 32px rgba(17, 26, 36, 0.14)',
                    }}
                  >
                    <Box
                      className="hero-stage-avatar"
                      sx={{
                        border: `2px solid ${alpha(brandColors.white, 0.9)}`,
                      }}
                    >
                      <OptimizedImage
                        src={siteAssets.images.studentGroupFun}
                        alt="Air Force School students"
                        wrapperSx={{ height: '100%' }}
                        sx={{ height: 38 }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'normal' }}>
                      Learning with discipline, warmth and confidence.
                    </Typography>
                  </Box>
                  <Chip
                    label={activeSlide.label}
                    className="hero-slide-label"
                    sx={{
                      color: brandColors.white,
                      bgcolor: 'rgba(255,255,255,0.14)',
                      border: '1px solid rgba(255,255,255,0.16)',
                    }}
                  />
                  <Typography className="hero-slide-title" sx={{ color: brandColors.white }}>
                    {activeSlide.title}
                  </Typography>
                  <Typography className="hero-slide-motto" sx={{ color: alpha(brandColors.white, 0.8) }}>
                    {schoolContent.hero.motto}
                  </Typography>

                  <Stack className="hero-slide-dots" direction="row" spacing={1}>
                    {slides.map((slide, index) => (
                      <Box
                        key={slide.id}
                        onClick={() => setActiveIndex(index)}
                        sx={{
                          width: index === activeIndex ? 34 : 10,
                          height: 10,
                          borderRadius: 4,
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          bgcolor: index === activeIndex ? 'secondary.main' : alpha(brandColors.white, 0.4),
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>

            <Paper
              className="surface-card hero-stage-aside"
              sx={{
                '--surface-border': alpha(theme.palette.primary.main, 0.08),
                '--surface-bg': theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.92) : alpha('#fafdff', 0.96),
                '--surface-shadow': '0 20px 40px rgba(17, 26, 36, 0.12)',
              }}
            >
              <Stack className="hero-stage-aside-stack" direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <OptimizedImage
                  src={siteAssets.images.studentClassPhoto}
                  alt="Students at Air Force School"
                  wrapperSx={{ width: { xs: '100%', sm: 86 } }}
                  className="hero-stage-aside-media"
                  sx={{ width: { xs: '100%', sm: 86 }, height: { xs: 160, sm: 86 }, borderRadius: 4 }}
                />
                <Box>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'secondary.main' }}>
                    School Promise
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.6, fontWeight: 800, lineHeight: 1.2 }}>
                    Strong values and future-ready learning for every child.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
