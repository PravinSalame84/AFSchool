import { motion } from 'framer-motion'
import { AlertTriangle, Home, RefreshCcw, Wrench } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import { alpha } from '@mui/material/styles'
import Stack from './Stack'
import { brandColors } from '../../theme/colorTokens'
import { useLocale } from '../../context/LocaleContext'

const iconMap = {
  error: AlertTriangle,
  maintenance: Wrench,
  notFound: Home,
}

export default function StatusScreen({
  badge,
  code,
  title,
  message,
  icon = 'error',
  primaryAction,
  secondaryAction,
  note,
}) {
  const { t } = useLocale()
  const Icon = iconMap[icon] ?? AlertTriangle

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* decorative background elements */}
      <Box className="contour-lines" />
      <Box className="hero-orb sky" sx={{ left: '8%', top: 48, height: 208, width: 208 }} />
      <Box className="hero-orb sun" sx={{ right: '12%', top: 40, height: 240, width: 240 }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              bgcolor: 'background.paper',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
                gap: 4,
                alignItems: 'center',
              }}
            >
              {/* LEFT CARD */}
              <Paper
                elevation={0}
                sx={(theme) => ({
                  p: 4,
                  borderRadius: 4,
                  color: brandColors.white,
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${
                    theme.palette.secondary.main
                  }, ${theme.palette.primary.dark}, #214f79)`,
                  border: `1px solid ${alpha(brandColors.white, 0.2)}`,
                })}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at top right, rgba(255,255,255,0.25), transparent 35%)',
                  }}
                />

                <Stack spacing={4} sx={{ position: 'relative', minHeight: 260 }}>
                  <Box>
                    <Chip
                      label={badge}
                      sx={{
                        bgcolor: alpha(brandColors.white, 0.15),
                        color: brandColors.white,
                        fontWeight: 700,
                        letterSpacing: 2,
                      }}
                    />

                    <Box
                      sx={{
                        mt: 3,
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: 4,
                        bgcolor: alpha(brandColors.white, 0.12),
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Icon size={42} />
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="overline" sx={{ color: alpha(brandColors.white, 0.6) }}>
                      {t('Status')}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                      {t(code)}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* RIGHT CONTENT */}
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', letterSpacing: 3 }}
                >
                  {t('Status Update')}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                  }}
                >
                  {t(title)}
                </Typography>

                <Typography sx={{ mt: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                  {t(message)}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: 'wrap' }}>
                  {primaryAction && (
                    <Button
                      to={primaryAction.to}
                      href={primaryAction.href}
                      onClick={primaryAction.onClick}
                      size="lg"
                      variant={primaryAction.variant ?? 'dark'}
                    >
                      {t(primaryAction.label)}
                    </Button>
                  )}

                  {secondaryAction && (
                    <Button
                      to={secondaryAction.to}
                      href={secondaryAction.href}
                      onClick={secondaryAction.onClick}
                      size="lg"
                      variant={secondaryAction.variant ?? 'outline'}
                    >
                      {t(secondaryAction.label)}
                    </Button>
                  )}
                </Stack>

                {note && (
                  <Paper
                    elevation={0}
                    sx={{
                      mt: 5,
                      p: 2.5,
                      borderRadius: 4,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '25%',
                          bgcolor: 'action.hover',
                          display: 'flex',
                        }}
                      >
                        <RefreshCcw size={18} />
                      </Box>

                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {t(note)}
                      </Typography>
                    </Stack>
                  </Paper>
                )}
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
