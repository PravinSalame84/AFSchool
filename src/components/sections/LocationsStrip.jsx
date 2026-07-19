import { Box, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { states } from '../../data/locations'

export default function LocationsStrip() {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: 5 }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <Stack direction="row" useFlexGap flexWrap="wrap" alignItems="center" spacing={1.5}>
            <Typography sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'primary.light', fontSize: '0.9rem', fontWeight: 700 }}>
              <MapPin size={16} color="#f0934b" /> Campuses in:
            </Typography>
            {states.map((state) => (
              <Chip
                key={state}
                label={state}
                component={Link}
                to={`/locations?state=${encodeURIComponent(state)}`}
                clickable
                sx={{ backgroundColor: '#fff', color: 'primary.light', boxShadow: 1, '&:hover': { backgroundColor: 'primary.main', color: '#fff' } }}
              />
            ))}
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
