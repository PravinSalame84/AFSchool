import { Box, Link, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import BlobIcon from '../ui/BlobIcon'
import Carousel from '../ui/Carousel'
import RevealOnScroll from '../ui/RevealOnScroll'
import initiatives from '../../data/initiatives'
import { BRAND_NEUTRALS } from '../../constants/brand'

const iconForImage = {
  campus: 'Building2',
  partnership: 'Handshake',
  preschool: 'School',
  toddler: 'Baby',
  college: 'GraduationCap',
  training: 'Lightbulb',
  tours: 'Plane',
}

export default function Initiatives() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: BRAND_NEUTRALS.sectionSoft }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Airforce School Initiatives"
            subtitle="A family of ventures, each built to support a different stage of the learning journey."
          />
        </RevealOnScroll>

        <Box sx={{ mt: 5 }}>
          <Carousel ariaLabel="Airforce School initiatives">
            {initiatives.map((item) => (
              <Box key={item.title} data-carousel-item sx={{ width: { xs: 280, sm: 320 }, flexShrink: 0, scrollSnapAlign: 'start' }}>
                <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column', p: 3.5 }}>
                  <BlobIcon icon={iconForImage[item.image] || 'Sparkles'} tone="primary" size={72} />
                  <Typography sx={{ mt: 2.5, color: 'primary.main', fontSize: '1rem', fontWeight: 700 }}>{item.title}</Typography>
                  <Typography sx={{ mt: 1.5, flex: 1, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.description}</Typography>
                  <Link href={item.href} underline="hover" sx={{ mt: 2, color: 'secondary.dark', fontSize: '0.9rem', fontWeight: 700 }}>
                    Read More →
                  </Link>
                </Card>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  )
}
