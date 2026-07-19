import { Box, Paper, Typography } from '@mui/material'
import { GraduationCap, Lightbulb, BookOpen, FlaskConical } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import siteConfig from '../../data/siteConfig'
import { BRAND_NEUTRALS } from '../../constants/brand'

const pillars = [
  { icon: GraduationCap, label: 'Teacher Training' },
  { icon: Lightbulb, label: 'Innovation Lab' },
  { icon: BookOpen, label: 'Teaching Methodology' },
  { icon: FlaskConical, label: 'Curriculum R&D' },
]

export default function InnovationCentre() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: BRAND_NEUTRALS.sectionSoft }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, alignItems: 'center', gap: 6 }}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow={`${siteConfig.shortName} Innovation Centre`}
              title="Where our curriculum is built, tested and refined"
              subtitle="A team of academicians, technologists and subject experts work year-round so every classroom benefits from the latest in pedagogy and educational research."
            />
            <Button to="/why-us#curriculum" variant="dark" sx={{ mt: 3.5 }}>
              Explore the Innovation Centre
            </Button>
          </RevealOnScroll>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 2.5 }}>
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.label} delay={i * 90}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, p: 3.5, textAlign: 'center', boxShadow: 2 }}>
                  <Box sx={{ display: 'flex', width: 56, height: 56, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'primary.main', color: 'secondary.main' }}>
                    <p.icon size={24} />
                  </Box>
                  <Typography sx={{ color: 'primary.light', fontSize: '0.9rem', fontWeight: 700 }}>{p.label}</Typography>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
