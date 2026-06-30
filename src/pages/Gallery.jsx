import {
  useState } from 'react'
import Grid from '../components/ui/Grid'
import Stack from '../components/ui/Stack'
import {
  alpha,
  Box,
  Chip,
  Container,
  Dialog,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import Carousel from '../components/ui/Carousel'
import OptimizedImage from '../components/ui/OptimizedImage'
import schoolContent from '../data/schoolContent'
import { brandColors } from '../theme/colorTokens'

function galleryCardSx(theme) {
  return {
    borderRadius: '1.7rem',
    overflow: 'hidden',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(14,20,24,0.94), rgba(29,33,60,0.84))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(228,246,251,0.76))',
    boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
  }
}

export default function Gallery() {
  const theme = useTheme()
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <Seo
        title="Gallery"
        description="School activities and campus life gallery."
        path="/gallery"
        image={schoolContent.gallery[0].image}
      />

      <PageHero
        crumb="Gallery"
        eyebrow="School Highlights"
        title="Campus life, events and achievements"
        subtitle={`Browse ${schoolContent.gallery.length} curated images from school archives`}
        image={schoolContent.gallery[0].image}
      />

      <Box sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 4 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 4,
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
                color: brandColors.white,
              }}
            >
              <PhotoCamera />
            </Box>
            <Box>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: '0.2em' }}>
                Interactive Gallery
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                Campus, events and achievements
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Featured carousel with archive browsing across desktop and mobile.
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ mb: 6 }}>
            <Carousel autoPlay interval={3200} ariaLabel="Featured gallery highlights">
              {schoolContent.gallery.slice(0, 8).map((item) => (
                <Box key={item.title} data-carousel-item sx={{ width: { xs: 'min(88vw, 320px)', sm: 'min(360px, 84vw)' }, flexShrink: 0 }}>
                  <Paper
                    onClick={() => setActiveImage(item)}
                    sx={{
                      ...galleryCardSx(theme),
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      wrapperSx={{ height: 260 }}
                      sx={{ height: 260 }}
                    />

                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,26,36,0.06), rgba(17,26,36,0.82))' }} />

                    <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 2.25, color: brandColors.white }}>
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          mb: 1.25,
                          bgcolor: 'rgba(255,255,255,0.16)',
                          color: brandColors.white,
                          border: '1px solid rgba(255,255,255,0.18)',
                        }}
                      />
                      <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ mt: 0.5, color: alpha(brandColors.white, 0.82), lineHeight: 1.7 }}>
                        {item.caption}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Carousel>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2.5 }}>
              Auto-Scrolling Archive Strip
            </Typography>
            <Carousel autoPlay interval={2600} ariaLabel="Full gallery archive strip">
              {schoolContent.gallery.map((item) => (
                <Box key={`strip-${item.title}`} data-carousel-item sx={{ width: { xs: 'min(82vw, 260px)', sm: 'min(280px, 72vw)' }, flexShrink: 0 }}>
                  <Paper
                    onClick={() => setActiveImage(item)}
                    sx={{
                      ...galleryCardSx(theme),
                      cursor: 'pointer',
                      p: 1.25,
                    }}
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      wrapperSx={{ borderRadius: 4 }}
                      sx={{ height: 170, borderRadius: 4 }}
                    />
                    <Typography sx={{ mt: 1.5, fontWeight: 700, color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Carousel>
          </Box>

          <Grid container spacing={2.5}>
            {schoolContent.gallery.map((item, index) => (
              <Grid item xs={12} sm={6} xl={index % 5 === 0 ? 6 : 3} key={item.title}>
                <Paper
                  onClick={() => setActiveImage(item)}
                  sx={{
                    ...galleryCardSx(theme),
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 30px 60px -32px rgba(17, 26, 36, 0.3)',
                    },
                  }}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    wrapperSx={{}}
                    sx={{ height: { xs: 220, sm: index % 5 === 0 ? 300 : 260 } }}
                  />

                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                      {item.caption}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Dialog open={!!activeImage} onClose={() => setActiveImage(null)} maxWidth="lg" fullWidth>
        <Box sx={{ position: 'relative', p: 2 }}>
          <IconButton
            onClick={() => setActiveImage(null)}
            sx={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}
            aria-label="Close gallery image"
          >
            <CloseIcon />
          </IconButton>

          {activeImage ? (
            <>
              <OptimizedImage
                src={activeImage.image}
                alt={activeImage.title}
                wrapperSx={{ borderRadius: 4, }}
                sx={{ maxHeight: '75vh', objectFit: 'contain', borderRadius: 4, }}
              />

              <Box sx={{ mt: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  {activeImage.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                  {activeImage.caption}
                </Typography>
              </Box>
            </>
          ) : null}
        </Box>
      </Dialog>
    </>
  )
}
