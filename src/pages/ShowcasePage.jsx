import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { showcasePages, showcaseRelatedLinks } from '../data/showcasePages'

export default function ShowcasePage({ pageKey }) {
  const page = showcasePages[pageKey]

  if (!page) return null

  return (
    <>
      <PageHero
        crumb={page.crumb}
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.image}
      />

      <Section background="soft">
        <RevealOnScroll>
          <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {page.highlights.map((item) => (
              <Chip key={item} label={item} color="warning" />
            ))}
          </Stack>
        </RevealOnScroll>

        <Box sx={{ mt: 4.2, display: 'grid', gridTemplateColumns: { xs: '1fr', xl: 'minmax(0, 1fr) 320px' }, gap: 2.4 }}>
          <Box sx={{ display: 'grid', gap: 2.4 }}>
            {page.sections.map((section, index) => (
              <RevealOnScroll key={section.title} delay={index * 80}>
                <Paper
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '2rem',
                    border: '1px solid rgba(17,26,36,0.08)',
                    boxShadow: '0 22px 44px -34px rgba(17,26,36,0.2)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', lg: index % 2 === 0 ? '0.98fr 1.12fr' : '1.12fr 0.98fr' },
                    }}
                  >
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.title}
                      sx={{
                        order: { xs: 0, lg: index % 2 === 0 ? 0 : 1 },
                        width: '100%',
                        height: { xs: 240, sm: 300, lg: '100%' },
                        minHeight: { lg: 360 },
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ order: { xs: 1, lg: index % 2 === 0 ? 1 : 0 }, p: { xs: 2.4, sm: 3, lg: 3.4 } }}>
                      <Typography sx={{ color: 'secondary.dark', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                        {section.kicker}
                      </Typography>
                      <Typography sx={{ mt: 1, color: 'primary.main', fontSize: { xs: '1.3rem', sm: '1.65rem' }, fontWeight: 800, lineHeight: 1.18 }}>
                        {section.title}
                      </Typography>
                      <Typography sx={{ mt: 1.2, color: 'text.secondary', lineHeight: 1.8 }}>
                        {section.body}
                      </Typography>
                      <Box sx={{ mt: 2.1, display: 'grid', gap: 0.95 }}>
                        {section.points.map((point) => (
                          <Stack key={point} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                            <CheckCircleRoundedIcon sx={{ mt: 0.2, color: 'secondary.main', fontSize: 18 }} />
                            <Typography sx={{ color: 'primary.main', fontSize: '0.94rem', fontWeight: 600, lineHeight: 1.65 }}>
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </RevealOnScroll>
            ))}
          </Box>

          <RevealOnScroll delay={90}>
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Paper
                sx={{
                  p: 2.3,
                  borderRadius: '1.8rem',
                  background: 'linear-gradient(135deg, #10324d 0%, #1c567b 100%)',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#a8daf8' }}>
                  Key Outcomes
                </Typography>
                <Box sx={{ mt: 1.7, display: 'grid', gap: 1 }}>
                  {page.outcomes.map((item) => (
                    <Stack key={item} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                      <ArrowForwardRoundedIcon sx={{ mt: 0.1, color: '#ffd48d', fontSize: 18 }} />
                      <Typography sx={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.7 }}>{item}</Typography>
                    </Stack>
                  ))}
                </Box>
              </Paper>

              <Paper sx={{ p: 2.3, borderRadius: '1.8rem' }}>
                <Typography sx={{ color: 'primary.main', fontSize: '1.08rem', fontWeight: 800 }}>
                  Explore Related Pages
                </Typography>
                <Box sx={{ mt: 1.4, display: 'grid', gap: 1 }}>
                  {showcaseRelatedLinks
                    .filter((item) => item.to !== `/${pageKey}`)
                    .slice(0, 7)
                    .map((item) => (
                      <Button key={item.to} to={item.to} variant="outline" size="sm" sx={{ justifyContent: 'space-between' }}>
                        {item.label}
                      </Button>
                    ))}
                </Box>
              </Paper>

              <Paper sx={{ p: 2.3, borderRadius: '1.8rem', bgcolor: 'rgba(16,50,77,0.04)' }}>
                <Typography sx={{ color: 'primary.main', fontSize: '1.08rem', fontWeight: 800 }}>
                  Want to discuss this in context of your child?
                </Typography>
                <Typography sx={{ mt: 0.9, color: 'text.secondary', lineHeight: 1.72 }}>
                  The school office can guide families on academics, facilities, age group suitability and how these experiences support student growth.
                </Typography>
                <Button to="/contact" variant="dark" sx={{ mt: 1.8 }}>
                  Contact Air Force School
                </Button>
              </Paper>
            </Box>
          </RevealOnScroll>
        </Box>
      </Section>
    </>
  )
}
