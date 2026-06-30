import { memo } from 'react'
import { Link } from 'react-router-dom'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ChevronRight } from 'lucide-react'
import Container from './Container'
import OptimizedImage from './OptimizedImage'
import { brandColors } from '../../theme/colorTokens'

function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, sm: 10 },
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark} 60%, #2a3946)`
            : 'linear-gradient(135deg, #e4f6fb 0%, #d7eff6 58%, #bae2ee 100%)',
      })}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at top right, rgba(240,147,75,0.22), transparent 28%), radial-gradient(circle at left, rgba(93,138,168,0.24), transparent 24%)',
        }}
      />
      <Box className="contour-lines" sx={(theme) => ({ opacity: theme.palette.mode === 'dark' ? 0.3 : 0.14 })} />

      <Container sx={{ position: 'relative' }}>
        <Stack
          component="nav"
          direction="row"
          alignItems="center"
          spacing={0.75}
          sx={(theme) => ({
            mb: 4,
            flexWrap: 'wrap',
            color: theme.palette.mode === 'dark' ? alpha('#d7eff6', 0.72) : alpha(theme.palette.primary.main, 0.68),
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontSize: '0.75rem',
          })}
        >
          <Box
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#ffd707' } }}
          >
            Home
          </Box>
          <ChevronRight size={14} />
          <Box component="span" sx={(theme) => ({ color: theme.palette.mode === 'dark' ? '#d7eff6' : theme.palette.primary.main })}>
            {crumb}
          </Box>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: image ? '1.05fr 0.7fr' : '1fr' },
            alignItems: 'center',
            gap: { xs: 5, lg: 8 },
          }}
        >
          <Box>
            {eyebrow ? (
              <Typography component="span" sx={{ display: 'block', color: 'secondary.main', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.28em' }}>
                {eyebrow}
              </Typography>
            ) : null}

            <Typography
              component="h1"
              sx={{
                mt: 2,
                maxWidth: '48rem',
                color: (theme) => (theme.palette.mode === 'dark' ? brandColors.white : theme.palette.primary.main),
                fontWeight: 800,
                lineHeight: 0.95,
                fontSize: { xs: '2.1rem', sm: '3.25rem' },
              }}
            >
              {title}
            </Typography>

            {subtitle ? (
              <Typography
                sx={(theme) => ({
                  mt: 2.5,
                  maxWidth: '42rem',
                  color: theme.palette.mode === 'dark' ? alpha('#d7eff6', 0.82) : theme.palette.text.secondary,
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                })}
              >
                {subtitle}
              </Typography>
            ) : null}
          </Box>

          {image ? (
            <Box sx={{ position: 'relative', mx: 'auto', width: '100%', maxWidth: { xs: 320, sm: 420 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 4,
                  backgroundColor: (theme) => alpha(theme.palette.common.white, theme.palette.mode === 'dark' ? 0.1 : 0.38),
                  filter: 'blur(28px)',
                }}
              />
              <OptimizedImage
                src={image}
                alt={title}
                wrapperClassName="student-mask"
                wrapperSx={{ position: 'relative' }}
                sx={{
                  height: { xs: 280, sm: 320 },
                  borderRadius: 4,
                  boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
                }}
              />
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  )
}

export default memo(PageHero)
