import { Box, Paper, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import campusLifeContent from '../../data/campusLifeContent'
import { BRAND_ALPHA } from '../../constants/brand'

function GalleryTrack({ items, speed = 42 }) {
  const loopItems = [...items, ...items]

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 1.6, sm: 2, lg: 2.4 },
          width: 'max-content',
          animation: `schoolGalleryScroll ${speed}s linear infinite`,
          '@keyframes schoolGalleryScroll': {
            from: { transform: 'translate3d(0, 0, 0)' },
            to: { transform: 'translate3d(-50%, 0, 0)' },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {loopItems.map((item, index) => (
          <Paper
            key={`${item.title}-${index}`}
            sx={{
              width: { xs: 280, sm: 320, lg: 360 },
              minWidth: { xs: 280, sm: 320, lg: 360 },
              overflow: 'hidden',
              borderRadius: '1rem',
              border: `2px solid ${BRAND_ALPHA.accent12}`,
              backgroundColor: 'rgba(255,255,255,0.88)',
              boxShadow: '0 22px 50px -38px rgba(17,26,36,0.28)',
              backdropFilter: 'blur(16px)',
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: '100%',
                height: { xs: 220, sm: 240, lg: 250 },
                display: 'block',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ p: { xs: 1.6, sm: 1.8 } }}>
              <Typography sx={{ color: 'primary.main', fontSize: '1rem', fontWeight: 700, lineHeight: 1.35 }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 0.9, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.72 }}>
                {item.caption}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default function SchoolGalleryShowcase() {
  const items = campusLifeContent.schoolGallery

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top right, rgba(127,212,178,0.22), transparent 28%), linear-gradient(180deg, #e8f8f2 0%, #f6fbf8 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="School Gallery"
            title="Campus spaces, activities and celebrations that reflect the spirit of Air Force School"
            subtitle="From creative learning spaces to sports, celebrations and green initiatives, these moments highlight the vibrant culture of the school."
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <Paper
            sx={{
              mt: 5,
              p: { xs: 1.4, sm: 1.8, lg: 2.1 },
              borderRadius: '2rem',
              backgroundColor: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.94)',
              boxShadow: '0 28px 64px -40px rgba(17,26,36,0.26)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <GalleryTrack items={items} speed={42} />
          </Paper>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
