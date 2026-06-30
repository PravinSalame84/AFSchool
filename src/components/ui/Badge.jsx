import Box from '@mui/material/Box'
import { alpha, useTheme } from '@mui/material/styles'
import { brandColors } from '../../theme/colorTokens'

const toneMap = {
  accent: (theme) => ({
    color: theme.palette.accent.main,
    borderColor: alpha(theme.palette.accent.main, 0.25),
    background: `linear-gradient(90deg, ${alpha(theme.palette.accent.main, 0.18)}, ${alpha(theme.palette.accent.main, 0.08)})`,
  }),
  sky: (theme) => ({
    color: theme.palette.primary.light,
    borderColor: alpha(theme.palette.primary.light, 0.2),
    background: `linear-gradient(90deg, ${alpha(theme.palette.sky.main, 0.8)}, ${alpha(theme.palette.sky.main, 0.4)})`,
  }),
  dark: (theme) => ({
    color: brandColors.white,
    borderColor: alpha(theme.palette.primary.dark, 0.3),
    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  }),
  gold: () => ({
    color: '#8a6742',
    borderColor: alpha('#ffd707', 0.35),
    background: `linear-gradient(90deg, rgba(255,215,7,0.18), rgba(231,171,51,0.25))`,
  }),
  saffron: () => ({
    color: '#7a4b2a',
    borderColor: alpha('#f0934b', 0.3),
    background: `linear-gradient(90deg, rgba(240,147,75,0.18), rgba(255,200,120,0.22))`,
  }),
  cyan: () => ({
    color: '#0d5c7a',
    borderColor: alpha('#4dd0e1', 0.25),
    background: `linear-gradient(90deg, rgba(77,208,225,0.18), rgba(224,247,250,0.35))`,
  }),
}

export default function Badge({ children, tone = 'accent', className = '' }) {
  const theme = useTheme()

  return (
    <Box
      component="span"
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 1.5,
        py: 0.5,
        borderRadius: 4,
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        border: '1px solid',
        ...(toneMap[tone]?.(theme) || toneMap.accent(theme)),
      }}
    >
      {children}
    </Box>
  )
}