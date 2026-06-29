import { Link } from 'react-router-dom'
import { ArrowUpRight, DownloadCloud, FileBadge2 } from 'lucide-react'
import {
  alpha,
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Seo from '../components/ui/Seo'
import OptimizedImage from '../components/ui/OptimizedImage'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import useRuntimeContent from '../hooks/useRuntimeContent'

const tones = [
  { main: '#ffd707', soft: '#e7ab33' },
  { main: '#00bcd4', soft: '#81d4fa' },
  { main: '#ff9800', soft: '#ffb74d' },
]

function cardSx(theme) {
  return {
    borderRadius: 4,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(14,20,24,0.94), rgba(29,33,60,0.84))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(228,246,251,0.76))',
    boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
  }
}

export default function Downloads() {
  const theme = useTheme()
  const { content: runtimeContent, source } = useRuntimeContent()
  const downloads = runtimeContent.downloads?.length ? runtimeContent.downloads : schoolContent.downloads

  return (
    <>
      <Seo
        title="Downloads"
        description="Access school documents, homework and academic resources."
        path="/downloads"
        image={siteAssets.images.studentClassPhoto}
      />

      <PageHero
        crumb="Downloads"
        eyebrow="Download Centre"
        title="Official school files and academic resources"
        subtitle="Important documents organized for quick access."
        image={siteAssets.images.studentClassPhoto}
      />

      <Box sx={{ py: { xs: 7, md: 9 } }}>
        <Container>
          <Grid container spacing={2.5}>
            {downloads.map((file, index) => {
              const tone = tones[index % tones.length]

              return (
                <Grid item xs={12} sm={6} xl={4} key={file.label}>
                  <Paper
                    component="a"
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      ...cardSx(theme),
                      p: 3,
                      textDecoration: 'none',
                      transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: alpha(tone.main, 0.36),
                        boxShadow: '0 30px 60px -32px rgba(17, 26, 36, 0.3)',
                      },
                    }}
                  >
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} alignItems={{ xs: 'flex-start', sm: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 4,
                          display: 'grid',
                          placeItems: 'center',
                          background: `linear-gradient(135deg, ${tone.main}, ${tone.soft})`,
                          color: '#1d213c',
                        }}
                      >
                        <DownloadCloud size={18} />
                      </Box>

                      <Chip
                        label={file.category}
                        size="small"
                        sx={{
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          bgcolor: alpha(tone.main, 0.14),
                          color: 'text.primary',
                        }}
                      />
                    </Stack>

                    <Typography sx={{ mt: 3, fontWeight: 800, textTransform: 'uppercase', fontSize: '1.05rem', lineHeight: 1.5, color: 'text.primary' }}>
                      {file.label}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
                      <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>
                        Download File
                      </Typography>
                      <ArrowUpRight size={16} />
                    </Stack>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} lg={5}>
              <Paper sx={{ ...cardSx(theme), p: { xs: 2.5, sm: 3 } }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                    <FileBadge2 size={18} color={theme.palette.secondary.main} />
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      More Official Resources
                    </Typography>
                    <Chip label={source === 'live' ? 'Live' : 'Local'} size="small" color="secondary" />
                  </Stack>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                      <OptimizedImage
                        src={siteAssets.images.studentDigitalLearning}
                        alt="Digital learning"
                      wrapperSx={{ borderRadius: 4 }}
                      sx={{ height: 150, borderRadius: 4 }}
                    />
                  </Grid>
                    <Grid item xs={12} sm={6}>
                      <OptimizedImage
                        src={siteAssets.images.teacherMeeting}
                        alt="Teacher collaboration"
                      wrapperSx={{ borderRadius: 4 }}
                      sx={{ height: 150, borderRadius: 4 }}
                    />
                  </Grid>
                </Grid>

                <Typography sx={{ mt: 2, fontSize: '0.92rem', lineHeight: 1.8, color: 'text.secondary' }}>
                  Parent access documents and internal resources are available through official links and can be updated through the runtime content feed.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={7}>
              <Stack spacing={2}>
                {schoolContent.resources.map((resource, index) => {
                  const tone = tones[index % tones.length]

                  return (
                    <Paper
                      key={resource.label}
                      component={Link}
                      to={resource.to}
                      sx={{
                        ...cardSx(theme),
                        p: 2.2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        alignItems: 'center',
                        gap: 2,
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          borderColor: alpha(tone.main, 0.28),
                        },
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontWeight: 800, color: 'text.primary' }}>{resource.label}</Typography>
                        <Typography sx={{ mt: 0.5, fontSize: '0.86rem', color: 'text.secondary' }}>
                          {resource.description}
                        </Typography>
                      </Box>
                      <ArrowUpRight size={16} color={theme.palette.primary.main} />
                    </Paper>
                  )
                })}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
