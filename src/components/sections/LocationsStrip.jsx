import { Link as RouterLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  alpha,
} from '@mui/material'

import { states } from '../../data/locations'
import { brandColors } from '../../theme/colorTokens'

export default function LocationsStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        background: 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      }}
    >
      <Container maxWidth="lg">

        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          alignItems="center"
        >
          {/* LABEL */}
          <Stack direction="row" spacing={1} alignItems="center">
            <MapPin size={18} color="#F57C00" />
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: brandColors.navyAlt,
                letterSpacing: 0.5,
              }}
            >
              Campuses in:
            </Typography>
          </Stack>

          {/* CHIPS */}
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {states.map((state) => (
              <Chip
                key={state}
                component={RouterLink}
                to={`/locations?state=${encodeURIComponent(state)}`}
                label={state}
                clickable
                sx={{
                  fontWeight: 600,
                  borderRadius: 4,
                  backgroundColor: brandColors.white,
                  color: brandColors.navyAlt,
                  border: `1px solid ${alpha(brandColors.navyAlt, 0.08)}`,
                  transition: '0.25s ease',
                  '&:hover': {
                    backgroundColor: brandColors.navyAlt,
                    color: brandColors.white,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px rgba(11, 31, 58, 0.15)',
                  },
                }}
              />
            ))}
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}