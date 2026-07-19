import { Box, Paper, Typography } from '@mui/material'
import { Quote } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Button from '../components/ui/Button'
import testimonials from '../data/testimonials'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import appContent from '../data/appContent'

export default function Alumni() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <>
      <PageHero {...appContent.pageHeroes.alumni} />

      <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 90}>
                <Paper sx={{ height: '100%', p: 3.5, borderRadius: 1, boxShadow: 2 }}>
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
            <Paper sx={{ mt: 7, borderRadius: 1, bgcolor: 'primary.main', p: { xs: 4, sm: 5 }, textAlign: 'center', boxShadow: 5 }}>
              <SectionHeading
                title={appContent.sections.alumni.ctaTitle}
                subtitle={appContent.sections.alumni.ctaSubtitle}
                align="center"
                tone="light"
              />
              <Button variant="primary" sx={{ mt: 3.5 }} onClick={() => openEnquiry('Alumni Sign-up')}>
                Join the Alumni Network
              </Button>
            </Paper>
          </RevealOnScroll>
      </Section>
    </>
  )
}
