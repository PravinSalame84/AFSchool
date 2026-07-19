import { Box, Link as MuiLink, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { Star, Rocket, MapPin, ExternalLink } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'

const links = [
  { icon: Star, label: 'About Us', to: '/about' },
  { icon: Rocket, label: 'Airforce School Initiatives', to: '/about#initiatives' },
  { icon: MapPin, label: 'Locations', to: '/locations' },
  { icon: ExternalLink, label: 'Careers', to: 'https://careers.example.com', external: true },
]

export default function QuickLinksStrip() {
  return (
    <Box component="section" sx={{ borderTop: '1px solid rgba(17,26,36,0.08)', borderBottom: '1px solid rgba(17,26,36,0.08)', bgcolor: '#e8f1f6', py: 4 }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent="center" spacing={4} rowGap={2}>
            {links.map(({ icon: Icon, label, to, external }) =>
              external ? (
                <MuiLink
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'primary.light', fontSize: '0.9rem', fontWeight: 700, '&:hover': { color: 'secondary.dark' } }}
                >
                  <Icon size={16} /> {label}
                </MuiLink>
              ) : (
                <MuiLink
                  key={label}
                  component={Link}
                  to={to}
                  underline="none"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'primary.light', fontSize: '0.9rem', fontWeight: 700, '&:hover': { color: 'secondary.dark' } }}
                >
                  <Icon size={16} /> {label}
                </MuiLink>
              ),
            )}
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
