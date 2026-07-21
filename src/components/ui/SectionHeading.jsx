import { Box, Typography } from '@mui/material'
import { BRAND_ALPHA, BRAND_NEUTRALS } from '../../constants/brand'

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
  const titleColor = tone === 'light' ? BRAND_NEUTRALS.white : BRAND_NEUTRALS.ink
  const subColor = tone === 'light' ? BRAND_ALPHA.sky9 : BRAND_NEUTRALS.slate

  return (
    <Box className={className} sx={{ maxWidth: 720, textAlign, mx: align === 'center' ? 'auto' : 0, ...sx }}>
      {eyebrow && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1.35,
            py: 0.65,
            borderRadius: '999px',
            color: 'secondary.dark',
            backgroundColor: tone === 'light' ? 'rgba(255,255,255,0.12)' : 'rgba(255,196,72,0.16)',
            border: tone === 'light' ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,178,44,0.22)',
          }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main', boxShadow: '0 0 0 4px rgba(255,178,44,0.15)' }} />
          <Typography sx={{ fontSize: '0.73rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
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
