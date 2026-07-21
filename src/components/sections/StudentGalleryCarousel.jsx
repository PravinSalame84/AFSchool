import { Box, Paper, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import campusLifeContent from '../../data/campusLifeContent'
import { BRAND_NEUTRALS } from '../../constants/brand'

function MotionRow({ items, reverse = false, speed = 24 }) {
  const animationName = reverse ? 'studentGalleryDriftReverse' : 'studentGalleryDrift'

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 1.4, sm: 2 },
          width: 'max-content',
          animation: `${animationName} ${speed}s linear infinite`,
          '@keyframes studentGalleryDrift': {
            from: { transform: 'translate3d(0, 0, 0)' },
            to: { transform: 'translate3d(-50%, 0, 0)' },
          },
          '@keyframes studentGalleryDriftReverse': {
            from: { transform: 'translate3d(-50%, 0, 0)' },
            to: { transform: 'translate3d(0, 0, 0)' },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <Paper
            key={`${item.name}-${index}`}
            sx={{
              position: 'relative',
              width: { xs: 210, sm: 250, lg: 280 },
              minWidth: { xs: 210, sm: 250, lg: 280 },
              overflow: 'hidden',
              borderRadius: '1.7rem',
              boxShadow: '0 24px 54px -34px rgba(17,26,36,0.34)',
              transform: {
                xs: 'none',
                sm: index % 3 === 0 ? 'translateY(20px)' : index % 3 === 1 ? 'translateY(-8px)' : 'translateY(10px)',
              },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: '100%',
                height: { xs: 260, sm: 310, lg: 340 },
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform .45s ease',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4,11,18,0.02) 30%, rgba(4,11,18,0.74) 100%)',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                p: 2,
                color: BRAND_NEUTRALS.white,
              }}
            >
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8e6ff' }}>
                Student Gallery
              </Typography>
              <Typography sx={{ mt: 0.7, fontSize: '1.08rem', fontWeight: 700 }}>
                {item.name}
              </Typography>
              <Typography sx={{ mt: 0.7, color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                {item.caption}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default function StudentGalleryCarousel() {
  const firstRow = campusLifeContent.studentGallery.slice(0, 4)
  const secondRow = campusLifeContent.studentGallery.slice(4)

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top left, rgba(255,149,77,0.18), transparent 24%), linear-gradient(180deg, #fff6ed 0%, #fffdfb 100%)',
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Student Gallery"
            title="A continuous moving gallery with a more Pinterest-style animation feel"
            subtitle="The student section now uses looping motion rows instead of a regular carousel so it feels more alive and closer to the reference animation."
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={90}>
          <Paper
            sx={{
              mt: 4,
              p: { xs: 1.6, sm: 2.2 },
              borderRadius: '2rem',
              backgroundColor: 'rgba(255,255,255,0.74)',
              border: '1px solid rgba(255,255,255,0.94)',
              boxShadow: '0 28px 64px -40px rgba(17,26,36,0.26)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <Box sx={{ display: 'grid', gap: { xs: 1.4, sm: 2.2 } }}>
              <MotionRow items={firstRow} speed={26} />
              <MotionRow items={secondRow} reverse speed={30} />
            </Box>
          </Paper>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
