import { Box, Paper, Typography } from '@mui/material'
import { Quote, Leaf, HeartHandshake, Users2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import StatCounter from '../components/ui/StatCounter'
import Initiatives from '../components/sections/Initiatives'
import Achievements from '../components/sections/Achievements'
import FAQSection from '../components/sections/FAQSection'
import stats from '../data/stats'
import siteConfig from '../data/siteConfig'

const outreachPrograms = [
  { icon: Leaf, title: 'Green Campus Initiative', description: 'Student-led recycling, composting and tree-planting drives across every campus.' },
  { icon: HeartHandshake, title: 'Scholarship & Access Fund', description: 'Need-based scholarships that have supported over 4,000 students since inception.' },
  { icon: Users2, title: 'Community Learning Days', description: 'Free weekend workshops opening our labs and libraries to neighbourhood children.' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={`About ${siteConfig.brandName} ${siteConfig.brandSuffix}`}
        subtitle={`Established in ${siteConfig.yearFounded}, ${siteConfig.brandName} is registered with Indian Air Force Educational and Cultural Society New Delhi. The school serves students from LKG to IX with smart classrooms, child-friendly spaces, activity rooms, laboratories, library access, sports facilities and a strong culture of holistic growth.`}
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 6 }}>
            <RevealOnScroll>
              <SectionHeading eyebrow="Who We Are" title="A network built one classroom at a time" />
              <Box sx={{ mt: 2.5, display: 'grid', gap: 2, color: 'text.secondary' }}>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.85 }}>
                  What began as a single campus in {siteConfig.yearFounded} has grown into a nationwide network
                  spanning {stats[1].value} owned campuses and {stats[2].value}+ partner schools, educating more
                  than two hundred thousand students every year.
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.85 }}>
                  Our mission has stayed constant even as we have grown: to foster responsible, well-rounded,
                  lifelong learners, not just strong exam results. That means equal investment in academics, arts,
                  sport, emotional wellbeing and real-world skills.
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.85 }}>
                  Every campus operates under shared academic standards and curriculum support from our central
                  innovation ecosystem while staying rooted in its own local community.
                </Typography>
              </Box>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <Paper
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 3,
                  p: { xs: 3, sm: 4 },
                  borderRadius: 1,
                  bgcolor: 'primary.main',
                  boxShadow: '0 28px 70px -34px rgba(12,24,41,0.45)',
                }}
              >
                {stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} tone="light" />
                ))}
              </Paper>
            </RevealOnScroll>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="message" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#e8f1f6' }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, lg: 4 }, textAlign: 'center' }}>
          <RevealOnScroll>
            <Box sx={{ display: 'inline-flex', width: 64, height: 64, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'rgba(240,147,75,0.14)', color: 'secondary.main' }}>
              <Quote size={28} />
            </Box>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: { xs: '1.25rem', sm: '1.65rem' }, fontWeight: 600, fontStyle: 'italic', lineHeight: 1.7 }}>
              "Education is not about filling a vessel, it is about lighting a fire. Every decision we make, from
              curriculum design to classroom layout, starts with the question: will this help a child think for
              themselves?"
            </Typography>
            <Typography sx={{ mt: 3, color: 'primary.main', fontSize: '0.9rem', fontWeight: 800 }}>
              Dr. Meera Kapoor
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
              Chairperson, {siteConfig.brandName} {siteConfig.brandSuffix}
            </Typography>
          </RevealOnScroll>
        </Container>
      </Box>

      <Box id="initiatives">
        <Initiatives />
      </Box>

      <Box id="awards">
        <Achievements />
      </Box>

      <Box component="section" id="outreach" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#e8f1f6' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Giving Back"
              title="Social Outreach"
              subtitle="Education works best when it reaches beyond our own gates."
              align="center"
            />
          </RevealOnScroll>
          <Box sx={{ mt: 5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 3 }}>
            {outreachPrograms.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <Paper sx={{ height: '100%', p: 3.5, borderRadius: 1, boxShadow: 2 }}>
                  <p.icon size={32} color="#d97a2e" />
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1rem', fontWeight: 700 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>
                    {p.description}
                  </Typography>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>
        </Container>
      </Box>

      <FAQSection />
    </>
  )
}
