import { Box, Paper, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import campusLifeContent from '../../data/campusLifeContent'

function GalleryColumn({ items, duration = '20s', reverse = false }) {
  const animationName = reverse ? 'schoolGalleryFloatReverse' : 'schoolGalleryFloat'

  return (
    <Box sx={{ overflow: 'hidden', height: { xs: 420, md: 520 } }}>
      <Box
        sx={{
          display: 'grid',
          gap: 2.2,
          animation: `${animationName} ${duration} linear infinite`,
          '@keyframes schoolGalleryFloat': {
            from: { transform: 'translateY(0%)' },
            to: { transform: 'translateY(-22%)' },
          },
          '@keyframes schoolGalleryFloatReverse': {
            from: { transform: 'translateY(-22%)' },
            to: { transform: 'translateY(0%)' },
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <Paper
            key={`${item.title}-${index}`}
            sx={{
              p: 1.2,
              borderRadius: '1.7rem',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.82)',
              boxShadow: '0 22px 50px -38px rgba(17,26,36,0.28)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: '100%',
                height: { xs: 210, md: 230 },
                objectFit: 'cover',
                borderRadius: '1.2rem',
              }}
            />
            <Box sx={{ p: 1.4 }}>
              <Typography sx={{ color: 'primary.main', fontSize: '1rem', fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 0.9, color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.7 }}>
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
  const firstColumn = campusLifeContent.schoolGallery.slice(0, 3)
  const secondColumn = campusLifeContent.schoolGallery.slice(3)

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          'radial-gradient(circle at top right, rgba(127,212,178,0.22), transparent 28%), linear-gradient(180deg, #e8f8f2 0%, #f6fbf8 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="School Gallery"
            title="An animated campus gallery with a Pinterest-inspired flow"
            subtitle="Positioned below the student section with continuous motion so the school atmosphere feels lively, visual and memorable."
            align="center"
          />
        </RevealOnScroll>

        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 2.5,
          }}
        >
          <RevealOnScroll delay={80}>
            <GalleryColumn items={firstColumn} duration="20s" />
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <GalleryColumn items={secondColumn} duration="24s" reverse />
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  )
}
