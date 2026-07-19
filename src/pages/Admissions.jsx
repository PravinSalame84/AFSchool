import { Box, Paper, Typography } from '@mui/material'
import { Award, ArrowRightLeft, Wallet } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Card from '../components/ui/Card'
import EnquiryFormFields from '../components/forms/EnquiryFormFields'
import admissionSteps, { feeStructureNote } from '../data/admissionSteps'
import siteConfig from '../data/siteConfig'
import appContent from '../data/appContent'
import { BRAND_NEUTRALS } from '../constants/brand'

export default function Admissions() {
  return (
    <>
      <PageHero {...appContent.pageHeroes.admissions} />

      <Section>
          <RevealOnScroll>
            <SectionHeading {...appContent.sections.admissions.process} align="center" />
          </RevealOnScroll>

          <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 3 }}>
            {admissionSteps.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Box sx={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'secondary.main', color: BRAND_NEUTRALS.whiteSoft, fontSize: '0.9rem', fontWeight: 800 }}>
                    {s.step}
                  </Box>
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '0.95rem', fontWeight: 700 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                    {s.description}
                  </Typography>
                </Card>
              </RevealOnScroll>
            ))}
          </Box>
      </Section>

      <Section id="fees" background="soft">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            <RevealOnScroll>
              <Card sx={{ height: '100%', p: 3.5 }}>
                <Wallet size={32} color={BRAND_NEUTRALS.accentStrong} />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Fee Structure</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{feeStructureNote}</Typography>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={90}>
              <Card id="transfer" sx={{ height: '100%', p: 3.5 }}>
                <ArrowRightLeft size={32} color={BRAND_NEUTRALS.accentStrong} />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Inter-Network Transfer</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Relocating cities? Transfer your child to any {siteConfig.brandName} campus with minimal
                  paperwork and continuity of curriculum.
                </Typography>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <Card id="scholarship" sx={{ height: '100%', p: 3.5 }}>
                <Award size={32} color={BRAND_NEUTRALS.accentStrong} />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Scholarship Programme</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Merit and need-based scholarships are available at select campuses for defence personnel's
                  children and outstanding achievers.
                </Typography>
              </Card>
            </RevealOnScroll>
          </Box>
      </Section>

      <Section>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 3fr' }, gap: 6 }}>
            <RevealOnScroll>
              <SectionHeading {...appContent.sections.admissions.enquiry} />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <Paper sx={{ p: { xs: 3, sm: 4 }, borderRadius: 1, boxShadow: 5 }}>
                <EnquiryFormFields context="Admissions Enquiry" />
              </Paper>
            </RevealOnScroll>
          </Box>
      </Section>
    </>
  )
}
