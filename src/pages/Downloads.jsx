import { useMemo, useState } from 'react'
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import EventRoundedIcon from '@mui/icons-material/EventRounded'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import SyncRoundedIcon from '@mui/icons-material/SyncRounded'
import { Alert, Box, Chip, Paper, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import Carousel from '../components/ui/Carousel'
import PublicResourceDialog from '../components/dynamic/PublicResourceDialog'
import { useRemoteSiteData } from '../context/RemoteSiteDataContext'
import { BRAND_NEUTRALS } from '../constants/brand'
import { sharedImages } from '../assets/images'

function formatKey(key) {
  return key
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (value) => value.toUpperCase())
}

function ActionButton({ row, onOpen }) {
  const label = row.label || row.title || 'Open item'
  const openInDialog = row.dialog?.mode === 'dialog' || row.dialog?.mode === 'details'

  if (openInDialog) {
    return (
      <Button onClick={() => onOpen(row)} variant="outline" size="sm" icon={false}>
        {label}
      </Button>
    )
  }

  return (
    <Button onClick={() => onOpen(row)} variant="outline" size="sm" icon={false}>
      {label}
    </Button>
  )
}

function DetailList({ row, hiddenKeys = [] }) {
  const entries = Object.entries(row).filter(([key, value]) => {
    if (!value) return false

    return ![
      'title',
      'label',
      'text',
      'message',
      'excerpt',
      'description',
      'href',
      'to',
      'showPageUnderDialogBox',
      'publicLinkFromDrive',
      'dialog',
      'galleryImages',
      'driveFolderEmbedUrl',
      'isPublished',
      ...hiddenKeys,
    ].includes(key)
  })

  if (!entries.length) return null

  return (
    <Box sx={{ mt: 1.25, display: 'grid', gap: 0.65 }}>
      {entries.slice(0, 5).map(([key, value]) => (
        <Typography key={key} sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.6 }}>
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
            {formatKey(key)}:
          </Box>{' '}
          {String(value)}
        </Typography>
      ))}
    </Box>
  )
}

function ResourceCard({ row, onOpen }) {
  const title = row.title || row.label || row.text || 'Public resource'
  const excerpt = row.message || row.excerpt || row.description || ''

  return (
    <Paper
      sx={{
        p: 2.4,
        borderRadius: '1.4rem',
        border: '1px solid rgba(17,26,36,0.08)',
        boxShadow: '0 20px 42px -34px rgba(17,26,36,0.22)',
      }}
    >
      <Stack direction="row" useFlexGap spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        {row.category ? <Chip size="small" label={row.category} color="warning" /> : null}
        {row.date || row.updatedAt ? <Chip size="small" label={row.date || row.updatedAt} variant="outlined" /> : null}
      </Stack>

      <Typography sx={{ mt: 1.4, color: 'primary.main', fontSize: '1.05rem', fontWeight: 700 }}>
        {title}
      </Typography>

      {excerpt ? (
        <Typography sx={{ mt: 1.1, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.72 }}>
          {excerpt}
        </Typography>
      ) : null}

      <DetailList row={row} />

      <Box sx={{ mt: 2 }}>
        <ActionButton row={row} onOpen={onOpen} />
      </Box>
    </Paper>
  )
}

function DownloadCard({ row }) {
  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: '1.4rem',
        border: '1px solid rgba(17,26,36,0.08)',
        boxShadow: '0 22px 48px -34px rgba(17,26,36,0.22)',
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Chip icon={<DownloadRoundedIcon />} label={row.category || 'Download'} color="primary" />
        <Chip label="Public file" variant="outlined" />
      </Stack>

      <Typography sx={{ mt: 1.5, color: 'primary.main', fontSize: '1.05rem', fontWeight: 700 }}>
        {row.label || row.title || 'Download'}
      </Typography>

      {row.href ? (
        <Typography sx={{ mt: 1.1, color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.7 }}>
          Directly open or download this file using the public Google Drive link configured by the school.
        </Typography>
      ) : null}

      <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '0.82rem' }}>
        Public direct download buttons are hidden to reduce unauthorised sharing. Use the managed preview flow where required.
      </Typography>
    </Paper>
  )
}

function EventGalleryCard({ row, onOpen }) {
  const hasImages = row.galleryImages?.length > 0
  const canPreviewFolder = Boolean(row.driveFolderEmbedUrl)

  return (
    <Paper
      sx={{
        width: { xs: '100%', md: 440 },
        p: 2.4,
        borderRadius: '1.6rem',
        border: '1px solid rgba(17,26,36,0.08)',
        boxShadow: '0 22px 50px -36px rgba(17,26,36,0.24)',
      }}
    >
      <Stack direction="row" useFlexGap spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip icon={<EventRoundedIcon />} label={row.date || 'Event'} color="warning" />
        {row.publicLinkFromDrive ? <Chip size="small" label="Drive gallery linked" variant="outlined" /> : null}
        {row.galleryImageCount ? <Chip size="small" label={`${row.galleryImageCount} photos`} color="primary" /> : null}
      </Stack>

      <Typography sx={{ mt: 1.4, color: 'primary.main', fontSize: '1.12rem', fontWeight: 700 }}>
        {row.title || 'School event'}
      </Typography>

      <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {row.galleryImageCount
          ? `Gallery announcement: ${row.galleryImageCount} photos are available in this event carousel.`
          : 'Gallery announcement: photos will appear here when image items are configured for this event.'}
      </Typography>

      {hasImages ? (
        <Box sx={{ mt: 2, display: 'grid', gap: 1.2 }}>
          <Carousel ariaLabel={`${row.title || 'Event'} images`} showCount>
            {row.galleryImages.map((image, index) => (
              <Box
                key={`${row.title || 'event'}-${index}`}
                data-carousel-item
                sx={{
                  width: '100%',
                  minWidth: '100%',
                  height: { xs: 230, sm: 250, md: 270 },
                  borderRadius: '1.2rem',
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#e9f0f7',
                  userSelect: 'none',
                }}
              />
            ))}
          </Carousel>
        </Box>
      ) : canPreviewFolder ? (
        <Box
          sx={{
            mt: 2,
            overflow: 'hidden',
            borderRadius: '1.2rem',
            border: '1px solid rgba(17,26,36,0.08)',
          }}
        >
          <Box
            component="iframe"
            src={row.driveFolderEmbedUrl}
            title={`${row.title || 'Event'} gallery`}
            loading="lazy"
            sx={{ width: '100%', height: 260, border: 0, bgcolor: '#f7fafc' }}
          />
        </Box>
      ) : (
        <Alert severity="info" sx={{ mt: 2 }}>
          Add `galleryImages`, `galleryImageUrls`, `photoLinks`, or Drive file IDs in the sheet to show a full image carousel here.
        </Alert>
      )}

      <DetailList row={row} hiddenKeys={['date']} />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.1} sx={{ mt: 2 }}>
        <ActionButton row={row} onOpen={onOpen} />
      </Stack>
    </Paper>
  )
}

export default function Downloads() {
  const { loading, error, downloads, notices, announcementActions, events, marqueeItems, contentProvider } = useRemoteSiteData()
  const [selectedResource, setSelectedResource] = useState(null)

  const highlightText = useMemo(
    () => marqueeItems.map((item) => item.text).filter(Boolean),
    [marqueeItems],
  )

  return (
    <>
      <PageHero
        eyebrow="Download Centre"
        crumb="Downloads"
        title="Public downloads, notices, results links and event updates in one place"
        subtitle="Visitors only see the public download centre here, while the other spreadsheet tabs now work behind the scenes as safe site settings and content feeds."
        image={sharedImages.teacherImageFour}
      />

      <Section background="soft">
        <RevealOnScroll>
          <Paper
            sx={{
              p: { xs: 2.4, md: 3.2 },
              borderRadius: '1.8rem',
              background: 'linear-gradient(135deg, #10324d 0%, #1d5579 100%)',
              color: BRAND_NEUTRALS.white,
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a8daf8' }}>
                  School Updates
                </Typography>
                <Typography sx={{ mt: 1, fontSize: { xs: '1.4rem', sm: '1.8rem' }, fontWeight: 800 }}>
                  The public downloads page is now powered by configurable spreadsheet content
                </Typography>
                <Typography sx={{ mt: 1.1, maxWidth: 800, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                  Admin-managed notices, results, announcements, downloads and event galleries can now be published safely without exposing internal sheet edit shortcuts to website visitors.
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </RevealOnScroll>

        {highlightText.length ? (
          <RevealOnScroll delay={80}>
            <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
              {highlightText.map((item, index) => (
                <Chip key={`${item}-${index}`} icon={<CampaignRoundedIcon />} label={item} />
              ))}
            </Stack>
          </RevealOnScroll>
        ) : null}

        {loading ? (
          <Alert severity="info" sx={{ mt: 3 }}>
            Loading the latest school updates from the public sheet.
          </Alert>
        ) : null}

        {error ? (
          <Alert severity="warning" sx={{ mt: 3 }}>
            {error}
          </Alert>
        ) : null}

        {contentProvider === 'local-secure' ? (
          <Alert severity="info" sx={{ mt: 3 }}>
            Secure content mode is enabled. This site is no longer reading public Google Sheet or Drive links directly. To keep admin-only access secure, published website content should be updated through site-managed content or a protected backend service.
          </Alert>
        ) : null}

        {!loading && !error ? (
          <>
            <RevealOnScroll delay={100}>
              <Paper sx={{ mt: 4, p: { xs: 2.2, sm: 3 }, borderRadius: '1.8rem' }}>
                <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap' }}>
                  <Chip icon={<SyncRoundedIcon />} label={`${downloads.length} current downloads`} color="primary" />
                  <Chip icon={<LinkRoundedIcon />} label={`${announcementActions.length} quick actions`} variant="outlined" />
                  <Chip icon={<CampaignRoundedIcon />} label={`${notices.length} published notices`} variant="outlined" />
                  <Chip icon={<EventRoundedIcon />} label={`${events.length} event entries`} variant="outlined" />
                </Stack>
              </Paper>
            </RevealOnScroll>

            <RevealOnScroll delay={130}>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ color: 'primary.main', fontSize: '1.4rem', fontWeight: 800 }}>
                  Notice links and public actions
                </Typography>
                <Typography sx={{ mt: 0.8, color: 'text.secondary', lineHeight: 1.75 }}>
                  These items are managed from the sheet and can open public links directly or inside a dialog preview when `showPageUnderDialogBox` is configured.
                </Typography>

                <Box sx={{ mt: 2.4, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
                  {announcementActions.map((row, index) => (
                    <ResourceCard key={`action-${index}`} row={row} onOpen={setSelectedResource} />
                  ))}
                  {notices.map((row, index) => (
                    <ResourceCard key={`notice-${index}`} row={row} onOpen={setSelectedResource} />
                  ))}
                </Box>
              </Box>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ color: 'primary.main', fontSize: '1.4rem', fontWeight: 800 }}>
                  Event gallery and announcements
                </Typography>
                <Typography sx={{ mt: 0.8, color: 'text.secondary', lineHeight: 1.75 }}>
                  Event entries can show an embedded Drive folder now, and they also support full image carousels when you add direct image URLs or Drive file IDs in the sheet.
                </Typography>

                {events.length ? (
                  <Box sx={{ mt: 2.4 }}>
                    <Carousel ariaLabel="School events and galleries">
                      {events.map((row, index) => (
                        <EventGalleryCard key={`event-${index}`} row={row} onOpen={setSelectedResource} />
                      ))}
                    </Carousel>
                  </Box>
                ) : (
                  <Alert severity="info" sx={{ mt: 2.4 }}>
                    No public event gallery has been published yet.
                  </Alert>
                )}
              </Box>
            </RevealOnScroll>

            <RevealOnScroll delay={190}>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ color: 'primary.main', fontSize: '1.4rem', fontWeight: 800 }}>
                  Downloads
                </Typography>
                <Typography sx={{ mt: 0.8, color: 'text.secondary', lineHeight: 1.75 }}>
                  Only the downloads section is shown publicly here. Other spreadsheet tabs now behave as admin-controlled site settings and content sources.
                </Typography>

                {downloads.length ? (
                  <Box sx={{ mt: 2.4, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 2 }}>
                    {downloads.map((row, index) => (
                      <DownloadCard key={`download-${index}`} row={row} />
                    ))}
                  </Box>
                ) : (
                  <Alert severity="info" sx={{ mt: 2.4 }}>
                    No downloads are currently published.
                  </Alert>
                )}
              </Box>
            </RevealOnScroll>
          </>
        ) : null}
      </Section>

      <PublicResourceDialog open={Boolean(selectedResource)} onClose={() => setSelectedResource(null)} row={selectedResource} />
    </>
  )
}
