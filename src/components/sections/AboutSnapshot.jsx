import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import stats from '../../data/stats'
import siteConfig from '../../data/siteConfig'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { alpha, useTheme } from '@mui/material/styles'
import Grid from '../ui/Grid'
import { brandColors } from '../../theme/colorTokens'

export default function AboutSnapshot() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      id="about-snapshot"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        color: brandColors.white,
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="flex-start">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <RevealOnScroll>
              <SectionHeading
                eyebrow={`${siteConfig.brandName} ${siteConfig.brandSuffix}`}
                title="More than grades — we build well-rounded human beings"
                tone="light"
              />

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 520,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: alpha(brandColors.white, 0.8),
                }}
              >
                Since {siteConfig.yearFounded}, {siteConfig.brandName} {siteConfig.brandSuffix} has grown into one
                of the country's most trusted school networks. Our aim has never been just to impart knowledge — it
                is to foster responsible, well-rounded, lifelong learners who go on to contribute positively to
                society.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Button to="/about" variant="light">
                  Read Our Story
                </Button>
              </Box>
            </RevealOnScroll>
          </Grid>

          {/* RIGHT STATS GRID */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {stats.map((stat, i) => (
                <Grid item xs={6} key={stat.label}>
                  <RevealOnScroll delay={i * 80}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        bgcolor: alpha(brandColors.white, 0.06),
                        border: `1px solid ${alpha(brandColors.white, 0.12)}`,
                        backdropFilter: 'blur(10px)',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          bgcolor: alpha(brandColors.white, 0.09),
                        },
                      }}
                    >
                      <StatCounter {...stat} tone="light" />
                    </Paper>
                  </RevealOnScroll>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
