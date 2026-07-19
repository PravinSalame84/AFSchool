import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import afsCutoutGroup from '../../assets/images/afs-cutout-group.png'
import schoolContent from '../../data/schoolContent'
import siteConfig from '../../data/siteConfig'

const heroCutouts = [
  {
    src: afsCutoutGroup,
    alt: 'Air Force School student with books',
    sx: {
      right: { xs: '50%', lg: '2%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 280, sm: 360, md: 450, lg: 600, xl: 800 },
      zIndex: 2,
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
        minHeight: { xs: 660, sm: 720, md: 760, xl: 820 },
        overflow: 'hidden',
        borderBottomLeftRadius: { xs: 18, md: 30 },
        borderBottomRightRadius: { xs: 18, md: 30 },
        background:
          'radial-gradient(circle at top left, rgba(103,137,166,0.48), transparent 28%), radial-gradient(circle at bottom right, rgba(240,147,75,0.24), transparent 24%), linear-gradient(135deg, #111a24 18%, #274356 58%, #6e93ad 100%)',
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
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 16 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.95fr 1.05fr' },
            alignItems: 'center',
            minHeight: { xs: 660, sm: 720, md: 760, xl: 820 },
            gap: { xs: 2, sm: 2, lg: 0 },
          }}
        >
          <Box sx={{ pt: { xs: 8, sm: 9, md: 13 }, pb: { xs: 2, sm: 2, lg: 6 }, maxWidth: 760, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
              }}
            >
              {schoolContent.hero.eyebrow}
            </Typography>
            <Typography
              sx={{
                maxWidth: 700,
                color: '#ffffff',
                mx: { xs: 'auto', lg: 0 },
                mt: 1.5,
                fontSize: { xs: '2.35rem', sm: '3.2rem', md: '4.15rem', xl: '5.1rem' },
                lineHeight: { xs: 1.04, sm: 0.98, md: 0.95 },
                fontWeight: 700,
                letterSpacing: '-0.025em',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              {schoolContent.hero.title}
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                maxWidth: 620,
                mx: { xs: 'auto', lg: 0 },
                color: 'rgba(255,255,255,0.78)',
                fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.08rem' },
                lineHeight: 1.8,
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
                    height: 34,
                    borderRadius: '999px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: '#fff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(18px)',
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
                  minWidth: { xs: '100%', sm: 280, md: 340 },
                  px: { xs: 2.2, sm: 3.5 },
                  py: { xs: 1.4, md: 1.8 },
                  bgcolor: '#ffffff',
                  color: '#d27d05',
                  borderRadius: '0.95rem',
                  boxShadow: '0 16px 34px rgba(12, 24, 41, 0.22)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#fff8ee',
                    color: '#a56f0d',
                  },
                }}
              >
                Admissions Open for AY 2026-27
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  minWidth: { xs: '100%', sm: 210 },
                  px: 3.25,
                  py: 1.55,
                  borderRadius: '0.95rem',
                  borderColor: 'rgba(255,255,255,0.32)',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.54)',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                Contact School Office
              </Button>
            </Stack>

            <Box
              sx={{
                mt: { xs: 4, md: 5 },
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))' },
                gap: 1.5,
                maxWidth: 560,
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
              minHeight: { xs: 300, sm: 360, md: 520, lg: 720, xl: 820 },
              mt: { xs: 3, lg: 0 },
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

            {heroCutouts.map((item) => (
              <Box
                key={item.src}
                component="img"
                src={item.src}
                alt={item.alt}
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
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.16)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <Typography sx={{ color: '#fff', fontSize: { xs: '1rem', sm: '1.15rem' }, fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography sx={{ mt: 0.35, color: 'rgba(255,255,255,0.68)', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
    </Box>
  )
}
