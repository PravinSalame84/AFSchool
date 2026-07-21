import { Box, Chip, Paper, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'
import campusLifeContent from '../../data/campusLifeContent'
import { BRAND_ALPHA, BRAND_COLORS, BRAND_NEUTRALS } from '../../constants/brand'
// import SyncRoundedIcon from '@mui/icons-material/SyncRounded'

function RoundRobinTrack({ items, speed = 24 }) {
  const loopItems = [...items, ...items]

  return (
    <Box sx={{ overflow: 'hidden', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1.4, sm: 1.8, lg: 2.2 },
          width: 'max-content',
          animation: `studentGalleryRoundRobin ${speed}s linear infinite`,
          '@keyframes studentGalleryRoundRobin': {
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
            key={`${item.name}-${index}`}
            sx={{
              position: 'relative',
              width: { xs: 220, sm: 250, lg: 270 },
              minWidth: { xs: 220, sm: 250, lg: 270 },
              height: { xs: 320, sm: 360, lg: 390 },
              overflow: 'hidden',
              borderRadius: '50px',
              border: '8px solid rgba(255,255,255,0.72)',
              boxShadow: '0 24px 54px -34px rgba(17,26,36,0.34)',
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4,11,18,0.06) 34%, rgba(4,11,18,0.76) 100%)',
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
                backgroundColor: BRAND_ALPHA.black18,
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '1.02rem', fontWeight: 800, lineHeight: 1.2 }}>
                {item.name}
              </Typography>
              <Chip sx={{mt: 1, fontSize: '1rem'}} label={item.role} color='warning' />
              <Typography sx={{ height: 50, mt: 0.7, color: 'rgba(255,255,255,0.82)', fontSize: '0.8rem', lineHeight: 1.6 }}>
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
  const items = campusLifeContent.studentGallery

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
            title="Student life at Air Force School in moments of confidence, joy and participation"
            subtitle="A glimpse of our learners taking part in classroom experiences, co-curricular engagement, school events and daily campus life."
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
            <RoundRobinTrack items={items} speed={24} />
          </Paper>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}
