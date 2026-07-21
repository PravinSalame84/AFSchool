import { Paper } from '@mui/material'
import { GLASS_SURFACE_SX } from '../../constants/brand'

export default function Card({ children, className, hover = true, sx, ...rest }) {
  return (
    <Paper
      className={className}
      sx={{
        p: 0,
        ...GLASS_SURFACE_SX,
        borderRadius: '1.8rem',
        border: '1px solid rgba(255, 205, 120, 0.24)',
        boxShadow: '0 22px 48px -34px rgba(17,26,36,0.22)',
        transition: hover ? 'transform 0.3s ease, box-shadow 0.3s ease' : undefined,
        '&:hover': hover
          ? {
              transform: 'translateY(-6px)',
              boxShadow: '0 28px 58px -30px rgba(17,26,36,0.24)',
            }
          : undefined,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  )
}
