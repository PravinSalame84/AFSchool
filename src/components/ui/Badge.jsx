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
  gold: (theme) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.accent.main : brandColors.earth,
    borderColor: alpha(theme.palette.accent.main, theme.palette.mode === 'dark' ? 0.4 : 0.35),
    background: `linear-gradient(90deg, ${alpha(theme.palette.accent.main, theme.palette.mode === 'dark' ? 0.24 : 0.18)}, ${alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.18 : 0.25)})`,
  }),
  saffron: (theme) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : brandColors.earth,
    borderColor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.38 : 0.3),
    background: `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.22 : 0.18)}, ${alpha(theme.palette.secondary.light, theme.palette.mode === 'dark' ? 0.14 : 0.22)})`,
  }),
  cyan: (theme) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.sky.main : brandColors.navyBlue,
    borderColor: alpha(theme.palette.info.main, theme.palette.mode === 'dark' ? 0.35 : 0.25),
    background: `linear-gradient(90deg, ${alpha(theme.palette.info.main, theme.palette.mode === 'dark' ? 0.18 : 0.14)}, ${alpha(theme.palette.sky.main, theme.palette.mode === 'dark' ? 0.18 : 0.35)})`,
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
