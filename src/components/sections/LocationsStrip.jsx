import { Box, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { states } from '../../data/locations'
import { BRAND_NEUTRALS } from '../../constants/brand'

export default function LocationsStrip() {
  return (
    <Box component="section" sx={{ bgcolor: BRAND_NEUTRALS.sectionSoft, py: 5 }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <Stack direction="row" useFlexGap spacing={1.5} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'primary.light', fontSize: '0.9rem', fontWeight: 700 }}>
              <MapPin size={16} color="currentColor" /> Campuses in:
            </Typography>
            {states.map((state) => (
              <Chip
                key={state}
                label={state}
                component={Link}
                to={`/locations?state=${encodeURIComponent(state)}`}
                clickable
                sx={{ backgroundColor: BRAND_NEUTRALS.whiteSoft, color: 'primary.light', boxShadow: 1, '&:hover': { backgroundColor: 'primary.main', color: BRAND_NEUTRALS.whiteSoft } }}
              />
            ))}
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
