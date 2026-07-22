import { Box, Link as MuiLink, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { Star, Rocket, MapPin, ExternalLink } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'
import appContent from '../../data/appContent'
import { BRAND_NEUTRALS, SECTION_BACKGROUNDS } from '../../constants/brand'
import Section from '../ui/Section'

const iconMap = {
  about: Star,
  initiatives: Rocket,
  locations: MapPin,
  careers: ExternalLink,
}

export default function QuickLinksStrip() {
  return (
    <Section
      background={SECTION_BACKGROUNDS.strip}
      sx={{
        borderTop: '1px solid rgba(17,26,36,0.08)',
        borderBottom: '1px solid rgba(17,26,36,0.08)',
        py: { xs: 3.25, sm: 4 },
      }}
    >
      <RevealOnScroll>
        <Stack
          direction="row"
          useFlexGap
          spacing={{ xs: 1.1, sm: 1.6, md: 2.5 }}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            rowGap: 1.1,
          }}
        >
          {appContent.sections.quickLinksStrip.links.map(({ key, label, to }) => {
            const Icon = iconMap[key] || ExternalLink

            return (
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
                    bgcolor: BRAND_NEUTRALS.white,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Icon size={16} /> {label}
              </MuiLink>
            )
          })}
        </Stack>
      </RevealOnScroll>
    </Section>
  )
}
