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
import { useLocale } from '../../context/LocaleContext'
import siteAssets from '../../data/siteAssets'
import OptimizedImage from '../ui/OptimizedImage'

const links = [
  { icon: Star, label: 'About Us', to: '/about' },
  { icon: Rocket, label: 'Airforce School Initiatives', to: '/about#initiatives' },
  { icon: MapPin, label: 'Locations', to: '/locations' },
  { icon: ExternalLink, label: 'Careers', to: 'https://careers.example.com', external: true },
]

export default function QuickLinksStrip() {
  const { localize } = useLocale()
  const localizedLinks = localize(links)

  return (
    <Box
      component="section"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
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
      <Box sx={{ position: 'absolute', top: 4, left: 24, width: { md: 84, lg: 98 }, opacity: 0.9, pointerEvents: 'none', display: { xs: 'none', md: 'block' } }}>
        <OptimizedImage src={siteAssets.images.studentHeroThree} alt="Student cutout" wrapperSx={{ height: '100%' }} sx={{ height: '100%', objectFit: 'contain' }} />
      </Box>
      <Box sx={{ position: 'absolute', right: 24, bottom: -6, width: { md: 88, lg: 106 }, opacity: 0.9, pointerEvents: 'none', display: { xs: 'none', lg: 'block' } }}>
        <OptimizedImage src={siteAssets.images.studentHeroEight} alt="Student cutout" wrapperSx={{ height: '100%' }} sx={{ height: '100%', objectFit: 'contain' }} />
      </Box>
      <Container maxWidth="lg">

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          useFlexGap
        >
          {localizedLinks.map(({ icon: Icon, label, to, external }) => {
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
