import { Box, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', className = '' }) {
  const textTone = tone === 'light' ? '#ffffff' : '#111a24'
  const subTone = tone === 'light' ? 'rgba(255,255,255,0.65)' : '#5d7484'

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
      <Box component="svg" viewBox="0 0 72 72" sx={{ width: 44, height: 44, flexShrink: 0 }}>
        <defs>
          <linearGradient id="logoSky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4d88aa" />
            <stop offset="100%" stopColor="#111a24" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="34" fill="url(#logoSky)" />
        <path d="M36 15l16 10-16 10-16-10 16-10Z" fill="#ffd707" />
        <path d="M24 29v12c0 5 6 10 12 10s12-5 12-10V29l-12 6-12-6Z" fill="#eef6fb" />
        <path d="M15 40c4 1 8 1 12 0M45 40c4 1 8 1 12 0" stroke="#ff671f" strokeWidth="3" strokeLinecap="round" />
      </Box>

      <Box sx={{ lineHeight: 1 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            color: textTone,
            fontFamily: 'var(--font-display), Georgia, "Times New Roman", serif',
            fontSize: '1.35rem',
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
            fontSize: '0.6875rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandSuffix}
        </Typography>
      </Box>
    </Box>
  )
}
