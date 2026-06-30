import {
  Link as RouterLink } from 'react-router-dom'
import Stack from '../ui/Stack'
import { MapPin } from 'lucide-react'
import {
  Box,
  Container,
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
      sx={(theme) => ({
        py: 4,
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 100%)`
            : 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      })}
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
            <Box sx={{ display: 'inline-flex', color: 'secondary.main' }}>
              <MapPin size={18} />
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
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
                  backgroundColor: 'background.paper',
                  color: 'text.primary',
                  border: (theme) => `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08)}`,
                  transition: '0.25s ease',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: (theme) => theme.palette.mode === 'dark' ? theme.palette.background.default : brandColors.white,
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
