import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { sharedImages } from '../../assets/images'
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
      width: { xs: 300, sm: 320, md: 420, lg: 560, xl: 760 },
      zIndex: 2,
      bottom: -25
    },
  },
  // {
  //   src: siteAssets.images.afsCutoutTwo,
  //   alt: 'Air Force School student with glasses',
  //   sx: {
  //     right: { xs: -10, sm: -4, lg: 8 },
  //     width: { xs: 225, sm: 275, md: 355, lg: 420, xl: 470 },
  //     zIndex: 3,
  //   },
  // },
]

export default function Hero() {
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
          'radial-gradient(circle at top left, rgba(202,220,234,0.5), transparent 28%), radial-gradient(circle at bottom right, rgba(240,147,75,0.14), transparent 24%), linear-gradient(135deg, #233446 10%, #355469 54%, #7694aa 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
        }}
      />
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
                color: BRAND_ALPHA.white72,
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
                color: BRAND_NEUTRALS.white,
                mx: { xs: 'auto', lg: 0 },
                mt: 1.5,
                fontSize: { xs: '1.72rem', sm: '2.55rem', md: '4rem', xl: '5rem' },
                lineHeight: { xs: 1.1, sm: 1, md: 0.95 },
                fontWeight: 700,
                letterSpacing: '-0.025em',
                fontFamily: 'Georgia, "Times New Roman", serif',
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
                color: BRAND_ALPHA.white78,
                fontSize: { xs: '0.88rem', sm: '1rem', md: '1.05rem' },
                lineHeight: { xs: 1.7, sm: 1.8 },
              }}
            >
              {schoolContent.hero.subtitle}
            </Typography>

            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              spacing={1.2}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              sx={{ mt: 3 }}
            >
              
              {schoolContent.hero.badges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  sx={{
                    height: { xs: 32, sm: 34 },
                    ...HERO_BADGE_CHIP_SX,
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
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              sx={{ mt: { xs: 3.5, md: 5 } }}
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
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: { xs: '10% 0 0 0', lg: '8% 0 0 8%' },
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), rgba(255,255,255,0.02) 64%)',
                filter: 'blur(10px)',
                pointerEvents: 'none',
              }}
            />

            {heroCutouts.map((item, index) => (
              <OptimizedImage
                key={item.src}
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
        borderRadius: 1,
        ...HERO_STAT_PANEL_SX,
      }}
    >
      <Typography sx={{ color: BRAND_NEUTRALS.white, fontSize: { xs: '1rem', sm: '1.15rem' }, fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography sx={{ mt: 0.35, color: BRAND_ALPHA.white68, fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
    </Box>
  )
}
