import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { useRemoteSiteData } from '../../context/RemoteSiteDataContext'

export function SiteStatusBanner() {
  const { loading, siteStatus, showSiteAnnouncement, siteAvailability } = useRemoteSiteData()

  if (loading) return null

  const unavailable = siteAvailability === 'unavailable'
  const statusTitle = siteStatus?.title || (unavailable ? 'Site unavailable' : 'Site active')
  const primaryMessage = siteStatus?.announcementMessage || siteStatus?.message || ''
  const extraMessage = showSiteAnnouncement ? siteStatus?.extraMessage || '' : ''

  if (!showSiteAnnouncement || (!primaryMessage && !extraMessage && !unavailable)) {
    return null
  }

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, lg: 4 },
        py: 1.2,
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
        background: unavailable
          ? 'linear-gradient(135deg, #7a2715 0%, #b54708 100%)'
          : 'linear-gradient(135deg, #10324d 0%, #1d5579 100%)',
        color: '#fff',
      }}
    >
      <Stack spacing={1.2} sx={{ maxWidth: 1536, mx: 'auto' }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={1.2} sx={{ alignItems: { lg: 'center' }, justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1.1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
            <Chip
              icon={unavailable ? <BuildCircleRoundedIcon /> : <CampaignRoundedIcon />}
              label={unavailable ? 'Site unavailable' : 'Announcement'}
              sx={{
                bgcolor: 'rgba(255,255,255,0.16)',
                color: '#fff',
                '& .MuiChip-icon': { color: '#fff' },
              }}
            />
            <Typography sx={{ fontWeight: 800 }}>
              {statusTitle}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {siteStatus?.updatedAt ? (
              <Chip
                label={`Updated: ${siteStatus.updatedAt}`}
                variant="outlined"
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}
              />
            ) : null}
            {siteStatus?.checkAt ? (
              <Chip
                label={`Expected: ${siteStatus.checkAt}`}
                variant="outlined"
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}
              />
            ) : null}
          </Stack>
        </Stack>

        {primaryMessage ? (
          <Typography sx={{ color: 'rgba(255,255,255,0.84)', lineHeight: 1.7 }}>
            {primaryMessage}
          </Typography>
        ) : null}

        {extraMessage ? (
          <Typography sx={{ color: 'rgba(255,255,255,0.74)', fontSize: '0.92rem', lineHeight: 1.65 }}>
            {extraMessage}
          </Typography>
        ) : null}
      </Stack>
    </Box>
  )
}

export function isSiteInMaintenance(siteStatus) {
  const mode = String(siteStatus?.mode || '').toLowerCase()
  return ['maintenance', 'maintainance', 'inactive', 'unavailable', 'disabled', 'down'].some((token) =>
    mode.includes(token),
  )
}
