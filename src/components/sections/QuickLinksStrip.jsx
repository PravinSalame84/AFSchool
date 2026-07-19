import { Box, Link as MuiLink, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { Star, Rocket, MapPin, ExternalLink } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'

const links = [
  { icon: Star, label: 'About Us', to: '/about' },
  { icon: Rocket, label: 'Airforce School Initiatives', to: '/about#initiatives' },
  { icon: MapPin, label: 'Locations', to: '/locations' },
  { icon: ExternalLink, label: 'Careers', to: '/careers' },
]

export default function QuickLinksStrip() {
  return (
    <Box
      component="section"
      sx={{
        borderTop: '1px solid rgba(17,26,36,0.08)',
        borderBottom: '1px solid rgba(17,26,36,0.08)',
        bgcolor: '#dfeef7',
        py: { xs: 3.25, sm: 4 },
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 1.1, sm: 1.6, md: 2.5 }}
            rowGap={1.1}
          >
            {links.map(({ icon: Icon, label, to }) => (
              <MuiLink
                key={label}
                component={Link}
                to={to}
                underline="none"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  minHeight: 42,
                  px: { xs: 1.4, sm: 1.8 },
                  py: 1,
                  borderRadius: '999px',
                  border: '1px solid rgba(17,26,36,0.1)',
                  bgcolor: 'rgba(255,255,255,0.7)',
                  color: 'primary.light',
                  fontSize: { xs: '0.84rem', sm: '0.9rem' },
                  fontWeight: 700,
                  textAlign: 'center',
                  backdropFilter: 'blur(16px)',
                  transition: 'transform .24s ease, background-color .24s ease, color .24s ease',
                  '&:hover': {
                    color: 'secondary.dark',
                    bgcolor: '#ffffff',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Icon size={16} /> {label}
              </MuiLink>
            ))}
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
