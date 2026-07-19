import { Box } from '@mui/material'

export default function RouteLoader() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        minHeight: '32vh',
        display: 'grid',
        placeItems: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: 180,
          maxWidth: '100%',
          height: 4,
          borderRadius: '999px',
          overflow: 'hidden',
          backgroundColor: 'rgba(17,26,36,0.08)',
        }}
      >
        <Box
          sx={{
            width: '42%',
            height: '100%',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, rgba(240,147,75,0.9), rgba(93,138,168,0.9))',
            animation: 'splashLoad 900ms ease-in-out infinite',
          }}
        />
      </Box>
    </Box>
  )
}
