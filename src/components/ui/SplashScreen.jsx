import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AnimatePresence, motion } from 'framer-motion'
import siteConfig from '../../data/siteConfig'
import { brandColors } from '../../theme/colorTokens'
import { useLocale } from '../../context/LocaleContext'

export default function SplashScreen({ visible }) {
  const { localize, t } = useLocale()
  const localizedSiteConfig = localize(siteConfig)

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          aria-label={t('Loading Air Force School')}
        >
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              overflow: 'hidden',
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #0e1418 0%, #1d213c 55%, #2a3946 100%)'
                  : 'linear-gradient(135deg, #1d213c 0%, #202c36 55%, #344656 100%)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background:
                  'radial-gradient(circle at top right, rgba(240,147,75,0.24), transparent 24%), radial-gradient(circle at left, rgba(0,212,250,0.2), transparent 20%)',
              }}
            />
            <Box className="contour-lines" sx={{ opacity: 0.35 }} />

            <Box sx={{ position: 'relative', display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', px: { xs: 2, sm: 3 } }}>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box sx={{ display: 'flex', width: '100%', maxWidth: { xs: 320, sm: 420 }, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <motion.div
                    initial={{ scale: 0.9, rotate: -8 }}
                    animate={{ scale: [0.94, 1.03, 1], rotate: [0, 2, 0] }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        height: { xs: 92, sm: 112 },
                        width: { xs: 92, sm: 112 },
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.16)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(215,239,246,0.12), rgba(255,255,255,0.08))',
                        boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      <Box sx={{ position: 'absolute', inset: 8, borderRadius: { xs: '1.2rem', sm: '1.55rem' }, border: '1px solid rgba(255,255,255,0.12)' }} />
                      <Box
                        component="img"
                        src="/favicon.png"
                        alt={`${localizedSiteConfig.brandName} logo`}
                        sx={{ position: 'relative', width: { xs: 62, sm: 78 }, height: { xs: 62, sm: 78 }, borderRadius: '25%', objectFit: 'cover' }}
                      />
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Typography sx={{ mt: 3.5, color: 'rgba(215,239,246,0.88)', fontSize: { xs: '0.64rem', sm: '0.7rem' }, fontWeight: 800, textTransform: 'uppercase', letterSpacing: { xs: '0.18em', sm: '0.28em' } }}>
                      {t('Welcome To')}
                    </Typography>
                    <Typography component="h1" sx={{ mt: 1.5, color: brandColors.white, fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.95, fontSize: { xs: '1.8rem', sm: '3rem' } }}>
                      {localizedSiteConfig.brandName}
                    </Typography>
                    <Typography sx={{ mt: 1.5, color: 'rgba(215,239,246,0.74)', fontSize: { xs: '0.72rem', sm: '0.85rem' }, fontWeight: 700, textTransform: 'uppercase', letterSpacing: { xs: '0.1em', sm: '0.22em' }, lineHeight: 1.5 }}>
                      {localizedSiteConfig.brandSuffix}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scaleX: 0.75 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
                  >
                    <Box sx={{ mt: 4, width: '100%', maxWidth: { xs: 200, sm: 240 } }}>
                      <Box sx={{ height: 6, overflow: 'hidden', borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.1)' }}>
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '0%' }}
                          transition={{ duration: 1.3, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            height: '100%',
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #00d4fa 0%, #d7eff6 50%, #f0934b 100%)',
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
