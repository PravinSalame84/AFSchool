import { Paper } from '@mui/material'

export default function Card({ children, className, hover = true, sx, ...rest }) {
  return (
    <Paper
      className={className}
      sx={{
        p: 0,
        backgroundColor: 'background.paper',
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
