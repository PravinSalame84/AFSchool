import {
  Quote } from 'lucide-react'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material'

import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import testimonials from '../data/testimonials'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import { brandColors } from '../theme/colorTokens'
import { useLocale } from '../context/LocaleContext'

export default function Alumni() {
  const { openEnquiry } = useEnquiryModal()
  const theme = useTheme()
  const { localize, t } = useLocale()
  const localizedTestimonials = localize(testimonials)

  return (
    <>
      <PageHero
        crumb="Alumni"
        eyebrow="Stay Connected"
        title="The Airforce School Alumni Community"
        subtitle="Thousands of graduates, one shared foundation."
      />

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          {/* Testimonials Grid */}
          <Grid container spacing={3}>
            {localizedTestimonials.map((item, i) => (
              <Grid item xs={12} sm={6} key={item.name}>
                <RevealOnScroll delay={i * 80}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      height: '100%',
                      border: `1px solid ${alpha('#1d213c', 0.08)}`,
                      transition: '0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Quote size={22} color={theme.palette.secondary.main} />

                      <Typography
                        sx={{
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: 'text.primary',
                        }}
                      >
                        “{item.quote}”
                      </Typography>

                      <Box>
                        <Typography fontWeight={800}>{item.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.batch}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </RevealOnScroll>
              </Grid>
            ))}
          </Grid>

          {/* CTA Section */}
          <RevealOnScroll delay={200}>
            <Paper
              elevation={0}
              sx={{
                mt: 8,
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                textAlign: 'center',
                background: 'linear-gradient(135deg,#1d213c,#2a3946)',
                color: brandColors.white,
              }}
            >
              <SectionHeading
                title={t('Are you an Airforce School graduate?')}
                subtitle={t('Join the alumni network to stay connected, mentor students, and attend reunions.')}
                align="center"
                tone="light"
              />

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  borderRadius: 4,
                  fontWeight: 700,
                  background: 'linear-gradient(90deg,#ffd707,#e7ab33)',
                  color: '#1d213c',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    filter: 'brightness(1.05)',
                  },
                }}
                onClick={() => openEnquiry('Alumni Sign-up')}
              >
                {t('Join the Alumni Network')}
              </Button>
            </Paper>
          </RevealOnScroll>
        </Container>
      </Box>
    </>
  )
}
