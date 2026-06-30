import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { brandColors, gradientTokens } from '../../theme/colorTokens'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className = '',
  sx,
}) {
  const centered = align === 'center'
  const isLight = tone === 'light'

  return (
    <Box
      className={className}
      sx={{
        maxWidth: '42rem',
        mx: centered ? 'auto' : 0,
        textAlign: centered ? 'center' : 'left',
        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      }}
    >
      {eyebrow ? (
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: isLight ? brandColors.gold : brandColors.earth,
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '25%',
              background: gradientTokens.goldBadgeVertical,
            }}
          />
          {eyebrow}
        </Box>
      ) : null}

      <Typography
        component="h2"
        sx={{
          mt: 1.5,
          color: isLight ? brandColors.gold : 'text.primary',
          fontWeight: 800,
          lineHeight: 1.05,
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        {title}
      </Typography>

      {subtitle ? (
        <Typography
          sx={(theme) => ({
            mt: 2,
            color: isLight ? alpha(brandColors.sky, 0.9) : theme.palette.text.secondary,
            fontSize: { xs: '1rem', sm: '1.05rem' },
            lineHeight: 1.75,
          })}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  )
}
