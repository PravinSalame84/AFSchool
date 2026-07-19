import { Box, Typography } from '@mui/material'
import siteConfig from '../../data/siteConfig'

export default function SplashScreen({ visible }) {
  return (
    <Box
      aria-hidden={!visible}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(circle at top left, rgba(103,137,166,0.35), transparent 28%), radial-gradient(circle at bottom right, rgba(240,147,75,0.22), transparent 24%), linear-gradient(135deg, #111a24 18%, #274356 58%, #6e93ad 100%)',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 320ms ease, visibility 320ms ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Box sx={{ position: 'relative', textAlign: 'center', px: 3 }}>
        <Box
          sx={{
            mx: 'auto',
            width: 84,
            height: 84,
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 24px 60px -26px rgba(0,0,0,0.42)',
            display: 'grid',
            placeItems: 'center',
            animation: visible ? 'splashFloat 1.2s ease-in-out infinite alternate' : 'none',
          }}
        >
          <Box component="span" sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#f0934b', boxShadow: '0 0 0 12px rgba(240,147,75,0.18)' }} />
        </Box>

        <Typography
          sx={{
            mt: 3,
            color: '#fff',
            fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandName}
        </Typography>
        <Typography
          sx={{
            mt: 0.8,
            color: 'rgba(255,255,255,0.72)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandSuffix}
        </Typography>

        <Box
          sx={{
            mt: 3,
            mx: 'auto',
            width: { xs: 180, sm: 220 },
            height: 6,
            borderRadius: '999px',
            overflow: 'hidden',
            backgroundColor: 'rgba(255,255,255,0.14)',
          }}
        >
          <Box
            sx={{
              width: '42%',
              height: '100%',
              borderRadius: '999px',
              background: 'linear-gradient(90deg, #f0934b, #ffd3b0)',
              animation: visible ? 'splashLoad 900ms ease-in-out infinite' : 'none',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
