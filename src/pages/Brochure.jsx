import { useEffect, useMemo, useRef, useState } from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import {
  Box,
  Button,
  Chip,
  GlobalStyles,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import OptimizedImage from '../components/ui/OptimizedImage'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import brochurePages, { brochureOverview } from '../data/brochureContent'
import appContent from '../data/appContent'
import { BRAND_ALPHA, BRAND_NEUTRALS, BRAND_SHADOWS } from '../constants/brand'

function chunkPages(pages, size) {
  const groups = []

  for (let index = 0; index < pages.length; index += size) {
    groups.push(pages.slice(index, index + size))
  }

  return groups
}

function PageCard({ page, pageNumber, compact = false }) {
  return (
    <Paper
      sx={{
        position: 'relative',
        display: 'flex',
        height: '100%',
        minHeight: { xs: 500, sm: 560, lg: compact ? 620 : 680 },
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '1.8rem',
        border: `1px solid ${page.dark ? BRAND_ALPHA.white12 : BRAND_ALPHA.ink08}`,
        background: page.accent,
        color: page.dark ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.ink,
        boxShadow: BRAND_SHADOWS.xl,
        '@media print': {
          minHeight: '277mm',
          borderRadius: 0,
          border: `1px solid ${BRAND_ALPHA.ink08}`,
          boxShadow: 'none',
          breakInside: 'avoid',
          pageBreakInside: 'avoid',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -40,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: page.dark ? BRAND_ALPHA.accent18 : BRAND_ALPHA.sky75,
          filter: 'blur(24px)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr', minHeight: '100%', height: '100%' }}>
        <Box
          sx={{
            p: { xs: 2.2, sm: 2.8, lg: 3.2 },
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            height: '100%',
            flex: 1,
            '@media print': {
              p: '12mm',
            },
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1.5}>
            <Typography
              sx={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: page.dark ? BRAND_ALPHA.white68 : 'secondary.dark',
              }}
            >
              {page.eyebrow}
            </Typography>
            <Chip
              label={`${String(pageNumber).padStart(2, '0')}`}
              size="small"
              sx={{
                bgcolor: page.dark ? BRAND_ALPHA.white12 : BRAND_ALPHA.white72,
                color: page.dark ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.ink,
                fontWeight: 800,
              }}
            />
          </Stack>

          <Typography
            sx={{
              mt: 1.4,
              maxWidth: 560,
              fontSize: { xs: '1.6rem', sm: '2rem', lg: compact ? '2.1rem' : '2.35rem' },
              fontWeight: 800,
              lineHeight: 1.02,
              textWrap: 'balance',
            }}
          >
            {page.title}
          </Typography>

          {page.subtitle ? (
            <Typography
              sx={{
                mt: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: page.dark ? BRAND_ALPHA.white72 : BRAND_NEUTRALS.slateSoft,
              }}
            >
              {page.subtitle}
            </Typography>
          ) : null}

          <Typography
            sx={{
              mt: 2,
              color: page.dark ? BRAND_ALPHA.white86 : BRAND_NEUTRALS.inkMuted,
              fontSize: { xs: '0.94rem', sm: '0.98rem' },
              lineHeight: 1.75,
            }}
          >
            {page.narrative}
          </Typography>

          {page.supporting ? (
            <Typography
              sx={{
                mt: 1.25,
                color: page.dark ? BRAND_ALPHA.white72 : BRAND_NEUTRALS.slateSoft,
                fontSize: '0.88rem',
                lineHeight: 1.72,
              }}
            >
              {page.supporting}
            </Typography>
          ) : null}

          <Box
            sx={{
              mt: 2.2,
              display: 'flex',
              alignItems: 'stretch',
              borderRadius: '1.4rem',
              overflow: 'hidden',
              flexDirection: 'row',
              minHeight: { xs: 220, sm: 250, lg: 280 },
              flex: 1,
              boxShadow: BRAND_SHADOWS.md,
              '@media print': {
                minHeight: '105mm',
                boxShadow: 'none',
              },
            }}
          >
            <OptimizedImage
              src={page.image}
              alt={page.title}
              sx={{
                width: '100%',
                height: '100%',
                minHeight: { xs: 220, sm: 250, lg: 280 },
                flex: 1,
                objectFit: 'cover',
                objectPosition: 'center top',
                '@media print': {
                  minHeight: '105mm',
                },
              }}
            />
          </Box>

          {page.stats?.length ? (
            <Box
              sx={{
                mt: 2.1,
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(4, minmax(0, 1fr))' },
                gap: 1.1,
              }}
            >
              {page.stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    p: 1.35,
                    borderRadius: '1.1rem',
                    bgcolor: page.dark ? BRAND_ALPHA.white08 : BRAND_ALPHA.white58,
                    border: `1px solid ${page.dark ? BRAND_ALPHA.white14 : BRAND_ALPHA.white48}`,
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <Typography sx={{ fontSize: '1rem', fontWeight: 800 }}>{stat.value}</Typography>
                  <Typography sx={{ mt: 0.25, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: page.dark ? BRAND_ALPHA.white68 : BRAND_NEUTRALS.slateSoft }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}

          {page.quote ? (
            <Box
              sx={{
                mt: 2.1,
                p: 1.75,
                borderRadius: '1.25rem',
                bgcolor: page.dark ? BRAND_ALPHA.white08 : BRAND_ALPHA.white58,
                border: `1px solid ${page.dark ? BRAND_ALPHA.white16 : BRAND_ALPHA.white48}`,
              }}
            >
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: page.dark ? BRAND_ALPHA.white65 : 'secondary.dark' }}>
                School Motto
              </Typography>
              <Typography sx={{ mt: 0.7, fontSize: { xs: '1.05rem', sm: '1.15rem' }, fontWeight: 700 }}>
                {page.quote}
              </Typography>
            </Box>
          ) : null}
         
          {page.people?.length ? (
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 2.1, alignItems: 'flex-start' }}>
              {page.people.map((person) => (
                <Chip
                  key={person}
                  label={person}
                  sx={{
                    alignItems: 'flex-start',
                    height: 'auto',
                    maxWidth: { xs: '100%', sm: 'calc(50% - 8px)' },
                    borderRadius: '1rem',
                    bgcolor: page.dark ? BRAND_ALPHA.white12 : BRAND_ALPHA.inkSoft,
                    color: page.dark ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.ink06,
                    fontWeight: 700,
                    '& .MuiChip-label': {
                      display: 'block',
                      whiteSpace: 'normal',
                      lineHeight: 1.45,
                      paddingTop: '9px',
                      paddingBottom: '9px',
                    },
                  }}
                />
              ))}
            </Stack>
          ) : null}

          {page.contact?.length ? (
            <Box sx={{ mt: 2.2, display: 'grid', gap: 0.9 }}>
              {page.contact.map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.35,
                    py: 1.1,
                    borderRadius: '1rem',
                    bgcolor: BRAND_ALPHA.white58,
                    border: `1px solid ${BRAND_ALPHA.white48}`,
                  }}
                >
                  <Typography sx={{ fontSize: '0.88rem', color: BRAND_NEUTRALS.inkSoft, lineHeight: 1.6 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : null}

          <Box
            sx={{
              mt: 2.1,
              display: 'grid',
              gap: 0.85,
              color: page.dark ? BRAND_ALPHA.white86 : BRAND_NEUTRALS.inkMuted,
              alignContent: 'start',
            }}
          >
            {page.highlights.map((highlight) => (
              <Box key={highlight} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Box
                  sx={{
                    mt: 0.6,
                    width: 8,
                    height: 8,
                    flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: page.dark ? 'secondary.main' : 'primary.light',
                  }}
                />
                <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {highlight}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default function Brochure() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [currentSpread, setCurrentSpread] = useState(0)
  const { openEnquiry } = useEnquiryModal()
  const touchStartX = useRef(null)

  const spreads = useMemo(
    () => chunkPages(brochurePages, isDesktop ? 2 : 1),
    [isDesktop],
  )

  useEffect(() => {
    setCurrentSpread((previous) => Math.min(previous, spreads.length - 1))
  }, [spreads.length])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentSpread((previous) => Math.min(previous + 1, spreads.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        setCurrentSpread((previous) => Math.max(previous - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [spreads.length])

  const handlePrint = () => {
    window.print()
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current == null) return

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const deltaX = touchStartX.current - endX

    if (Math.abs(deltaX) > 48) {
      setCurrentSpread((previous) => {
        if (deltaX > 0) return Math.min(previous + 1, spreads.length - 1)
        return Math.max(previous - 1, 0)
      })
    }

    touchStartX.current = null
  }

  const progressValue = ((currentSpread + 1) / spreads.length) * 100

  return (
    <>
      <GlobalStyles
        styles={{
          '@page': {
            size: 'A4 portrait',
            margin: '10mm',
          },
          '@media print': {
            'header, footer': {
              display: 'none !important',
            },
            'main': {
              paddingTop: '0 !important',
            },
            '.MuiFab-root, .MuiDrawer-root, .MuiAppBar-root, .MuiBackdrop-root': {
              display: 'none !important',
            },
            'body': {
              background: `${BRAND_NEUTRALS.white} !important`,
            },
          },
        }}
      />
      <PageHero {...appContent.pageHeroes.brochure} />

      <Section
        background="soft"
        sx={{
          pt: { xs: 4.5, md: 5.5 },
          pb: { xs: 5.5, md: 7 },
          '@media print': {
            py: 0,
            bgcolor: BRAND_NEUTRALS.white,
          },
        }}
      >
        <Paper
          sx={{
            p: { xs: 2.2, sm: 2.6, lg: 3 },
            borderRadius: '1.8rem',
            border: `1px solid ${BRAND_ALPHA.white48}`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.84), rgba(232,241,246,0.9))',
            backdropFilter: 'blur(18px)',
            boxShadow: BRAND_SHADOWS.lg,
            '@media print': {
              display: 'none',
            },
          }}
        >
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={2.5}
            alignItems={{ xs: 'flex-start', lg: 'center' }}
            justifyContent="space-between"
          >
            <Box sx={{ maxWidth: 760 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <MenuBookRoundedIcon sx={{ color: 'secondary.main' }} />
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'secondary.dark' }}>
                  Interactive Brochure
                </Typography>
              </Stack>
              <Typography sx={{ mt: 1, color: 'primary.main', fontSize: { xs: '1.35rem', sm: '1.75rem' }, fontWeight: 800, lineHeight: 1.15 }}>
                {brochureOverview.title}
              </Typography>
              <Typography sx={{ mt: 1.1, color: 'text.secondary', fontSize: '0.94rem', lineHeight: 1.75 }}>
                {brochureOverview.subtitle}
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} sx={{ width: { xs: '100%', lg: 'auto' } }}>
              <Button
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                onClick={handlePrint}
                sx={{
                  minWidth: { sm: 190 },
                  borderRadius: '999px',
                  px: 2.4,
                  py: 1.2,
                  textTransform: 'none',
                  fontWeight: 700,
                  height: 50,
                }}
              >
                Download / Print
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                sx={{
                  minWidth: { sm: 190 },
                  borderRadius: '999px',
                  px: 2.4,
                  py: 1.2,
                  textTransform: 'none',
                  fontWeight: 700,
                  height: 50,
                }}
              >
                Request Details
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Section>

      <Section
        background="base"
        sx={{
          pt: { xs: 0, md: 0 },
          '@media print': {
            py: 0,
            bgcolor: BRAND_NEUTRALS.white,
          },
        }}
      >
        <Box
          sx={{
            mb: 2.5,
            display: 'flex',
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' },
            '@media print': {
              display: 'none',
            },
          }}
        >
          <Box sx={{ pt: 5, minWidth: 0 }}>
            <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.15rem', sm: '1.35rem' }, fontWeight: 800 }}>
              Flip through the school story
            </Typography>
              <Typography sx={{ mt: 0.6, color: 'text.secondary', fontSize: '0.92rem' }}>
              Use arrows, swipe on touch devices, or your keyboard to move through each brochure spread.
              </Typography>
            </Box>

          <Stack direction="row" spacing={1.1} alignItems="center">
            <IconButton
              aria-label="Previous brochure pages"
              onClick={() => setCurrentSpread((previous) => Math.max(previous - 1, 0))}
              disabled={currentSpread === 0}
              sx={{
                border: `1px solid ${BRAND_ALPHA.white48}`,
                bgcolor: BRAND_ALPHA.white72,
                backdropFilter: 'blur(18px)',
              }}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <IconButton
              aria-label="Next brochure pages"
              onClick={() => setCurrentSpread((previous) => Math.min(previous + 1, spreads.length - 1))}
              disabled={currentSpread === spreads.length - 1}
              sx={{
                border: `1px solid ${BRAND_ALPHA.white48}`,
                bgcolor: BRAND_ALPHA.white72,
                backdropFilter: 'blur(18px)',
              }}
            >
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Stack>
        </Box>

        <Paper
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2rem',
            p: { xs: 1.1, sm: 1.3, lg: 1.5 },
            border: `1px solid ${BRAND_ALPHA.white48}`,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.52), rgba(232,241,246,0.7))',
            backdropFilter: 'blur(18px)',
            boxShadow: BRAND_SHADOWS.xl,
            '@media print': {
              p: 0,
              border: 'none',
              boxShadow: 'none',
              borderRadius: 0,
              background: 'transparent',
              overflow: 'visible',
            },
          }}
        >
          <Box
            sx={{
              px: { xs: 1.1, sm: 1.5 },
              pt: 1.4,
              pb: 1,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1.5,
              alignItems: 'center',
              '@media print': {
                display: 'none',
              },
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <PaletteRoundedIcon sx={{ color: 'primary.light', fontSize: 18 }} />
              <Typography sx={{ color: 'primary.main', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Spread {currentSpread + 1} of {spreads.length}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <SchoolRoundedIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '0.82rem', fontWeight: 700 }}>
                {isDesktop ? 'Desktop spread view' : 'Mobile single-page view'}
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              px: { xs: 1.1, sm: 1.5 },
              pb: 1.35,
              '@media print': {
                display: 'none',
              },
            }}
          >
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 6,
                borderRadius: 999,
                bgcolor: BRAND_ALPHA.white34,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 999,
                  background: 'linear-gradient(90deg, #2d5367, #f0934b)',
                },
              }}
            />
          </Box>

          <Box
            sx={{
              overflow: 'hidden',
              '@media print': {
                overflow: 'visible',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: `${spreads.length * 100}%`,
                transform: `translateX(-${currentSpread * (100 / spreads.length)}%)`,
                transition: 'transform 560ms cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform',
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
                '@media print': {
                  width: '100%',
                  display: 'block',
                  transform: 'none',
                },
              }}
            >
              {spreads.map((spread, spreadIndex) => (
                <Box
                  key={spread.map((page) => page.id).join('-')}
                  sx={{
                    flex: `0 0 ${100 / spreads.length}%`,
                    width: `${100 / spreads.length}%`,
                    px: { xs: 0.4, sm: 0.7, lg: 0.85 },
                    pb: { xs: 0.4, sm: 0.7, lg: 0.85 },
                    opacity: spreadIndex === currentSpread ? 1 : 0.8,
                    transform: spreadIndex === currentSpread ? 'scale(1)' : 'scale(0.985)',
                    transition: 'opacity 420ms ease, transform 420ms ease',
                    '@media print': {
                      width: '100%',
                      px: 0,
                      pb: 0,
                      mb: 0,
                      opacity: 1,
                      transform: 'none',
                      breakInside: 'auto',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', lg: spread.length > 1 ? 'repeat(2, minmax(0, 1fr))' : '1fr' },
                      gap: 1.2,
                      alignItems: 'stretch',
                      '@media print': {
                        gridTemplateColumns: '1fr',
                        gap: 0,
                      },
                    }}
                  >
                    {spread.map((page, pageOffset) => (
                      <Box
                        key={page.id}
                        sx={{
                          height: '100%',
                          '@media print': {
                            mb: 0,
                            breakInside: 'avoid',
                            pageBreakAfter: pageOffset === spread.length - 1 ? 'always' : 'auto',
                          },
                        }}
                      >
                        <PageCard
                          page={page}
                          pageNumber={spreadIndex * (isDesktop ? 2 : 1) + pageOffset + 1}
                          compact={isDesktop}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>

        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={1}
          sx={{
            mt: 2,
            justifyContent: { xs: 'flex-start', md: 'center' },
            '@media print': {
              display: 'none',
            },
          }}
        >
          {spreads.map((spread, spreadIndex) => (
            <Chip
              key={spread.map((page) => page.id).join('-')}
              label={spread.map((page) => page.eyebrow).join(' / ')}
              onClick={() => setCurrentSpread(spreadIndex)}
              clickable
              sx={{
                borderRadius: '999px',
                bgcolor: spreadIndex === currentSpread ? 'primary.main' : BRAND_ALPHA.white72,
                color: spreadIndex === currentSpread ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.inkSoft,
                border: `1px solid ${spreadIndex === currentSpread ? BRAND_ALPHA.ink22 : BRAND_ALPHA.white48}`,
                fontWeight: 700,
                maxWidth: { xs: '100%', md: 'none' },
                '& .MuiChip-label': {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                },
              }}
            />
          ))}
        </Stack>
      </Section>
    </>
  )
}
