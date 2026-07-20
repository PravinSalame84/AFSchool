import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { BRAND_ALPHA, BRAND_GRADIENTS, BRAND_NEUTRALS, UPPERCASE_LABEL_SX } from '../../constants/brand'
import { PAGE_HERO_BREADCRUMB_SX, PAGE_HERO_IMAGE_GLOW_SX } from '../../constants/uiStyles'
import Container from './Container'
import OptimizedImage from './OptimizedImage'

export default function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6.5, sm: 8, lg: 10 },
        background: BRAND_GRADIENTS.hero,
      }}
    >
      <Container sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Breadcrumbs
          separator={<ChevronRightRoundedIcon sx={PAGE_HERO_BREADCRUMB_SX.separator} />}
          sx={{
            mb: 2,
            overflowWrap: 'anywhere',
            '& .MuiBreadcrumbs-ol': {
              alignItems: 'center',
              flexWrap: 'wrap',
              rowGap: 0.5,
            },
          }}
        >
          <Link component={RouterLink} to="/" underline="hover" sx={{ ...PAGE_HERO_BREADCRUMB_SX.link, ...UPPERCASE_LABEL_SX }}>
            Home
          </Link>
          <Typography sx={{ ...PAGE_HERO_BREADCRUMB_SX.current, ...UPPERCASE_LABEL_SX }}>
            {crumb}
          </Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: image ? '1.05fr 0.7fr' : '1fr' }, alignItems: 'center', gap: { xs: 3, lg: 5 } }}>
          <Box sx={{ minWidth: 0 }}>
            {eyebrow ? (
              <Typography sx={{ color: 'secondary.main', fontSize: { xs: '0.74rem', sm: '0.9rem' }, letterSpacing: { xs: '0.18em', sm: '0.28em' }, ...UPPERCASE_LABEL_SX }}>
                {eyebrow}
              </Typography>
            ) : null}
            <Typography variant="h1" sx={{ mt: 1.5, maxWidth: 900, color: BRAND_NEUTRALS.white, fontSize: { xs: '2rem', sm: '2.75rem', lg: '3.3rem' }, lineHeight: { xs: 1.04, sm: 0.98 }, textWrap: 'balance' }}>
              {title}
            </Typography>
            {subtitle ? (
              <Typography sx={{ mt: 2, maxWidth: 760, color: BRAND_ALPHA.sky78, fontSize: { xs: '0.92rem', sm: '0.98rem' }, lineHeight: { xs: 1.72, sm: 1.8 } }}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>
          {image ? (
            <Box sx={{ position: 'relative', mx: 'auto', width: '100%', maxWidth: 420 }}>
              <OptimizedImage src={image} alt="" sx={{ position: 'relative', width: '100%', height: { xs: 280, sm: 320 }, objectFit: 'cover', borderRadius: '2rem', boxShadow: 5 }} />
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  )
}
