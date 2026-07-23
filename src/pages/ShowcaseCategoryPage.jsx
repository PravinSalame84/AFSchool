import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import { showcaseCategoryPages, showcaseNavigationLinks } from '../data/showcasePages'

export default function ShowcaseCategoryPage({ categoryKey }) {
  const page = showcaseCategoryPages[categoryKey]

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
          <Paper
            sx={{
              p: { xs: 2.5, md: 3.2 },
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #10324d 0%, #1f6088 100%)',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a8daf8' }}>
              Air Force School Pathways
            </Typography>
            <Typography sx={{ mt: 1.1, maxWidth: 760, fontSize: { xs: '1.25rem', sm: '1.6rem' }, fontWeight: 800 }}>
              {page.intro}
            </Typography>
            <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 2.2, flexWrap: 'wrap' }}>
              {showcaseNavigationLinks.map((item) => (
                <Chip
                  key={item.to}
                  label={item.label}
                  component="a"
                  clickable
                  href={item.to}
                  sx={{
                    borderRadius: '999px',
                    bgcolor: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </RevealOnScroll>

        <Box sx={{ mt: 4.5, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.2 }}>
          {page.cards.map((item, index) => (
            <RevealOnScroll key={item.to} delay={(index % 2) * 90}>
              <Paper
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: '1.8rem',
                  border: '1px solid rgba(17,26,36,0.08)',
                  boxShadow: '0 22px 44px -34px rgba(17,26,36,0.22)',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ display: 'block', width: '100%', height: { xs: 220, sm: 250 }, objectFit: 'cover' }}
                />
                <Box sx={{ p: 2.5 }}>
                  <Typography sx={{ color: 'primary.main', fontSize: '1.18rem', fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.72 }}>
                    {item.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
                    <Typography sx={{ color: 'secondary.dark', fontSize: '0.88rem', fontWeight: 700 }}>
                      Built for clarity, confidence and real student growth
                    </Typography>
                  </Stack>
                  <Button to={item.to} variant="outline" sx={{ mt: 2.2 }}>
                    Explore {item.title}
                  </Button>
                </Box>
              </Paper>
            </RevealOnScroll>
          ))}
        </Box>
      </Section>

      <Section>
        <RevealOnScroll>
          <Paper
            sx={{
              p: { xs: 2.5, md: 3.2 },
              borderRadius: '2rem',
              background: 'linear-gradient(180deg, #fff8ef 0%, #f7fbff 100%)',
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { md: 'center' } }}>
              <Box>
                <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.35rem', sm: '1.7rem' }, fontWeight: 800 }}>
                  Looking for the next best page to explore?
                </Typography>
                <Typography sx={{ mt: 0.9, maxWidth: 760, color: 'text.secondary', lineHeight: 1.75 }}>
                  These pages are connected by the same goal: helping families understand how Air Force School supports both academic strength and all-round development.
                </Typography>
              </Box>
              <Button to="/contact" variant="dark">
                Talk to the School Office
              </Button>
            </Stack>

            <Box sx={{ mt: 2.5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 1.5 }}>
              {page.cards.map((item) => (
                <Paper key={item.to} sx={{ p: 1.8, borderRadius: '1.2rem', bgcolor: '#fff' }}>
                  <Typography sx={{ color: 'primary.main', fontWeight: 700 }}>{item.title}</Typography>
                  <Button to={item.to} variant="outline" size="sm" sx={{ mt: 1.4 }}>
                    Open
                  </Button>
                </Paper>
              ))}
            </Box>
          </Paper>
        </RevealOnScroll>
      </Section>
    </>
  )
}
