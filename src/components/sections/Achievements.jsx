import { Box, Paper, Typography } from '@mui/material'
import { Award } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Carousel from '../ui/Carousel'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import achievements from '../../data/achievements'
import { BRAND_ALPHA, BRAND_NEUTRALS, SECTION_BACKGROUNDS } from '../../constants/brand'

export default function Achievements() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: SECTION_BACKGROUNDS.mist,
        background:
          'radial-gradient(circle at top left, rgba(255,214,128,0.2), transparent 22%), linear-gradient(180deg, #fffef8 0%, #f8fbff 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Recognition"
            title="Our Achievements"
            subtitle="We're honoured to be recognised for our commitment to quality, year after year."
            align="center"
          />
        </RevealOnScroll>

        <Box sx={{ mt: 5 }}>
          <Carousel ariaLabel="Awards and achievements">
            {achievements.map((item) => (
              <Box key={item.title} data-carousel-item sx={{ width: { xs: 260, sm: 300 }, flexShrink: 0, scrollSnapAlign: 'start' }}>
                <Paper
                  sx={{
                    position: 'relative',
                    p: 3,
                    borderRadius: '1.8rem',
                    boxShadow: `0 24px 60px -36px ${BRAND_ALPHA.ink2}`,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,248,231,0.95) 100%)',
                    border: '1px solid rgba(255,201,108,0.22)',
                    backdropFilter: 'blur(18px)',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: -18,
                      right: -18,
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255,178,44,0.18), transparent 70%)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', width: 54, height: 54, alignItems: 'center', justifyContent: 'center', borderRadius: '18px 18px 18px 6px', bgcolor: BRAND_ALPHA.accent18, color: 'secondary.dark' }}>
                    <Award size={24} />
                  </Box>
                  <Typography sx={{ mt: 2, color: 'secondary.dark', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.year}</Typography>
                  <Typography sx={{ mt: 0.75, color: 'primary.main', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4 }}>{item.title}</Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.75rem' }}>{item.org}</Typography>
                </Paper>
              </Box>
            ))}
          </Carousel>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button to="/about#awards" variant="outline">
            View All Achievements
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
