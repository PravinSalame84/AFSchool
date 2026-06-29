import Typography from '@mui/material/Typography'

export default function Eyebrow({ children }) {
  return (
    <Typography
      variant="overline"
      sx={{
        letterSpacing: '0.28em',
        fontWeight: 800,
        color: 'secondary.main',
      }}
    >
      {children}
    </Typography>
  )
}