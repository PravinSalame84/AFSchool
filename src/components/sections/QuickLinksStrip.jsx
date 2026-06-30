import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Container,
  Stack,
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
      sx={{
        py: 3,
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: alpha(brandColors.navyAlt, 0.1),
        background: 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      }}
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
              color: brandColors.navyAlt,
              textDecoration: 'none',
              transition: '0.25s ease',
              '&:hover': {
                color: brandColors.saffron,
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