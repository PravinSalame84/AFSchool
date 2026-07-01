import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  alpha,
} from '@mui/material'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'

import {
  GraduationCap,
  Lightbulb,
  BookOpen,
  FlaskConical,
} from 'lucide-react'

import { useTheme } from '@mui/material/styles'
import siteConfig from '../../data/siteConfig'
import { brandColors } from '../../theme/colorTokens'
import { useLocale } from '../../context/LocaleContext'

const pillars = [
  { icon: GraduationCap, label: 'Teacher Training' },
  { icon: Lightbulb, label: 'Innovation Lab' },
  { icon: BookOpen, label: 'Teaching Methodology' },
  { icon: FlaskConical, label: 'Curriculum R&D' },
]

export default function InnovationCentre() {
  const theme = useTheme()
  const { localize, t } = useLocale()
  const localizedSiteConfig = localize(siteConfig)
  const localizedPillars = localize(pillars)

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg,
          ${alpha(brandColors.navyAlt, 0.98)},
          ${alpha('#123A63', 0.92)}
        )`,
        color: brandColors.white,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: alpha(brandColors.orangeSoft, 0.9), letterSpacing: 2 }}
            >
              {localizedSiteConfig.shortName} {t('Innovation Centre')}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 1.5,
                lineHeight: 1.1,
              }}
            >
              {t('Where curriculum is built, tested and refined')}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: alpha('#ffffff', 0.75),
                lineHeight: 1.7,
                fontSize: '0.95rem',
              }}
            >
              {t('A team of academicians, technologists and subject experts work year-round so every classroom benefits from modern pedagogy, structured learning systems and continuous improvement.')}
            </Typography>

            <Button
              variant="contained"
              href="/why-us#curriculum"
              sx={{
                mt: 4,
                px: 4,
                py: 1.3,
                fontWeight: 700,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #FFB74D, #F57C00)',
                boxShadow: '0 10px 25px rgba(245, 124, 0, 0.25)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ffa726, #ef6c00)',
                },
              }}
            >
              {t('Explore Innovation Centre')}
            </Button>
          </Grid>

          {/* RIGHT GRID */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {localizedPillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <Grid item xs={6} key={p.label}>
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        borderRadius: 4,
                        background: alpha('#ffffff', 0.08),
                        backdropFilter: 'blur(14px)',
                        border: `1px solid ${alpha('#ffffff', 0.12)}`,
                        transition: '0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          background: alpha('#ffffff', 0.12),
                        },
                      }}
                    >
                      <CardContent>
                        <Stack spacing={2} alignItems="center">
                          
                          {/* ICON WRAPPER */}
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '25%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: alpha(brandColors.orangeSoft, 0.15),
                              color: brandColors.orangeSoft,
                            }}
                          >
                            <Icon size={22} />
                          </Box>

                          {/* LABEL */}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 700,
                              color: brandColors.white,
                              textTransform: 'uppercase',
                              letterSpacing: 0.6,
                            }}
                          >
                            {p.label}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
