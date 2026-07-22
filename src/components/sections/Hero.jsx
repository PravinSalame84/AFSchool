import { useEffect, useState } from 'react'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { sharedImages, studentImages } from '../../assets/images'
import schoolContent from '../../data/schoolContent'
import siteConfig from '../../data/siteConfig'
import OptimizedImage from '../ui/OptimizedImage'
import { BRAND_ALPHA, BRAND_NEUTRALS, BRAND_SHADOWS } from '../../constants/brand'
import {
  HERO_BADGE_CHIP_SX,
  HERO_PRIMARY_BUTTON_SX,
  HERO_SECONDARY_BUTTON_SX,
  HERO_STAT_PANEL_SX,
} from '../../constants/uiStyles'

const heroCutouts = [
  {
    src: sharedImages.afsCutoutGroup,
    alt: 'Air Force School student with books',
    sx: {
      right: { xs: '50%', lg: '2%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 400, sm: 420, md: 480, lg: 560, xl: 760 },
      zIndex: 2,
      bottom: -25,
    },
  },
  {
    src: studentImages[14],
    alt: 'Air Force School classroom hero visual',
    sx: {
      right: { xs: '50%', lg: '5%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 300, sm: 380, md: 430, lg: 560, xl: 680 },
      zIndex: 2,
      bottom: -25,
    },
  },
  {
    src: studentImages[8],
    alt: 'Air Force School teacher with students',
    sx: {
      right: { xs: '50%', lg: '6%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 250, sm: 290, md: 380, lg: 450, xl: 510 },
      zIndex: 2,
      bottom: -25,
    },
  },
  {
    src: studentImages[7],
    alt: 'Air Force School mentor visual',
    sx: {
      right: { xs: '50%', lg: '7%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 250, sm: 285, md: 380, lg: 460, xl: 520 },
      zIndex: 2,
      bottom: -25,
    },
  },
]

export default function Hero() {
  const [activeCutout, setActiveCutout] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || heroCutouts.length <= 1) return undefined

    const interval = window.setInterval(() => {
      setActiveCutout((current) => (current + 1) % heroCutouts.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        mx: { xs: 0, md: 0.5 },
        minHeight: { xs: 600, sm: 700, md: 760, xl: 820 },
        overflow: 'clip',
        borderBottomLeftRadius: { xs: 18, md: 30 },
        borderBottomRightRadius: { xs: 18, md: 30 },
        background:
          'radial-gradient(circle at top left, rgba(255,214,121,0.45), transparent 24%), radial-gradient(circle at top right, rgba(160,226,255,0.32), transparent 24%), radial-gradient(circle at bottom left, rgba(184,241,176,0.18), transparent 22%), linear-gradient(135deg, #fff5df 0%, #fffdf6 54%, #ecf8ff 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* <Box
        sx={{
          position: 'absolute',
          top: { xs: 84, md: 96 },
          left: { xs: -30, md: 18 },
          width: { xs: 120, md: 160 },
          height: { xs: 120, md: 160 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,186,64,0.95) 0%, rgba(255,214,121,0.7) 58%, rgba(255,214,121,0) 60%)',
          filter: 'drop-shadow(0 8px 18px rgba(255,178,44,0.28))',
          opacity: 0.9,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 'auto 0 0 0',
          height: { xs: 92, sm: 120, md: 138 },
          background:
            'radial-gradient(circle at 8% 100%, #ffffff 0 54px, transparent 55px), radial-gradient(circle at 22% 100%, #ffffff 0 72px, transparent 73px), radial-gradient(circle at 38% 100%, #ffffff 0 60px, transparent 61px), radial-gradient(circle at 56% 100%, #ffffff 0 78px, transparent 79px), radial-gradient(circle at 74% 100%, #ffffff 0 66px, transparent 67px), radial-gradient(circle at 92% 100%, #ffffff 0 72px, transparent 73px)',
          opacity: 0.96,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      /> */}
      <Container maxWidth={false} sx={{ px: { xs: 1.5, sm: 3, md: 6, lg: 10, xl: 14 }, minWidth: 0 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.95fr 1.05fr' },
            alignItems: 'center',
            minHeight: { xs: 600, sm: 700, md: 760, xl: 820 },
            gap: { xs: 2.5, sm: 2.5, lg: 0 },
          }}
        >
          <Box sx={{ pt: { xs: 6, sm: 8, md: 13 }, pb: { xs: 2, sm: 2, lg: 6 }, maxWidth: { xs: '100%', lg: 760 }, textAlign: { xs: 'center', lg: 'left' }, minWidth: 0 }}>
            <Typography
              sx={{
                color: 'secondary.dark',
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                fontWeight: 800,
                letterSpacing: { xs: '0.14em', sm: '0.24em' },
                textTransform: 'uppercase',
              }}
            >
              {schoolContent.hero.eyebrow}
            </Typography>
            <Typography
              sx={{
                maxWidth: 700,
                color: 'primary.main',
                mx: { xs: 'auto', lg: 0 },
                mt: 1.5,
                fontSize: { xs: '1.72rem', sm: '2.55rem', md: '4rem', xl: '5rem' },
                lineHeight: { xs: 1.1, sm: 1, md: 0.95 },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                textWrap: 'balance',
              }}
            >
              {schoolContent.hero.title}
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                maxWidth: 620,
                mx: { xs: 'auto', lg: 0 },
                color: 'text.secondary',
                fontSize: { xs: '0.88rem', sm: '1rem', md: '1.05rem' },
                lineHeight: { xs: 1.7, sm: 1.8 },
              }}
            >
              {schoolContent.hero.subtitle}
            </Typography>

            <Stack
              direction="row"
              useFlexGap
              spacing={1.2}
              sx={{ mt: 3, flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'flex-start' } }}
            >
              
              {schoolContent.hero.badges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  sx={{
                    height: { xs: 32, sm: 34 },
                    ...HERO_BADGE_CHIP_SX,
                    backgroundColor: 'rgba(255,255,255,0.82)',
                    color: 'primary.main',
                    border: '1px solid rgba(255,178,44,0.22)',
                    fontSize: { xs: '0.75rem', sm: '0.82rem' },
                    fontWeight: 700,
                    maxWidth: '100%',
                    '& .MuiChip-label': {
                      px: { xs: 1.1, sm: 1.5 },
                      whiteSpace: 'normal',
                    },
                  }}
                />
              ))}
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.75}
              sx={{ mt: { xs: 3.5, md: 5 }, justifyContent: { xs: 'center', lg: 'flex-start' } }}
            >
              <Button
                component={Link}
                to="/admissions"
                variant="contained"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { xs: '100%', sm: 250, md: 320 },
                  maxWidth: { xs: '100%', sm: 'none' },
                  px: { xs: 2.2, sm: 3.5 },
                  py: { xs: 1.4, md: 1.8 },
                  borderRadius: '0.95rem',
                  ...HERO_PRIMARY_BUTTON_SX,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                  fontWeight: 700,
                  textTransform: 'none',
                }}
              >
                Admissions Open for AY 2026-27
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: { xs: '100%', sm: 210 },
                  maxWidth: { xs: '100%', sm: 'none' },
                  px: 3.25,
                  py: 1.55,
                  ...HERO_SECONDARY_BUTTON_SX,
                  ...HERO_PRIMARY_BUTTON_SX,
                  color: 'primary.dark',
                  borderColor: 'rgba(28,59,82,0.18)',
                  backgroundColor: 'rgba(255,255,255,0.62)',
                }}
              >
                Contact School Office
              </Button>
            </Stack>

            <Box
              sx={{
                mt: { xs: 4, md: 5 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                gap: 1.5,
                maxWidth: { xs: '100%', sm: 560 },
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              {schoolContent.facts.slice(0, 3).map((fact) => (
                <PaperStat key={fact.label} label={fact.label} value={fact.value} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 200, sm: 320, md: 520, lg: 720, xl: 820 },
              mt: { xs: 1, lg: 0 },
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: { xs: '10% 0 0 0', lg: '8% 0 0 8%' },
                background: 'radial-gradient(circle at center, rgba(255,194,83,0.22), rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.02) 68%)',
                filter: 'blur(10px)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 12, lg: 110 },
                right: { xs: 18, lg: 48 },
                px: 1.25,
                py: 0.9,
                borderRadius: '1rem 1rem 1rem 0.25rem',
                background: 'linear-gradient(135deg, #1a6a8d 0%, #0f405e 100%)',
                color: BRAND_NEUTRALS.white,
                boxShadow: BRAND_SHADOWS.float,
                transform: 'rotate(-6deg)',
                zIndex: 4,
              }}
            >
              <Typography sx={{ fontSize: '0.74rem', fontWeight: 800, lineHeight: 1.2 }}>
                2026
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1.2 }}>
                Admissions Open
              </Typography>
            </Box>

            {heroCutouts.map((item, index) => (
              <OptimizedImage
                key={`${item.src}-${index}`}
                src={item.src}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : undefined}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  maxWidth: '100%',
                  height: 'auto',
                  opacity: activeCutout === index ? 1 : 0,
                  transition: 'opacity 900ms ease, transform 900ms ease',
                  filter: activeCutout === index ? 'drop-shadow(0 24px 36px rgba(17,26,36,0.14))' : 'drop-shadow(0 12px 18px rgba(17,26,36,0.08))',
                  willChange: 'opacity, transform',
                  ...item.sx,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function PaperStat({ label, value }) {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.6,
        borderRadius: '1.3rem',
        ...HERO_STAT_PANEL_SX,
        backgroundColor: 'rgba(255,255,255,0.78)',
        border: '1px solid rgba(255,196,72,0.2)',
      }}
    >
      <Typography sx={{ color: 'primary.main', fontSize: { xs: '1rem', sm: '1.15rem' }, fontWeight: 800 }}>
        {value}
      </Typography>
      <Typography sx={{ mt: 0.35, color: 'text.secondary', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
    </Box>
  )
}
