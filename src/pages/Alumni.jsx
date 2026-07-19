import { Box, Paper, Typography } from '@mui/material'
import { Quote } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import testimonials from '../data/testimonials'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Alumni() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <>
      <PageHero
        crumb="Alumni"
        eyebrow="Stay Connected"
        title="The Airforce School Alumni Community"
        subtitle="Thousands of graduates, one shared foundation. Hear what life after Airforce School looks like."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 90}>
                <Paper sx={{ height: '100%', p: 3.5, borderRadius: 4, boxShadow: 2 }}>
                  <Quote size={28} color="#f0934b" />
                  <Typography sx={{ mt: 2, color: 'primary.light', fontSize: '0.95rem', lineHeight: 1.8 }}>
                    "{t.quote}"
                  </Typography>
                  <Typography sx={{ mt: 2.5, color: 'primary.main', fontSize: '0.9rem', fontWeight: 800 }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>{t.batch}</Typography>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>

          <RevealOnScroll delay={200}>
            <Paper sx={{ mt: 7, borderRadius: 5, bgcolor: 'primary.main', p: { xs: 4, sm: 5 }, textAlign: 'center', boxShadow: 5 }}>
              <SectionHeading
                title="Are you a Airforce School graduate?"
                subtitle="Join the alumni network to stay in touch with classmates, mentor current students, and hear about reunions first."
                align="center"
                tone="light"
              />
              <Button variant="primary" sx={{ mt: 3.5 }} onClick={() => openEnquiry('Alumni Sign-up')}>
                Join the Alumni Network
              </Button>
            </Paper>
          </RevealOnScroll>
        </Container>
      </Box>
    </>
  )
}
