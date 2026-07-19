import { Chip } from '@mui/material'
import { BRAND_ALPHA, BRAND_NEUTRALS } from '../../constants/brand'

const tones = {
  accent: { backgroundColor: BRAND_ALPHA.accent14, color: 'secondary.dark' },
  sky: { backgroundColor: BRAND_NEUTRALS.sectionSky, color: 'primary.light' },
  dark: { backgroundColor: 'primary.main', color: BRAND_NEUTRALS.white },
}

export default function Badge({ children, tone = 'accent', className, sx }) {
  return (
    <Chip
      label={children}
      className={className}
      sx={{
        height: 30,
        borderRadius: '999px',
        fontSize: '0.72rem',
        fontWeight: 800,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        ...tones[tone],
        ...sx,
      }}
    />
  )
}
