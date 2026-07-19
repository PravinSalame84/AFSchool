import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Container from './Container'

export default function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, sm: 10 },
        background:
          'radial-gradient(circle at top right, rgba(255,147,75,0.25), transparent 28%), radial-gradient(circle at left, rgba(93,138,168,0.28), transparent 24%), #111a24',
      }}
    >
      <Container sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Breadcrumbs
          separator={<ChevronRightRoundedIcon sx={{ fontSize: 16, color: 'rgba(215,239,246,0.7)' }} />}
          sx={{
            mb: 2,
            '& .MuiBreadcrumbs-ol': {
              alignItems: 'center',
            },
          }}
        >
          <Link component={RouterLink} to="/" underline="hover" sx={{ color: 'rgba(215,239,246,0.68)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            Home
          </Link>
          <Typography sx={{ color: 'rgba(215,239,246,0.92)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {crumb}
          </Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: image ? '1.05fr 0.7fr' : '1fr' }, alignItems: 'center', gap: 5 }}>
          <Box>
            {eyebrow ? (
              <Typography sx={{ color: 'secondary.main', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
                {eyebrow}
              </Typography>
            ) : null}
            <Typography variant="h1" sx={{ mt: 1.5, maxWidth: 900, color: '#ffffff', fontSize: { xs: '2.5rem', sm: '3.3rem' }, lineHeight: 0.98 }}>
              {title}
            </Typography>
            {subtitle ? (
              <Typography sx={{ mt: 2, maxWidth: 760, color: 'rgba(215,239,246,0.78)', fontSize: '0.98rem', lineHeight: 1.8 }}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>
          {image ? (
            <Box sx={{ position: 'relative', mx: 'auto', width: '100%', maxWidth: 420 }}>
              <Box sx={{ position: 'absolute', inset: 0, borderRadius: '2rem', backgroundColor: 'rgba(255,255,255,0.12)', filter: 'blur(36px)' }} />
              <Box component="img" src={image} alt="" sx={{ position: 'relative', width: '100%', height: { xs: 280, sm: 320 }, objectFit: 'cover', borderRadius: '2rem', boxShadow: 5 }} />
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  )
}
