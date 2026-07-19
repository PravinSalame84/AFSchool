import { Box, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'
import OptimizedImage from '../ui/OptimizedImage'
import { BRAND_ALPHA, BRAND_NEUTRALS, BRAND_SHADOWS } from '../../constants/brand'

export default function Logo({ tone = 'dark', className = '' }) {
  const textTone = tone === 'light' ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.ink
  const subTone = tone === 'light' ? BRAND_ALPHA.white65 : BRAND_NEUTRALS.slateSoft

  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label="Air Force School home"
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          width: { xs: 42, sm: 44 },
          height: { xs: 42, sm: 44 },
          flexShrink: 0,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: tone === 'light' ? BRAND_SHADOWS.darkSm : BRAND_SHADOWS.sm,
        }}
      >
        <OptimizedImage
          src="/favicon.png"
          alt={`${siteConfig.brandName} logo`}
          loading="eager"
          fetchPriority="high"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box sx={{ lineHeight: 1 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            color: textTone,
            fontFamily: 'var(--font-display), Georgia, "Times New Roman", serif',
            fontSize: { xs: '0.98rem', sm: '1.12rem', md: '1.35rem' },
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandName}
        </Typography>
        <Typography
          component="span"
          sx={{
            display: 'block',
            mt: 0.35,
            color: subTone,
            fontSize: { xs: '0.54rem', sm: '0.62rem', md: '0.6875rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: { xs: '0.08em', sm: '0.11em', md: '0.14em' },
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandSuffix}
        </Typography>
      </Box>
    </Box>
  )
}
