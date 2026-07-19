import { Box, Paper, Typography } from '@mui/material'
import { Award, ArrowRightLeft, Wallet } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Card from '../components/ui/Card'
import EnquiryFormFields from '../components/forms/EnquiryFormFields'
import admissionSteps, { feeStructureNote } from '../data/admissionSteps'
import siteConfig from '../data/siteConfig'

export default function Admissions() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        eyebrow="Join Airforce School"
        title="Admissions Open for AY 2026–27"
        subtitle="A simple, transparent process from your first enquiry to your child's first day."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <RevealOnScroll>
            <SectionHeading eyebrow="How It Works" title="The Admissions Process" align="center" />
          </RevealOnScroll>

          <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 3 }}>
            {admissionSteps.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 80}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <Box sx={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'secondary.main', color: '#fff', fontSize: '0.9rem', fontWeight: 800 }}>
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
        </Container>
      </Box>

      <Box component="section" id="fees" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#e8f1f6' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            <RevealOnScroll>
              <Card sx={{ height: '100%', p: 3.5 }}>
                <Wallet size={32} color="#d97a2e" />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Fee Structure</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{feeStructureNote}</Typography>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={90}>
              <Card id="transfer" sx={{ height: '100%', p: 3.5 }}>
                <ArrowRightLeft size={32} color="#d97a2e" />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Inter-Network Transfer</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Relocating cities? Transfer your child to any {siteConfig.brandName} campus with minimal
                  paperwork and continuity of curriculum.
                </Typography>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <Card id="scholarship" sx={{ height: '100%', p: 3.5 }}>
                <Award size={32} color="#d97a2e" />
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>Scholarship Programme</Typography>
                <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Merit and need-based scholarships are available at select campuses for defence personnel's
                  children and outstanding achievers.
                </Typography>
              </Card>
            </RevealOnScroll>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 3fr' }, gap: 6 }}>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Start Today"
                title="Begin your child's application"
                subtitle="Tell us a little about your child and preferred campus and we will take it from there."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <Paper sx={{ p: { xs: 3, sm: 4 }, borderRadius: 1, boxShadow: 5 }}>
                <EnquiryFormFields context="Admissions Enquiry" />
              </Paper>
            </RevealOnScroll>
          </Box>
        </Container>
      </Box>
    </>
  )
}
