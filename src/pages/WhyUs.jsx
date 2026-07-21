import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded'
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import campusLifeContent from '../data/campusLifeContent'
import { sharedImages } from '../assets/images'

const facilityIcons = {
  'Physics, Chemistry & Computer Labs': ScienceRoundedIcon,
  'Library & Reading Culture': LocalLibraryRoundedIcon,
  'Campus Security & Safety': SecurityRoundedIcon,
}

export default function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Curricular Activities"
        crumb="Campus Life"
        title="Music, art, sports, celebrations and practical learning in one vibrant campus-life page"
        subtitle="This page brings together the school’s curricular and co-curricular strengths, labs, security, library and initiatives in a more attractive and campus-specific format."
        image={sharedImages.teacherImageFour}
      />

      <Section background="soft">
        <RevealOnScroll>
          <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.7rem', sm: '2.15rem' }, fontWeight: 800, textAlign: 'center' }}>
            Curricular activities that make learning visible, practical and joyful
          </Typography>
          <Typography sx={{ mt: 1.1, maxWidth: 860, mx: 'auto', color: 'text.secondary', textAlign: 'center', lineHeight: 1.78 }}>
            Air Force School supports classroom excellence with music, art, indoor and outdoor sports, school events, cultural programs, gardening, festival celebrations and hands-on learning spaces that help children grow with confidence.
          </Typography>
        </RevealOnScroll>

        <Box sx={{ mt: 4.5, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 2.2 }}>
          {campusLifeContent.curricularPrograms.map((item, index) => (
            <RevealOnScroll key={item.title} delay={(index % 2) * 100}>
              <Paper sx={{ height: '100%', overflow: 'hidden', borderRadius: '1.8rem' }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: '100%', height: { xs: 220, sm: 260 }, objectFit: 'cover' }}
                />
                <Box sx={{ p: 2.5 }}>
                  <Chip label={item.highlight} color="warning" size="small" />
                  <Typography sx={{ mt: 1.4, color: 'primary.main', fontSize: '1.28rem', fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1.1, color: 'text.secondary', lineHeight: 1.78 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 1.6, display: 'grid', gap: 0.9 }}>
                    {item.points.map((point) => (
                      <Stack key={point} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <CheckCircleRoundedIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
                        <Typography sx={{ color: 'primary.main', fontSize: '0.92rem', fontWeight: 600 }}>
                          {point}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </RevealOnScroll>
          ))}
        </Box>
      </Section>

      <Section>
        <RevealOnScroll>
          <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.7rem', sm: '2.15rem' }, fontWeight: 800, textAlign: 'center' }}>
            Facilities that show a smart, safe and future-ready school
          </Typography>
        </RevealOnScroll>

        <Box sx={{ mt: 4.5, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 2.2 }}>
          {campusLifeContent.facilities.map((item, index) => {
            const Icon = facilityIcons[item.title] || MemoryRoundedIcon

            return (
              <RevealOnScroll key={item.title} delay={index * 90}>
                <Paper
                  sx={{
                    height: '100%',
                    p: 2.5,
                    borderRadius: '1.6rem',
                    background: 'linear-gradient(180deg, #ffffff 0%, #f3f8fb 100%)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      width: 54,
                      height: 54,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '18px',
                      bgcolor: 'rgba(15,50,77,0.08)',
                      color: 'primary.main',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography sx={{ mt: 1.8, color: 'primary.main', fontSize: '1.18rem', fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.75 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 1.8, display: 'grid', gap: 0.8 }}>
                    {item.stats.map((stat) => (
                      <Typography key={stat} sx={{ color: 'secondary.dark', fontWeight: 700 }}>
                        {stat}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </RevealOnScroll>
            )
          })}
        </Box>
      </Section>

      <Section background="sky">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 0.92fr' }, gap: 3 }}>
          <RevealOnScroll>
            <Paper
              sx={{
                p: { xs: 2.5, sm: 3.2 },
                borderRadius: '1.8rem',
                background: 'linear-gradient(135deg, #10324d 0%, #1e5b7f 100%)',
                color: '#fff',
              }}
            >
              <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                <SportsSoccerRoundedIcon sx={{ color: '#ffd48d' }} />
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9fd6ff' }}>
                  Airforce School Initiatives
                </Typography>
              </Stack>
              <Typography sx={{ mt: 1.3, fontSize: { xs: '1.55rem', sm: '1.95rem' }, fontWeight: 800 }}>
                Holistic and 360-degree development continues beyond the classroom
              </Typography>
              <Box sx={{ mt: 2.2, display: 'grid', gap: 1.1 }}>
                {campusLifeContent.initiatives.map((item) => (
                  <Stack key={item} direction="row" spacing={1.1} sx={{ alignItems: 'flex-start' }}>
                    <CheckCircleRoundedIcon sx={{ mt: 0.2, color: '#ffd48d', fontSize: 18 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{item}</Typography>
                  </Stack>
                ))}
              </Box>
            </Paper>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <Paper sx={{ p: { xs: 2.5, sm: 3.2 }, borderRadius: '1.8rem' }}>
              <Typography sx={{ color: 'primary.main', fontSize: '1.4rem', fontWeight: 800 }}>
                Monthly news, magazines and letters
              </Typography>
              <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.72 }}>
                Regular communication keeps parents informed and helps the site feel practical, current and genuinely useful.
              </Typography>
              <Box sx={{ mt: 2.2, display: 'grid', gap: 1.1 }}>
                {campusLifeContent.publications.map((item) => (
                  <Paper key={item.title} sx={{ p: 1.7, borderRadius: '1.2rem', bgcolor: 'rgba(16,50,77,0.04)' }}>
                    <Typography sx={{ color: 'primary.main', fontWeight: 700 }}>{item.title}</Typography>
                    <Typography sx={{ mt: 0.6, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.68 }}>
                      {item.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
              <Button to="/downloads" variant="outline" sx={{ mt: 2.4 }}>
                Open Download Centre
              </Button>
            </Paper>
          </RevealOnScroll>
        </Box>
      </Section>
    </>
  )
}
