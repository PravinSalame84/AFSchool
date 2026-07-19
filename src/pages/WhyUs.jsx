import { Box, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import BlobIcon from '../components/ui/BlobIcon'
import Button from '../components/ui/Button'
import whyUsTabs from '../data/whyUsTabs'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import appContent from '../data/appContent'
import { BRAND_NEUTRALS } from '../constants/brand'

export default function WhyUs() {
  const { hash } = useLocation()
  const [active, setActive] = useState(whyUsTabs[0].id)
  const { openEnquiry } = useEnquiryModal()

  useEffect(() => {
    const id = hash?.replace('#', '')
    if (id && whyUsTabs.some((t) => t.id === id)) setActive(id)
  }, [hash])

  const current = whyUsTabs.find((t) => t.id === active) || whyUsTabs[0]

  return (
    <>
      <PageHero {...appContent.pageHeroes.whyUs} />

      <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '280px 1fr' }, gap: 4 }}>
            <Box sx={{ display: 'flex', gap: 1.25, overflowX: 'auto', pb: 1, flexDirection: { lg: 'column' } }}>
              {whyUsTabs.map((tab) => (
                <Box
                  key={tab.id}
                  component="button"
                  onClick={() => setActive(tab.id)}
                  sx={{
                    flexShrink: 0,
                    border: 0,
                    borderRadius: 1,
                    px: 2.5,
                    py: 1.6,
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: active === tab.id ? BRAND_NEUTRALS.white : 'primary.light',
                    backgroundColor: active === tab.id ? 'primary.main' : BRAND_NEUTRALS.white,
                    boxShadow: active === tab.id ? 3 : 0,
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </Box>
              ))}
            </Box>

            <RevealOnScroll key={current.id}>
              <Paper sx={{ p: { xs: 3, sm: 4.5 }, borderRadius: 1, boxShadow: 5 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' }, alignItems: 'start', gap: 4 }}>
                  <BlobIcon icon="Lightbulb" tone="accent" size={88} />
                  <Box>
                    <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 700 }}>
                      {current.heading}
                    </Typography>
                    <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.85 }}>
                      {current.description}
                    </Typography>
                    <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
                      {current.points.map((point) => (
                        <Box key={point} sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: 'primary.main', fontSize: '0.9rem', fontWeight: 600 }}>
                          <CheckCircle2 size={16} color="#f0934b" /> {point}
                        </Box>
                      ))}
                    </Box>
                    <Button variant="primary" sx={{ mt: 3.5 }} onClick={() => openEnquiry('Admissions Enquiry')}>
                      {appContent.sections.whyUs.ctaLabel}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </RevealOnScroll>
          </Box>
      </Section>
    </>
  )
}
