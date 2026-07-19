import { Box, Typography } from '@mui/material'
import siteConfig from '../../data/siteConfig'
import OptimizedImage from '../ui/OptimizedImage'
import { BRAND_NEUTRALS } from '../../constants/brand'

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
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 430, px: 3, textAlign: 'center' }}>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: 12,
            width: { xs: 180, sm: 220 },
            height: { xs: 180, sm: 220 },
            borderRadius: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(240,147,75,0.22) 0%, rgba(240,147,75,0.1) 36%, rgba(240,147,75,0) 74%)',
            filter: 'blur(10px)',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            mx: 'auto',
            width: { xs: 112, sm: 132 },
            height: { xs: 112, sm: 132 },
            p: 1.2,
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 24px 60px -26px rgba(0,0,0,0.42)',
            display: 'grid',
            placeItems: 'center',
            animation: visible ? 'splashFloat 1.2s ease-in-out infinite alternate' : 'none',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
            }}
          >
            <OptimizedImage
              src="/favicon.png"
              alt={`${siteConfig.brandName} logo`}
              loading="eager"
              fetchPriority="high"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 3.25,
            color: BRAND_NEUTRALS.white,
            fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
            fontSize: { xs: '1.85rem', sm: '2.35rem' },
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandName}
        </Typography>
        <Typography
          sx={{
            mt: 0.9,
            color: 'rgba(255,255,255,0.72)',
            fontSize: { xs: '0.74rem', sm: '0.82rem' },
            fontWeight: 700,
            letterSpacing: { xs: '0.14em', sm: '0.18em' },
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.brandSuffix}
        </Typography>

        <Typography
          sx={{
            mt: 1.35,
            color: 'rgba(215,239,246,0.74)',
            fontSize: { xs: '0.88rem', sm: '0.92rem' },
            lineHeight: 1.65,
          }}
        >
          {siteConfig.tagline}
        </Typography>

        <Box
          sx={{
            mt: 2.6,
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
