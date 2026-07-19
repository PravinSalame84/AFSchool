import { Paper } from '@mui/material'
import { GLASS_SURFACE_SX } from '../../constants/brand'

export default function Card({ children, className, hover = true, sx, ...rest }) {
  return (
    <Paper
      className={className}
      sx={{
        p: 0,
        ...GLASS_SURFACE_SX,
        boxShadow: 2,
        transition: hover ? 'transform 0.3s ease, box-shadow 0.3s ease' : undefined,
        '&:hover': hover
          ? {
              transform: 'translateY(-6px)',
              boxShadow: 5,
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
