import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'
import { brandColors } from '../../theme/colorTokens'
export default function Card({
  children,
  className = '',
  component = 'div',
  hover = true,
  elevation = 0,
  ...rest
}) {
  return (
    <Paper
      component={component}
      elevation={elevation}
      className={className}
      sx={(theme) => ({
        borderRadius: 4,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.dark, 0.85)
            : brandColors.white,

        transition: 'all 0.3s ease',

        ...(hover && {
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 18px 40px rgba(0,0,0,0.45)'
                : '0 18px 40px rgba(15, 35, 56, 0.18)',
          },
        }),
      })}
      {...rest}
    >
      {children}
    </Paper>
  )
}