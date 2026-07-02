import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import siteConfig from '../../data/siteConfig'
import { brandColors } from '../../theme/colorTokens'
import { useLocale } from '../../context/LocaleContext'

export default function NavigationTitleBadge({ className = '' }) {
  const theme = useTheme()
  const { localize, t } = useLocale()
  const localizedSiteConfig = localize(siteConfig)

  return (
    <Box
      component={Link}
      to="/"
      aria-label={t('Air Force School home')}
      sx={{
        display: { xs: 'none', xl: 'flex' },
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1.5,
        width: 278,
        borderRadius: 4,
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.88)}, ${alpha(theme.palette.primary.dark, 0.34)})`
          : `linear-gradient(135deg, ${alpha(brandColors.skySoft, 0.9)}, ${alpha(brandColors.white, 0.94)})`,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        transition: '0.25s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          borderColor: theme.palette.secondary.main,
          boxShadow: `0 12px 30px ${alpha(brandColors.black, 0.12)}`,
        },
        ...className,
      }}
    >
      {/* glow orb */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(240,147,75,0.15), transparent 40%)',
        }}
      />

      {/* logo */}
      <Box
        sx={{
          width: 62,
          height: 62,
          borderRadius: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          bgcolor: alpha(theme.palette.primary.main, 0.08),
        }}
      >
        <Box
          component="img"
          src="/favicon.png"
          alt={`${localizedSiteConfig.brandName} logo`}
          sx={{
            width: 46,
            height: 46,
            borderRadius: '25%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* text */}
      <Box sx={{ minWidth: 0, zIndex: 1 }}>
        <Typography
          sx={{
            fontWeight: 900,
            textTransform: 'uppercase',
          lineHeight: 0.9,
          fontSize: '1.02rem',
          letterSpacing: '0.02em',
          color: theme.palette.mode === 'dark' ? brandColors.white : theme.palette.primary.dark,
        }}
      >
          {t('AIR FORCE')}
        </Typography>

        <Typography
          sx={{
            fontWeight: 900,
            textTransform: 'uppercase',
          lineHeight: 0.9,
          fontSize: '1.02rem',
          letterSpacing: '0.02em',
          color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.main,
        }}
      >
          {t('SCHOOL')}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: alpha(theme.palette.text.secondary, 0.8),
          }}
        >
          {localizedSiteConfig.brandSuffix}
        </Typography>
      </Box>
    </Box>
  )
}
