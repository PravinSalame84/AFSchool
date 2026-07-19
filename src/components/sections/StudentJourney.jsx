import { Box, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import BlobIcon from '../ui/BlobIcon'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import studentJourney from '../../data/studentJourney'

export default function StudentJourney() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="A Glimpse Into Campus Life"
            title="A Airforce School education adapts to become whatever your child needs"
            align="center"
          />
        </RevealOnScroll>

        <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {studentJourney.map((item, i) => (
            <RevealOnScroll key={item.title} delay={(i % 3) * 90}>
              <Card sx={{ height: '100%', p: 3.5 }}>
                <BlobIcon icon={item.icon} tone={i % 2 === 0 ? 'primary' : 'accent'} blobIndex={i} size={76} />
                <Typography sx={{ mt: 2.5, color: 'primary.main', fontSize: '1.125rem', fontWeight: 700 }}>{item.title}</Typography>
                <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.description}</Typography>
              </Card>
            </RevealOnScroll>
          ))}
        </Box>

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button to="/why-us" variant="dark">
            Enter the Student Journey
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
