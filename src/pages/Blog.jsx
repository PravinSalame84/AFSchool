import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { Calendar } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import news from '../data/news'

export default function Blog() {
  const categories = useMemo(() => ['All', ...new Set(news.map((n) => n.category))], [])
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? news : news.filter((n) => n.category === active)

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Newsroom & Insights"
        title="Airforce School Blog"
        subtitle="Stories from our campuses, parenting advice and the latest in education research."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <RevealOnScroll>
            <ToggleButtonGroup
              value={active}
              exclusive
              onChange={(_, value) => value && setActive(value)}
              sx={{ gap: 1, flexWrap: 'wrap' }}
            >
              {categories.map((cat) => (
                <ToggleButton
                  key={cat}
                  value={cat}
                  sx={{
                    border: '0 !important',
                    borderRadius: '999px !important',
                    px: 2,
                    py: 0.85,
                    bgcolor: active === cat ? 'primary.main' : '#fff',
                    color: active === cat ? '#fff' : 'primary.light',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    '&:hover': {
                      bgcolor: active === cat ? 'primary.main' : '#eef3f8',
                    },
                  }}
                >
                  {cat}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </RevealOnScroll>

          <Box sx={{ mt: 5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {filtered.map((item, i) => (
              <RevealOnScroll key={item.id} delay={(i % 6) * 70}>
                <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column', p: 3 }}>
                  <Badge tone="accent">{item.category}</Badge>
                  <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4 }}>{item.title}</Typography>
                  <Typography sx={{ mt: 1.5, flex: 1, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.excerpt}</Typography>
                  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', fontSize: '0.75rem' }}>
                    <Calendar size={14} /> {item.date}
                  </Box>
                </Card>
              </RevealOnScroll>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}
