import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded'
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import { Box, Paper, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import campusLifeContent from '../data/campusLifeContent'
import schoolContent from '../data/schoolContent'
import { campusImages } from '../assets/images'

const focusAreas = [
  {
    icon: HistoryEduRoundedIcon,
    title: 'A legacy since 1968',
    description:
      'Air Force School, VayuSena Nagar, Nagpur has served generations of learners through a balanced culture of discipline, care and academic grounding.',
    value: '58+ years',
  },
  {
    icon: VisibilityRoundedIcon,
    title: 'Clear vision and mission',
    description:
      'The school focuses on inclusive education, values-led growth and practical learning that helps every child become capable and responsible.',
    value: 'LKG to IX',
  },
  {
    icon: MilitaryTechRoundedIcon,
    title: 'Air Force spirit',
    description:
      'A sense of order, dignity, punctuality and community service shapes the school experience in classrooms, assemblies and events.',
    value: 'CBSE 1130860',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About The School"
        crumb="About"
        title="A disciplined, caring and aspirational school community rooted in values"
        subtitle="The story of Air Force School VayuSena Nagar is built on humility, structure, service-minded values and a learning culture that has grown steadily since 1968."
        // image={sharedImages.teacherImageFour}
        image={campusImages.teacherMusic}
      />

      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' }, gap: 3 }}>
          <RevealOnScroll>
          <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontWeight: 800 }}>
            A campus designed for strong academics and confident character
          </Typography>
            <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.82 }}>
              {schoolContent.about.narrative}
            </Typography>
            <Typography sx={{ mt: 1.3, color: 'text.secondary', lineHeight: 1.82 }}>
              {schoolContent.about.extended}
            </Typography>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Paper
              sx={{
                p: { xs: 2.5, sm: 3.2 },
                borderRadius: '1.8rem',
                background: 'linear-gradient(135deg, #10324d 0%, #1f5a7d 100%)',
                color: '#fff',
              }}
            >
              <Typography sx={{ color: '#9fd6ff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Vision
              </Typography>
              <Typography sx={{ mt: 1, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                {schoolContent.about.vision}
              </Typography>
              <Typography sx={{ mt: 2.2, color: '#ffd48d', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Mission
              </Typography>
              <Typography sx={{ mt: 1, lineHeight: 1.8, color: 'rgba(255,255,255,0.82)' }}>
                {schoolContent.about.mission}
              </Typography>
            </Paper>
          </RevealOnScroll>
        </Box>
      </Section>

      <Section background="soft">
        <RevealOnScroll>
          <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.75rem', sm: '2.1rem' }, fontWeight: 800, textAlign: 'center' }}>
            School voice and guiding philosophy
          </Typography>
        </RevealOnScroll>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 2.2 }}>
          {campusLifeContent.leadershipVoices.map((voice, index) => (
            <RevealOnScroll key={voice.role} delay={index * 100}>
              <Paper
                sx={{
                  height: '100%',
                  p: { xs: 2.5, sm: 3.2 },
                  borderRadius: '1.8rem',
                  background: index === 0
                    ? 'linear-gradient(135deg, #fff3e5 0%, #ffffff 100%)'
                    : 'linear-gradient(135deg, #eaf6fd 0%, #ffffff 100%)',
                }}
              >
                <Typography sx={{ color: 'secondary.dark', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  {voice.role}
                </Typography>
                <Typography sx={{ mt: 1.4, color: 'primary.main', fontSize: { xs: '1.2rem', sm: '1.45rem' }, fontWeight: 700, lineHeight: 1.55 }}>
                  "{voice.quote}"
                </Typography>
                <Typography sx={{ mt: 2.2, color: 'primary.main', fontSize: '1rem', fontWeight: 800 }}>
                  {voice.name}
                </Typography>
                <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: '0.88rem' }}>
                  {voice.role}
                </Typography>
              </Paper>
            </RevealOnScroll>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 2.2 }}>
          {focusAreas.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 80}>
              <Paper sx={{ height: '100%', p: 2.5, borderRadius: '1.6rem' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    width: 52,
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '18px',
                    bgcolor: 'rgba(17,26,36,0.06)',
                    color: 'primary.main',
                  }}
                >
                  <item.icon />
                </Box>
                <Typography sx={{ mt: 1.7, color: 'secondary.dark', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  {item.value}
                </Typography>
                <Typography sx={{ mt: 0.8, color: 'primary.main', fontSize: '1.16rem', fontWeight: 800 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1.1, color: 'text.secondary', lineHeight: 1.75 }}>
                  {item.description}
                </Typography>
              </Paper>
            </RevealOnScroll>
          ))}
        </Box>

        <RevealOnScroll delay={140}>
          <Paper sx={{ mt: 3, p: { xs: 2.5, sm: 3.2 }, borderRadius: '1.8rem', bgcolor: 'rgba(16,50,77,0.04)' }}>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2.5} sx={{ justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ color: 'primary.main', fontSize: '1.3rem', fontWeight: 800 }}>
                  What makes the school feel grounded and parent-friendly
                </Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.78 }}>
                  Families can now understand the school through its real strengths: a disciplined culture, meaningful activities, practical facilities, regular communication and visible student participation.
                </Typography>
              </Box>
              <Box sx={{ minWidth: { lg: 280 } }}>
                {schoolContent.facilities.slice(0, 4).map((item) => (
                  <Typography key={item} sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.9 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Stack>
          </Paper>
        </RevealOnScroll>
      </Section>
    </>
  )
}
