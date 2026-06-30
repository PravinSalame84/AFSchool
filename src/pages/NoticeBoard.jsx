import { Link as RouterLink } from 'react-router-dom'
import {
  alpha,
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import PageHero from '../components/ui/PageHero'
import Seo from '../components/ui/Seo'
import schoolContent from '../data/schoolContent'
import siteAssets from '../data/siteAssets'
import useRuntimeContent from '../hooks/useRuntimeContent'
import OptimizedImage from '../components/ui/OptimizedImage'
import { brandColors } from '../theme/colorTokens'

function panelSx(theme) {
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

export default function NoticeBoard() {
  const theme = useTheme()
  const { content: runtimeContent, source } = useRuntimeContent()
  const notices = runtimeContent.notices?.length ? runtimeContent.notices : schoolContent.notices
  const events = runtimeContent.events?.length ? runtimeContent.events : schoolContent.events

  return (
    <>
      <Seo
        title="Notice Board"
        description="School notices and announcements"
        path="/notice-board"
        image={siteAssets.images.studentCampusEvent}
      />

      <PageHero
        crumb="Notice Board"
        eyebrow="Announcements & Updates"
        title="Important school notices in one place"
        subtitle="Official updates, events and publications"
        image={siteAssets.images.studentCampusEvent}
      />

      <Box sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7.5}>
              <Paper sx={{ ...panelSx(theme), p: { xs: 2.5, sm: 3.5 } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2} sx={{ mb: 3 }}>
                  <Box>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <NewspaperIcon color="primary" />
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        Latest Notices
                      </Typography>
                    </Stack>
                    <Typography sx={{ mt: 1, color: 'text.secondary' }}>
                      Dynamic notices can be updated from the runtime content source without rebuilding the website.
                    </Typography>
                  </Box>

                  <Chip
                    label={source === 'live' ? 'Live Runtime Feed' : 'Local Fallback'}
                    color={source === 'live' ? 'success' : 'default'}
                    sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, fontWeight: 700, maxWidth: '100%' }}
                  />
                </Stack>

                <Stack spacing={2}>
                  {notices.map((notice, index) => (
                    <Paper
                      key={notice.title}
                      component={RouterLink}
                      to={notice.to}
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        textDecoration: 'none',
                        color: 'inherit',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
                        bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.4) : alpha(brandColors.white, 0.82),
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          borderColor: alpha(theme.palette.secondary.main, 0.24),
                        },
                      }}
                    >
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
                          <Chip
                            label={notice.category}
                            size="small"
                            color={index % 3 === 0 ? 'warning' : index % 3 === 1 ? 'info' : 'success'}
                            sx={{ fontWeight: 700 }}
                          />
                          <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'text.secondary' }}>
                            {notice.date}
                          </Typography>
                        </Stack>
                        <ArrowOutwardIcon fontSize="small" color="primary" />
                      </Stack>

                      <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>
                        {notice.title}
                      </Typography>

                      <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.8 }}>
                        {notice.excerpt}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={4.5}>
              <Stack spacing={3}>
                <Paper sx={{ ...panelSx(theme), p: 3 }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <CalendarMonthIcon color="primary" />
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Event Highlights
                    </Typography>
                  </Stack>

                  <OptimizedImage
                    src={siteAssets.images.studentConference}
                    alt="School event"
                    wrapperSx={{ mt: 2, borderRadius: 4 }}
                    sx={{ height: { xs: 170, sm: 190 }, borderRadius: 4 }}
                  />

                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    {events.map((event) => (
                      <Paper
                        key={event.title}
                        component={RouterLink}
                        to={event.to}
                        variant="outlined"
                        sx={{
                          p: 2,
                          borderRadius: 4,
                          textDecoration: 'none',
                          color: 'inherit',
                          borderColor: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { bgcolor: alpha(theme.palette.secondary.main, 0.08) },
                        }}
                      >
                        <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'text.secondary' }}>
                          {event.date}
                        </Typography>
                        <Typography sx={{ mt: 0.75, fontWeight: 700 }}>
                          {event.title}
                        </Typography>
                      </Paper>
                    ))}
                  </Stack>
                </Paper>

                <Paper sx={{ ...panelSx(theme), p: 3 }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <NewspaperIcon color="primary" />
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      Quick Access
                    </Typography>
                  </Stack>

                  <Grid container spacing={1.5} sx={{ mt: 1 }}>
                    {[siteAssets.images.schoolGate, siteAssets.images.studentLibrary].map((src) => (
                      <Grid item xs={12} sm={6} key={src}>
                        <OptimizedImage src={src} alt="School resource preview" wrapperSx={{ borderRadius: 4, }} sx={{ height: 100, borderRadius: 4, }} />
                      </Grid>
                    ))}
                  </Grid>

                  <Stack spacing={1.25} sx={{ mt: 2 }}>
                    {schoolContent.resources.slice(0, 4).map((resource) => (
                      <Paper
                        key={resource.label}
                        component={RouterLink}
                        to={resource.to}
                        variant="outlined"
                        sx={{
                          p: 1.6,
                          borderRadius: '1.1rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 2,
                          textDecoration: 'none',
                          color: 'inherit',
                          borderColor: alpha(theme.palette.primary.main, 0.1),
                          '&:hover': { bgcolor: alpha(theme.palette.secondary.main, 0.08) },
                        }}
                      >
                        <Typography sx={{ fontWeight: 700 }}>
                          {resource.label}
                        </Typography>
                        <ArrowOutwardIcon fontSize="small" />
                      </Paper>
                    ))}
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
