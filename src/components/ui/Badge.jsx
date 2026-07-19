import { Chip } from '@mui/material'

const tones = {
  accent: { backgroundColor: 'rgba(240,147,75,0.14)', color: 'secondary.dark' },
  sky: { backgroundColor: '#d7eff6', color: 'primary.light' },
  dark: { backgroundColor: 'primary.main', color: 'common.white' },
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
