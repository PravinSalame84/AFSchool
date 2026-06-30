import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import siteConfig from '../../data/siteConfig'
import { brandColors } from '../../theme/colorTokens'

export default function Logo({ tone = 'dark', variant = 'default', className = '' }) {
  const theme = useTheme()
  const isFooter = variant === 'footer'
  const isLight = tone === 'light'
  const titleColor = isLight
    ? brandColors.white
    : theme.palette.mode === 'dark'
      ? '#f7fbff'
      : theme.palette.primary.main
  const subtitleColor = isLight
    ? alpha(brandColors.white, 0.8)
    : theme.palette.mode === 'dark'
      ? alpha('#d7eff6', 0.84)
      : theme.palette.text.secondary

  return (
    <Box
      component={Link}
      to="/"
      aria-label="Air Force School home"
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: isFooter ? 1.5 : 1.2,
        px: isFooter ? { xs: 0.75, sm: 2 } : { xs: 0.4, sm: 1.2 },
        py: isFooter ? { xs: 1, sm: 1.5 } : { xs: 0.6, sm: 1 },
        borderRadius: isFooter ? 3 : 2,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
        },
      }}
    >
      {/* Logo Container */}
      <Box
        sx={{
          width: isFooter ? { xs: 50, sm: 64 } : { xs: 46, sm: 56 },
          height: isFooter ? { xs: 50, sm: 64 } : { xs: 46, sm: 56 },
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          border: `1px solid ${
            isLight
              ? alpha(brandColors.white, 0.18)
              : alpha(theme.palette.primary.main, 0.18)
          }`,

          background: isLight
            ? 'rgba(255,255,255,0.08)'
            : `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,

          backdropFilter: 'blur(10px)',
        }}
      >
        <Box
          component="img"
          src="/favicon.png"
          alt={`${siteConfig.brandName} logo`}
          sx={{
            width: isFooter ? { xs: 40, sm: 52 } : { xs: 34, sm: 44 },
            height: isFooter ? { xs: 40, sm: 52 } : { xs: 34, sm: 44 },
            borderRadius: '25%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ minWidth: 0, lineHeight: 1 }}>
        <Typography
          sx={{
            fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1,
            fontSize: isFooter ? { xs: '0.96rem', sm: '1.4rem' } : { xs: '0.92rem', sm: '1.1rem' },
            color: titleColor,
            textShadow: 'none',
          }}
        >
          {siteConfig.brandName}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: { xs: 8.5, sm: 10 },
            letterSpacing: { xs: '0.12em', sm: '0.18em' },
            fontWeight: 600,
            textTransform: 'uppercase',
            color: subtitleColor,
          }}
        >
          {siteConfig.brandSuffix}
        </Typography>
      </Box>
    </Box>
  )
}
