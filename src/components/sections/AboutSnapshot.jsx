import { Box, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import stats from '../../data/stats'
import siteConfig from '../../data/siteConfig'

export default function AboutSnapshot() {
  return (
    <Box
      component="section"
      id="about-snapshot"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          'linear-gradient(180deg, rgba(17,26,36,0.96) 0%, rgba(35,58,75,0.92) 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, alignItems: 'start', gap: 6 }}>
          <Box component="img" src="/media/school/teacher4.png" alt="About Snapshot" sx={{ width: '100%', borderRadius: 1, boxShadow: 5 }} />
          <RevealOnScroll>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gapX: 4,
                gapY: { xs: 5, sm: 6 },
                mb: 3,
                p: { xs: 2.2, sm: 3 },
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(18px)',
              }}
            >
              {stats.map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 90}>
                  <StatCounter {...stat} tone="light" />
                </RevealOnScroll>
              ))}
            </Box>
            <SectionHeading
              eyebrow={`${siteConfig.brandName} ${siteConfig.brandSuffix}`}
              title="More than grades — we build well-rounded human beings"
              tone="light"
            />
            <Typography sx={{ mt: 3, maxWidth: 640, fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(215,239,246,0.8)' }}>
              Since {siteConfig.yearFounded}, {siteConfig.brandName} {siteConfig.brandSuffix} has grown into one
              of the country's most trusted school networks. Our aim has never been just to impart knowledge — it
              is to foster responsible, well-rounded, lifelong learners who go on to contribute positively to
              society.
            </Typography>
            <Button to="/about" variant="light" sx={{ mt: 3.5 }}>
              Read Our Story
            </Button>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  )
}
