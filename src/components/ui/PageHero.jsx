import { memo } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ChevronRight } from 'lucide-react'
import Container from './Container'
import OptimizedImage from './OptimizedImage'

function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <Box component="section" className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary-900 to-primary-700 py-16 sm:py-20">
      <Box className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,147,75,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(93,138,168,0.24),transparent_24%)]" />
      <Box className="contour-lines opacity-30" />
      <Container className="relative px-4 sm:px-6 lg:px-8">
        <Box component="nav" className="mb-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-skyback-light/60">
          <Link to="/" className="hover:text-airforce-gold">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Box component="span" className="text-skyback-light/90">{crumb}</Box>
        </Box>
        <Box className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.7fr]">
          <Box>
            {eyebrow && <Typography component="span" className="text-sm font-bold uppercase tracking-[0.28em] text-airforce-gold">{eyebrow}</Typography>}
            <Typography component="h1" className="mt-3 max-w-3xl text-4xl font-bold leading-[0.95] text-white sm:text-5xl">{title}</Typography>
            {subtitle && <Typography component="p" className="mt-4 max-w-2xl text-[15px] leading-relaxed text-skyback-light/75">{subtitle}</Typography>}
          </Box>
          {image ? (
            <Box className="relative mx-auto w-full max-w-md">
              <Box className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl" />
              <OptimizedImage
                src={image}
                alt={title}
                wrapperClassName="student-mask relative"
                className="h-[280px] w-full rounded-[2rem] object-cover shadow-card sm:h-[320px]"
              />
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  )
}

export default memo(PageHero)
