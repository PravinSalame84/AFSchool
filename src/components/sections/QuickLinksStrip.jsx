import {
  Link as RouterLink } from 'react-router-dom'
import Stack from '../ui/Stack'
import {
  Box,
  Container,
  Typography,
  Link,
  alpha,
} from '@mui/material'

import {
  Star,
  Rocket,
  MapPin,
  ExternalLink,
} from 'lucide-react'
import { brandColors } from '../../theme/colorTokens'

const links = [
  { icon: Star, label: 'About Us', to: '/about' },
  { icon: Rocket, label: 'Airforce School Initiatives', to: '/about#initiatives' },
  { icon: MapPin, label: 'Locations', to: '/locations' },
  { icon: ExternalLink, label: 'Careers', to: 'https://careers.example.com', external: true },
]

export default function QuickLinksStrip() {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        py: 3,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.1),
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 100%)`
            : 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      })}
    >
      <Container maxWidth="lg">

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          useFlexGap
        >
          {links.map(({ icon: Icon, label, to, external }) => {
            const commonStyles = {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              transition: '0.25s ease',
              '&:hover': {
                color: 'secondary.main',
                transform: 'translateY(-2px)',
              },
            }

            const content = (
              <>
                <Icon size={16} />
                {label}
              </>
            )

            return external ? (
              <Link
                key={label}
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                sx={commonStyles}
              >
                {content}
              </Link>
            ) : (
              <Link
                key={label}
                component={RouterLink}
                to={to}
                sx={commonStyles}
              >
                {content}
              </Link>
            )
          })}
        </Stack>

      </Container>
    </Box>
  )
}
