import { Box, Paper, Typography } from '@mui/material'
import { Award } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Carousel from '../ui/Carousel'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import achievements from '../../data/achievements'

export default function Achievements() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
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
                    p: 3,
                    borderRadius: 1,
                    boxShadow: '0 24px 60px -36px rgba(17,26,36,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.58)',
                    border: '1px solid rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <Box sx={{ display: 'flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', bgcolor: 'rgba(240,147,75,0.18)', color: 'secondary.dark' }}>
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
