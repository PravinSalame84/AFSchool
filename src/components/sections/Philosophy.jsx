import { Box, Typography } from '@mui/material'
import { ShieldCheck, HeartHandshake } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import OptimizedImage from '../ui/OptimizedImage'
import siteConfig from '../../data/siteConfig'
import { sharedImages } from '../../assets/images'
import { BRAND_NEUTRALS } from '../../constants/brand'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'We Don\u2019t Take Interviews',
    description: 'Admission decisions are never based on pressuring a four-year-old into an "interview." We admit on a first-come, first-served basis.',
  },
  {
    icon: HeartHandshake,
    title: 'We Don\u2019t Take Donations',
    description: 'No capitation fees, no "donations" for a seat. Just transparent, published fee structures across every campus.',
  },
]

export default function Philosophy() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'primary.main' }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 }, textAlign: 'center' }}>
        <RevealOnScroll>
          <Typography sx={{ mx: 'auto', maxWidth: 760, color: BRAND_NEUTRALS.white, fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontWeight: 700, lineHeight: 1.3 }}>
            <OptimizedImage src={sharedImages.teacherImageTwo} alt="About Snapshot" sx={{ width: '100%', maxWidth: 750, mb: 3, borderRadius: 1, boxShadow: 5 }} />
            Because we believe your child is{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>our responsibility</Box> - we groom, we nurture.
          </Typography>
        </RevealOnScroll>

        <Box sx={{ mx: 'auto', mt: 6, maxWidth: 960, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 120}>
              <Box sx={{ borderRadius: 1, bgcolor: 'rgba(255,255,255,0.05)', p: 3.5, textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p.icon size={32} color="#f0934b" />
                <Typography sx={{ mt: 2, color: BRAND_NEUTRALS.white, fontSize: '1.125rem', fontWeight: 700 }}>{p.title}</Typography>
                <Typography sx={{ mt: 1.25, color: 'rgba(215,239,246,0.75)', fontSize: '0.9rem', lineHeight: 1.8 }}>{p.description}</Typography>
              </Box>
            </RevealOnScroll>
          ))}
        </Box>

        <Typography sx={{ mx: 'auto', mt: 5, maxWidth: 640, color: 'secondary.main', fontSize: '0.9rem' }}>
          - {siteConfig.brandName} {siteConfig.brandSuffix}
        </Typography>
      </Container>
    </Box>
  )
}
