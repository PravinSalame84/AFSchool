import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  alpha,
} from '@mui/material'
import Grid from '../ui/Grid'
import Stack from '../ui/Stack'

import studentJourney from '../../data/studentJourney'
import { brandColors, gradientTokens, studentJourneyColors } from '../../theme/colorTokens'
import { useLocale } from '../../context/LocaleContext'

const colors = studentJourneyColors

export default function StudentJourney() {
  const { localize, t } = useLocale()
  const localizedStudentJourney = localize(studentJourney)

  return (
    <Box
      component="section"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.92)} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`
            : 'linear-gradient(180deg, #F5FAFF 0%, #EEF6FF 100%)',
      })}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Typography
          align="center"
          variant="overline"
          sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 2 }}
        >
          {t('A Glimpse Into Campus Life')}
        </Typography>

        <Typography
          align="center"
          variant="h4"
          sx={{
            fontWeight: 800,
            mt: 1,
            maxWidth: 800,
            mx: 'auto',
            color: 'text.primary',
            lineHeight: 1.2,
            fontSize: { xs: '1.8rem', sm: '2.125rem' },
          }}
        >
          {t('An Air Force School education adapts to become whatever your child needs')}
        </Typography>

        {/* GRID */}
        <Grid container spacing={3} sx={{ mt: 6 }}>
          {localizedStudentJourney.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 1,
                  background: 'background.paper',
                  border: (theme) => `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.18 : 0.08)}`,
                  transition: '0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(11, 31, 58, 0.12)',
                  },
                }}
              >
                <CardContent>

                  {/* ICON PLACEHOLDER (BlobIcon replacement style) */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '25%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: alpha(colors[i % colors.length], 0.12),
                      color: colors[i % colors.length],
                      mb: 2,
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* TITLE */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: 'text.primary',
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1.5,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>

                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Stack alignItems="center" sx={{ mt: 6 }}>
          <Button
            variant="contained"
            href="/why-us"
            sx={{
              px: { xs: 2.5, sm: 4 },
              py: 1.3,
              fontWeight: 700,
              borderRadius: 4,
              width: { xs: '100%', sm: 'auto' },
              background: gradientTokens.navyButton,
              '&:hover': {
                background: gradientTokens.navyButtonHover,
              },
            }}
          >
            {t('Enter the Student Journey')}
          </Button>
        </Stack>

      </Container>
    </Box>
  )
}
