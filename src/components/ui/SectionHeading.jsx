import { Box, Typography } from '@mui/material'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className,
  sx,
}) {
  const textAlign = align === 'center' ? 'center' : 'left'
  const titleColor = tone === 'light' ? '#ffffff' : '#111a24'
  const subColor = tone === 'light' ? 'rgba(215,239,246,0.9)' : '#587084'

  return (
    <Box className={className} sx={{ maxWidth: 720, textAlign, mx: align === 'center' ? 'auto' : 0, ...sx }}>
      {eyebrow && (
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'secondary.dark' }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {eyebrow}
          </Typography>
        </Box>
      )}
      <Typography variant="h2" sx={{ mt: 1.5, color: titleColor, fontSize: { xs: '2rem', sm: '2.6rem' }, lineHeight: 1.05 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography sx={{ mt: 2, color: subColor, fontSize: { xs: '1rem', sm: '1.08rem' }, lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  )
}
