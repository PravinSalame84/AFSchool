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
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 7 },
        pb: { xs: 7, md: 9 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(8,14,22,0.98), rgba(17,28,43,0.9) 48%, rgba(11,19,32,0.95))'
              : 'linear-gradient(180deg, rgba(186,226,238,0.96), rgba(215,239,246,0.88) 48%, rgba(228,246,251,0.96))',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at top right, rgba(240,147,75,0.18), transparent 24%), radial-gradient(circle at left, rgba(93,138,168,0.18), transparent 30%)',
        }}
      />
      <Box className="contour-lines" sx={{ opacity: theme.palette.mode === 'dark' ? 0.22 : 0.14 }} />

      <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ maxWidth: 720 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 800,
                  letterSpacing: '0.28em',
                }}
              >
                {schoolContent.hero.eyebrow}
              </Typography>

              <Typography
                component="h1"
                sx={{
                  mt: 1.5,
                  color: 'text.primary',
                  fontWeight: 800,
                  lineHeight: 0.92,
                  fontSize: { xs: '2.5rem', sm: '3.3rem', lg: '4.25rem' },
                }}
              >
                {schoolContent.hero.title}
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 640,
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.05rem' },
                  lineHeight: 1.85,
                }}
              >
                {schoolContent.hero.subtitle}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 3 }}>
                {schoolContent.hero.badges.map((badge) => (
                  <Chip
                    key={badge}
                    label={badge}
                    sx={{
                      borderRadius: 4,
                      color: 'text.primary',
                      bgcolor: theme.palette.mode === 'dark' ? alpha('#fff', 0.08) : alpha('#fff', 0.8),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  />
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
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
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      p: 2,
                      borderRadius: 4,
                      textDecoration: 'none',
                      color: 'text.primary',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fafdff', 0.92),
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
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      p: 2,
                      borderRadius: 4,
                      textDecoration: 'none',
                      color: 'text.primary',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha('#fafdff', 0.92),
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
                      sx={{
                        p: 2,
                        borderRadius: '1.4rem',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                        bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.58) : alpha('#fafdff', 0.82),
                        boxShadow: '0 12px 28px rgba(17, 26, 36, 0.08)',
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
              sx={{
                position: 'relative',
                borderRadius: 4,
                p: { xs: 1.5, md: 2 },
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.5) : alpha('#fafdff', 0.86),
                boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, minHeight: { xs: 360, sm: 460, lg: 560 } }}>
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
                      sx={{ height: { xs: 360, sm: 460, lg: 560 } }}
                    />
                  </motion.div>
                </AnimatePresence>

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(17,26,36,0.08), rgba(17,26,36,0.24) 38%, rgba(17,26,36,0.88))',
                  }}
                />

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                >
                  <IconButton
                    onClick={() => navigateSlide(-1)}
                    aria-label="Previous slide"
                    sx={{
                      width: 42,
                      height: 42,
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: '#fff',
                      backdropFilter: 'blur(12px)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                    }}
                  >
                    <ChevronLeft size={18} />
                  </IconButton>
                  <IconButton
                    onClick={() => navigateSlide(1)}
                    aria-label="Next slide"
                    sx={{
                      width: 42,
                      height: 42,
                      bgcolor: 'rgba(255,255,255,0.14)',
                      color: '#fff',
                      backdropFilter: 'blur(12px)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                    }}
                  >
                    <ChevronRight size={18} />
                  </IconButton>
                </Stack>

                <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: { xs: 2.5, sm: 3 } }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1.25,
                      borderRadius: 4,
                      bgcolor: alpha('#fafdff', 0.9),
                      px: 1.2,
                      py: 0.8,
                      color: theme.palette.primary.main,
                      boxShadow: '0 14px 32px rgba(17, 26, 36, 0.14)',
                      maxWidth: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        overflow: 'hidden',
                        borderRadius: '25%',
                        border: `2px solid ${alpha('#fff', 0.9)}`,
                        flexShrink: 0,
                      }}
                    >
                      <OptimizedImage
                        src={siteAssets.images.studentGroupFun}
                        alt="Air Force School students"
                        wrapperSx={{ height: '100%' }}
                        sx={{ height: 38 }}
                      />
                    </Box>
                    <Typography sx={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'normal' }}>
                      Learning with discipline, warmth and confidence.
                    </Typography>
                  </Box>
                  <Chip
                    label={activeSlide.label}
                    sx={{
                      borderRadius: 4,
                      color: '#fff',
                      bgcolor: 'rgba(255,255,255,0.14)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      letterSpacing: '0.16em',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  />
                  <Typography sx={{ mt: 2, color: '#fff', fontWeight: 800, lineHeight: 1, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>
                    {activeSlide.title}
                  </Typography>
                  <Typography sx={{ mt: 1.5, maxWidth: 520, color: alpha('#fff', 0.8), fontSize: '0.95rem', lineHeight: 1.8 }}>
                    {schoolContent.hero.motto}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
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
                          bgcolor: index === activeIndex ? 'secondary.main' : alpha('#fff', 0.4),
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>

            <Paper
              sx={{
                mt: { xs: 2, md: -6 },
                ml: { md: 'auto' },
                width: { xs: '100%', sm: 340 },
                maxWidth: '100%',
                p: 1.25,
                borderRadius: 4,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.92) : alpha('#fafdff', 0.96),
                boxShadow: '0 20px 40px rgba(17, 26, 36, 0.12)',
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <OptimizedImage
                  src={siteAssets.images.studentClassPhoto}
                  alt="Students at Air Force School"
                  wrapperSx={{ width: { xs: '100%', sm: 86 }, flexShrink: 0, borderRadius: 4 }}
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
