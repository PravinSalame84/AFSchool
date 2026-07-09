import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import afsCutoutGroup from '../../assets/images/afs-cutout-group.png'

const heroCutouts = [
  {
    src: afsCutoutGroup,
    alt: 'Air Force School student with books',
    sx: {
      right: { xs: '50%', lg: '2%' },
      transform: { xs: 'translateX(50%)', lg: 'none' },
      width: { xs: 280, sm: 360, md: 450, lg: 600, xl: 700 },
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
        minHeight: { xs: 620, sm: 700, md: 760, xl: 820 },
        overflow: 'hidden',
        borderBottomLeftRadius: { xs: 18, md: 30 },
        borderBottomRightRadius: { xs: 18, md: 30 },
        // background: `linear-gradient(135deg, ${brandColors.navyBlue} 25%, ${brandColors.sky} 60%, ${brandColors.skyBright} 100%)`,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 16 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.95fr 1.05fr' },
            alignItems: 'center',
            minHeight: { xs: 620, sm: 700, md: 760, xl: 820 },
            gap: { xs: 1, sm: 2, lg: 0 },
          }}
        >
          <Box sx={{ pt: { xs: 7, sm: 8, md: 13 }, pb: { xs: 1, sm: 2, lg: 6 }, maxWidth: 720, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography
              sx={{
                maxWidth: 700,
                color: '#ffffff',
                mx: { xs: 'auto', lg: 0 },
                fontSize: { xs: '2.2rem', sm: '3rem', md: '4.15rem', xl: '5.35rem' },
                lineHeight: { xs: 1.04, sm: 1, md: 0.99 },
                fontWeight: 700,
                letterSpacing: '-0.025em',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Excellence in Education at Air Force School
            </Typography>

            <Button
              component={Link}
              to="/admissions"
              variant="contained"
              sx={{
                mt: { xs: 3, sm: 4, md: 6.5 },
                minWidth: { xs: '100%', sm: 380, md: 560 },
                maxWidth: { xs: 360, sm: 410, md: 560 },
                mx: { xs: 'auto', lg: 0 },
                px: { xs: 2.2, sm: 3.5 },
                py: { xs: 1.5, md: 2.2 },
                bgcolor: '#ffffff',
                color: '#d27d05',
                borderRadius: '0.85rem',
                boxShadow: '0 6px 14px rgba(120, 82, 34, 0.12)',
                border: '1px solid rgba(178, 126, 43, 0.18)',
                fontSize: { xs: '0.94rem', sm: '1rem', md: '1.2rem' },
                fontWeight: 500,
                textTransform: 'none',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                '&:hover': {
                  bgcolor: '#fff8ee',
                  color: '#a56f0d',
                },
              }}
            >
              Admissions Open For AY 2026-27
            </Button>
          </Box>

          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 300, sm: 360, md: 520, lg: 720, xl: 820 },
              mt: { xs: 2, lg: 0 },
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
