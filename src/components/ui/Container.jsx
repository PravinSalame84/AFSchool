import MuiContainer from '@mui/material/Container'
import { alpha } from '@mui/material/styles'

export default function Container({
  children,
  className = '',
  maxWidth = 'xl',
  disableGutters = false,
  centered = false,
  variant = 'default',
  sx,
}) {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      className={`app-shell-container ${className}`.trim()}
      sx={(theme) => ({
        position: 'relative',

        ...(centered && {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }),

        ...(variant === 'soft' && {
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },
          borderRadius: 4,
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary.dark, 0.2)
              : alpha(theme.palette.primary.light, 0.05),
        }),

        ...(variant === 'default' && {
          px: 0,
        }),

        transition: 'all 0.2s ease',

        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      })}
    >
      {children}
    </MuiContainer>
  )
}
