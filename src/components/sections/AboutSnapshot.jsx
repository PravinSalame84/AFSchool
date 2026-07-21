import { Box, Typography } from '@mui/material'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import StatCounter from '../ui/StatCounter'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import OptimizedImage from '../ui/OptimizedImage'
import stats from '../../data/stats'
import siteConfig from '../../data/siteConfig'
import { campusImages, sharedImages } from '../../assets/images'
import schoolContent from '../../data/schoolContent'

export default function AboutSnapshot() {
  return (
    <Box
      component="section"
      id="about-snapshot"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 6, lg: 8 },
        background:
          'linear-gradient(180deg, #fffaf0 0%, #fff3dc 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 40,
          right: -30,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,183,54,0.18), transparent 66%)',
        },
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, alignItems: 'start', gap: 6 }}>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: -6, md: -14 },
                top: { xs: -6, md: -14 },
                width: '100%',
                height: '100%',
                borderRadius: '2rem',
                background: 'linear-gradient(135deg, #ffd24d 0%, #ffa24c 100%)',
                transform: 'rotate(-3deg)',
              }}
            />
            <OptimizedImage
              src={sharedImages.teacherImageFour}
              alt="Student classroom activity at Air Force School"
              sx={{ position: 'relative', width: '100%', borderRadius: '2rem', boxShadow: 5, border: '8px solid rgba(255,255,255,0.8)' }}
            />
          </Box>
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Air Force School VayuSena Nagar"
              title="More than grades, the school builds humility, confidence and character"
            />
            <Typography sx={{ mt: 3, maxWidth: 640, fontSize: '0.95rem', lineHeight: 1.9,  }}> {/**color: 'rgba(215,239,246,0.8)' */}
              Since {siteConfig.yearFounded}, {siteConfig.brandName} {siteConfig.brandSuffix} has grown into one
              of the country's most trusted school networks. Our aim has never been just to impart knowledge — it
              is to foster responsible, well-rounded, lifelong learners who go on to contribute positively to
              society.
            </Typography>
            {/* <Typography sx={{ mt: 3, maxWidth: 640, fontSize: '0.95rem', lineHeight: 1.9, color: 'text.secondary' }}>
              {schoolContent.about.narrative}
            </Typography>
            <Typography sx={{ mt: 1.6, maxWidth: 640, fontSize: '0.95rem', lineHeight: 1.9, color: 'text.secondary' }}>
              {schoolContent.about.extended}
            </Typography> */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gapX: 4,
                gapY: { xs: 5, sm: 6 },
                my: 1,
                p: { xs: 2.2, sm: 3 },
                borderRadius: '1.9rem',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,248,233,0.92) 100%)',
                border: '1px solid rgba(255,196,72,0.22)',
                backdropFilter: 'blur(18px)',
              }}
            >
              {stats.map((stat, i) => (
                <RevealOnScroll key={stat.label} delay={i * 90}>
                  <StatCounter {...stat} tone="dark" />
                </RevealOnScroll>
              ))}
            </Box>
            <Button to="/about" variant="light" sx={{ mt: 2.5 }}>
              Read Our Story
            </Button>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  )
}
