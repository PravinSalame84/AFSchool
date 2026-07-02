import {
  useEffect,
  useMemo,
  useState } from 'react'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'
import { Link } from 'react-router-dom'
import { motion,
  AnimatePresence,
  useReducedMotion } from 'framer-motion'
import { alpha } from '@mui/material/styles'
import {
  Box,
  Chip,
  Container,
  IconButton,
  Paper,
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
import { useLocale } from '../../context/LocaleContext'

const heroCopyVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const theme = useTheme()
  const { localize, t } = useLocale()
  const shouldReduceMotion = useReducedMotion()
  const { openEnquiry } = useEnquiryModal()
  const localizedSchoolContent = localize(schoolContent)
  const localizedSiteConfig = localize(siteConfig)
  const slides = localizedSchoolContent.hero.slides
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [slides.length])

  const activeSlide = slides[activeIndex]
  const stats = useMemo(() => localizedSchoolContent.facts.slice(0, 4), [localizedSchoolContent.facts])
  const heroCutouts = useMemo(
    () => [
      siteAssets.images.studentHeroSix,
      siteAssets.images.studentHeroNine,
      siteAssets.images.studentHeroEleven,
    ],
    [],
  )

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
        component={motion.div}
        animate={shouldReduceMotion ? undefined : { rotate: [0, 2, -2, 0], scale: [1, 1.02, 0.99, 1] }}
        transition={shouldReduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          background:
            'radial-gradient(circle at top right, rgba(240,147,75,0.18), transparent 24%), radial-gradient(circle at left, rgba(93,138,168,0.18), transparent 30%)',
        }}
      />
      <Box className="contour-lines" sx={{ opacity: theme.palette.mode === 'dark' ? 0.22 : 0.14 }} />

      <Container maxWidth="xl" className="hero-inner">
        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="center">
          <Grid item xs={12} lg={6} sx={{ position: 'relative' }}>
            <Box component={motion.div} className="hero-copy" variants={heroCopyVariants} initial="hidden" animate="show">
              <Typography
                component={motion.p}
                variant="overline"
                className="hero-eyebrow"
                variants={heroItemVariants}
                sx={{ color: 'secondary.main' }}
              >
                {localizedSchoolContent.hero.eyebrow}
              </Typography>

              <Typography
                component={motion.h1}
                className="hero-title"
                variants={heroItemVariants}
                sx={{ color: 'text.primary' }}
              >
                {localizedSchoolContent.hero.title}
              </Typography>

              <Typography
                component={motion.p}
                className="hero-subtitle"
                variants={heroItemVariants}
                sx={{ color: 'text.secondary' }}
              >
                {localizedSchoolContent.hero.subtitle}
              </Typography>

              <Stack component={motion.div} variants={heroItemVariants} className="hero-badges" direction="row" flexWrap="wrap">
                {localizedSchoolContent.hero.badges.map((badge) => (
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

              <Stack component={motion.div} variants={heroItemVariants} className="cta-stack-responsive" direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button size="lg" onClick={() => openEnquiry('General Enquiry')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                  {t('Start General Enquiry')}
                </Button>
                <Button size="lg" variant="outline" onClick={() => openEnquiry('School Details Request')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                  {t('Request School Details')}
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1.25}
                sx={{
                  mt: 2.25,
                  display: { xs: 'flex', lg: 'none' },
                  alignItems: 'flex-end',
                }}
              >
                {[siteAssets.images.studentHeroSix, siteAssets.images.studentHeroNine, siteAssets.images.studentHeroEleven].map((image, index) => (
                  <Box
                    component={motion.div}
                    key={image}
                    animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [index === 1 ? 0 : index === 0 ? -5 : 5, index === 1 ? 2 : index === 0 ? -8 : 8, index === 1 ? 0 : index === 0 ? -5 : 5] }}
                    transition={shouldReduceMotion ? undefined : { duration: 4.6 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`motion-float-soft ${index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : ''}`}
                    sx={{
                      width: index === 1 ? 64 : 56,
                      height: index === 1 ? 82 : 72,
                      filter: 'drop-shadow(0 14px 20px rgba(17, 26, 36, 0.18))',
                      transform: `rotate(${index === 1 ? 0 : index === 0 ? -5 : 5}deg)`,
                    }}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`Student cutout ${index + 1}`}
                      wrapperSx={{ height: '100%' }}
                      sx={{ height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                    />
                  </Box>
                ))}
              </Stack>

              <Box
                component={motion.div}
                variants={heroItemVariants}
                whileHover={shouldReduceMotion ? undefined : { rotate: -0.35, y: -4, scale: 1.01 }}
                sx={{
                  mt: 3,
                  p: { xs: 2, sm: 2.25 },
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.16 : 0.08)}`,
                  background:
                    theme.palette.mode === 'dark'
                      ? `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.78)}, ${alpha(theme.palette.primary.dark, 0.28)})`
                      : `linear-gradient(135deg, ${alpha('#fafdff', 0.96)}, ${alpha(theme.palette.sky.main, 0.6)})`,
                  boxShadow: '0 18px 40px rgba(17, 26, 36, 0.08)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'secondary.main',
                      }}
                    >
                      {t('Featured Moments')}
                    </Typography>
                    <Typography sx={{ mt: 0.8, fontSize: { xs: '1rem', sm: '1.08rem' }, fontWeight: 800, color: 'text.primary' }}>
                      {activeSlide.title}
                    </Typography>
                    <Typography sx={{ mt: 0.7, maxWidth: 560, fontSize: '0.94rem', lineHeight: 1.7, color: 'text.secondary' }}>
                      {activeSlide.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {slides.map((slide, index) => {
                      const isActive = index === activeIndex

                      return (
                        <Box
                          key={slide.id}
                          component="button"
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          aria-label={`${t('Featured Moments')} ${index + 1}: ${slide.label}`}
                          sx={{
                            minWidth: { xs: 68, sm: 78 },
                            px: 1.25,
                            py: 1,
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: isActive
                              ? 'secondary.main'
                              : alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.24 : 0.12),
                            background: isActive
                              ? `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.92)}, ${alpha(theme.palette.secondary.light, 0.9)})`
                              : theme.palette.mode === 'dark'
                                ? alpha(theme.palette.background.default, 0.36)
                                : alpha(brandColors.white, 0.72),
                            color: isActive
                              ? theme.palette.primary.dark
                              : theme.palette.text.primary,
                            boxShadow: isActive ? '0 14px 28px rgba(240, 147, 75, 0.24)' : 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              borderColor: isActive ? 'secondary.main' : 'primary.main',
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1 }}>
                            {String(index + 1).padStart(2, '0')}
                          </Typography>
                          <Typography sx={{ mt: 0.6, fontSize: '0.72rem', fontWeight: 700, lineHeight: 1.15 }}>
                            {slide.label}
                          </Typography>
                        </Box>
                      )
                    })}
                  </Stack>
                </Stack>
              </Box>

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
                        {t('Campus Location')}
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontSize: '0.92rem', color: 'text.secondary' }}>
                        {localizedSiteConfig.brandSuffix}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    component="a"
                    href={`tel:${localizedSiteConfig.contact.phone}`}
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
                        {t('Call Office')}
                      </Typography>
                      <Typography sx={{ mt: 0.4, fontSize: '0.92rem', color: 'text.secondary' }}>
                        {localizedSiteConfig.contact.phone}
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
              component={motion.div}
              className="surface-card hero-stage-frame motion-swivel-soft panel-spotlight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, rotate: 0.8, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.45, scale: 1.01 }}
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
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.14, rotate: -5, filter: 'blur(6px)' }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, rotate: 4, filter: 'blur(5px)' }}
                    transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
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
                    aria-label={t('Previous slide')}
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
                    aria-label={t('Next slide')}
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
                        aria-label={`Show hero slide ${index + 1}: ${slide.label}`}
                        sx={{
                          width: index === activeIndex ? 42 : 12,
                          height: 12,
                          borderRadius: 4,
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          bgcolor: index === activeIndex ? 'secondary.main' : alpha(brandColors.white, 0.34),
                          border: index === activeIndex ? `1px solid ${alpha(brandColors.white, 0.36)}` : `1px solid ${alpha(brandColors.white, 0.18)}`,
                          boxShadow: index === activeIndex ? '0 10px 22px rgba(240, 147, 75, 0.28)' : 'none',
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>

            <Paper
              component={motion.div}
              className="surface-card hero-stage-aside motion-hover-lift panel-spotlight"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 26, rotate: 0.6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, rotate: 0.35 }}
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

            <Box
              sx={{
                position: 'relative',
                display: { xs: 'none', lg: 'block' },
                pointerEvents: 'none',
                zIndex: 3,
              }}
            >
              <Box
                component={motion.div}
                sx={{
                  position: 'absolute',
                  top: -400,
                  right: -78,
                  width: 230,
                  height: 276,
                  transform: 'rotate(5deg)',
                  filter: 'drop-shadow(0 22px 34px rgba(17, 26, 36, 0.24))',
                }}
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [5, 8, 5] }}
                transition={shouldReduceMotion ? undefined : { duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <OptimizedImage
                  src={heroCutouts[0]}
                  alt="Student spotlight"
                  wrapperSx={{ height: '100%' }}
                  sx={{ height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                />
              </Box>

              <Box
                component={motion.div}
                sx={{
                  position: 'absolute',
                  top: -270,
                  left: -18,
                  width: 244,
                  height: 296,
                  transform: 'rotate(-5deg)',
                  filter: 'drop-shadow(0 22px 34px rgba(17, 26, 36, 0.28))',
                }}
                animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotate: [-5, -8, -5] }}
                transition={shouldReduceMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <OptimizedImage
                  src={heroCutouts[1]}
                  alt="Student cutout"
                  wrapperSx={{ height: '100%' }}
                  sx={{ height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                />
              </Box>

              <Paper
                component={motion.div}
                elevation={0}
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 1.2, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                sx={{
                  position: 'absolute',
                  top: -248,
                  right: 18,
                  width: 184,
                  p: 1.15,
                  borderRadius: 4,
                  border: `1px solid ${alpha(brandColors.white, 0.22)}`,
                  background: alpha('#fafdff', 0.92),
                  boxShadow: '0 18px 34px rgba(17, 26, 36, 0.18)',
                }}
              >
                <Stack direction="row" spacing={1.1} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 52,
                      overflow: 'hidden',
                      filter: 'drop-shadow(0 8px 14px rgba(17, 26, 36, 0.12))',
                    }}
                  >
                    <OptimizedImage
                      src={heroCutouts[2]}
                      alt="Learning spotlight"
                      wrapperSx={{ height: '100%' }}
                      sx={{ height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.16em', textTransform: 'uppercase', color: theme.palette.primary.main }}>
                      {t('Campus Life')}
                    </Typography>
                    <Typography sx={{ mt: 0.45, fontSize: '0.8rem', lineHeight: 1.35, fontWeight: 800, color: theme.palette.primary.dark }}>
                      {t('A Glimpse Into Campus Life')}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
