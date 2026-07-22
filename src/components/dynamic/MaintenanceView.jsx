import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded'
import { Alert, Box, Paper, Stack, Typography } from '@mui/material'
import Button from '../ui/Button'
import Section from '../ui/Section'
import { campusImages } from '../../assets/images'

export default function MaintenanceView({ siteStatus }) {
  const title = siteStatus?.title || 'The website is temporarily under maintenance'
  const message = siteStatus?.announcementMessage || siteStatus?.message || 'Please check back shortly.'

  return (
    <Section
      background="soft"
      sx={{
        minHeight: 'calc(100vh - 220px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: '2rem',
          border: '1px solid rgba(17,26,36,0.08)',
          boxShadow: '0 32px 80px -52px rgba(17,26,36,0.28)',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
            minHeight: 460,
          }}
        >
          <Box sx={{ p: { xs: 3, sm: 4, lg: 5 } }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', color: 'warning.dark' }}>
                <BuildCircleRoundedIcon />
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  Maintenance Mode
                </Typography>
              </Stack>

              <Typography sx={{ color: 'primary.main', fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800, lineHeight: 1.1 }}>
                {title}
              </Typography>

              <Typography sx={{ maxWidth: 760, color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85 }}>
                {message}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                {siteStatus?.updatedAt ? (
                  <Alert icon={<AccessTimeRoundedIcon fontSize="inherit" />} severity="info" sx={{ flex: 1 }}>
                    Announcement date: {siteStatus.updatedAt}
                  </Alert>
                ) : null}
                {siteStatus?.checkAt ? (
                  <Alert icon={<AccessTimeRoundedIcon fontSize="inherit" />} severity="warning" sx={{ flex: 1 }}>
                    Expected availability: {siteStatus.checkAt}
                  </Alert>
                ) : null}
              </Stack>

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                {siteStatus?.extraMessage || ''}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                <Button to="/downloads" variant="dark" icon={false}>
                  Open Downloads
                </Button>
                <Button to="/contact" variant="outline" icon={false}>
                  Contact School
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              minHeight: { xs: 280, lg: '100%' },
              backgroundImage: `linear-gradient(180deg, rgba(16,50,77,0.18), rgba(16,50,77,0.6)), url(${campusImages.underMaintainance})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>
      </Paper>
    </Section>
  )
}
