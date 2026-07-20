import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import RevealOnScroll from '../ui/RevealOnScroll'
import news from '../../data/news'
import { BRAND_ALPHA, BRAND_NEUTRALS, SECTION_BACKGROUNDS } from '../../constants/brand'

export default function LatestNews() {
  const featured = news.slice(0, 3)

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: SECTION_BACKGROUNDS.strip }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 3 }}>
          <RevealOnScroll>
            <SectionHeading eyebrow="Newsroom" title="Latest News" />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Button to="/blog" variant="outline" size="sm">
              View All News
            </Button>
          </RevealOnScroll>
        </Box>
        <Box sx={{ mt: 5, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {featured.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 90}>
              <Card component={Link} to="/blog" sx={{ display: 'flex', height: '100%', flexDirection: 'column', p: 3, textDecoration: 'none' }}>
                <Badge tone="accent">{item.category}</Badge>
                <Typography sx={{ mt: 2, color: 'primary.main', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4 }}>{item.title}</Typography>
                <Typography sx={{ mt: 1.5, flex: 1, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.excerpt}</Typography>
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 0.75, color: BRAND_ALPHA.sky8, fontSize: '0.75rem' }}>
                  <Calendar size={14} /> {item.date}
                </Box>
              </Card>
            </RevealOnScroll>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
