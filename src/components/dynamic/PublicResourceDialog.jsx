import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { Alert, Box, Stack, Typography } from '@mui/material'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

function extractDriveId(value) {
  if (!value) return ''

  const input = String(value).trim()
  const patterns = [
    /\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/folders\/([a-zA-Z0-9_-]+)/,
  ]

  for (const pattern of patterns) {
    const match = input.match(pattern)
    if (match?.[1]) return match[1]
  }

  return ''
}

function resolvePreview(row) {
  const source =
    row?.showPageUnderDialogBox ||
    row?.publicLinkFromDrive ||
    row?.previewUrl ||
    row?.href ||
    row?.to ||
    ''

  if (!source || source.startsWith('/')) {
    return { kind: 'none', source: '', previewUrl: '', fallbackUrl: '' }
  }

  try {
    const url = new URL(source)
    const pathname = url.pathname.toLowerCase()
    const fallbackUrl = url.toString()

    if (url.hostname.includes('docs.google.com')) {
      if (pathname.includes('/spreadsheets/d/')) {
        const gid = url.searchParams.get('gid') || url.hash.replace('#gid=', '')
        const base = pathname.includes('/edit') ? url.pathname.split('/edit')[0] : url.pathname.split('/view')[0]
        return {
          kind: 'iframe',
          source,
          previewUrl: `${url.origin}${base}/preview${gid ? `?gid=${gid}` : ''}`,
          fallbackUrl,
        }
      }

      if (pathname.includes('/document/d/') || pathname.includes('/presentation/d/')) {
        const base = pathname.includes('/edit') ? url.pathname.split('/edit')[0] : url.pathname.split('/view')[0]
        return {
          kind: 'iframe',
          source,
          previewUrl: `${url.origin}${base}/preview`,
          fallbackUrl,
        }
      }

      if (pathname.includes('/forms/')) {
        const embeddedUrl = new URL(url.toString())
        embeddedUrl.searchParams.set('embedded', 'true')
        return {
          kind: 'iframe',
          source,
          previewUrl: embeddedUrl.toString(),
          fallbackUrl,
        }
      }
    }

    if (url.hostname.includes('drive.google.com')) {
      if (pathname.includes('/folders/')) {
        const folderId = extractDriveId(source)
        return {
          kind: 'iframe',
          source,
          previewUrl: folderId ? `https://drive.google.com/embeddedfolderview?id=${folderId}#grid` : fallbackUrl,
          fallbackUrl,
        }
      }

      const fileId = extractDriveId(source)
      const extension = pathname.split('.').pop()
      const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'avif']
      const videoExtensions = ['mp4', 'webm', 'ogg', 'mov']
      const docExtensions = ['pdf']

      if (imageExtensions.includes(extension)) {
        return {
          kind: 'image',
          source,
          previewUrl: source,
          fallbackUrl,
        }
      }

      if (videoExtensions.includes(extension)) {
        return {
          kind: 'video',
          source,
          previewUrl: source,
          fallbackUrl,
        }
      }

      if (docExtensions.includes(extension)) {
        return {
          kind: 'iframe',
          source,
          previewUrl: source,
          fallbackUrl,
        }
      }

      if (fileId) {
        return {
          kind: 'iframe',
          source,
          previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
          fallbackUrl,
        }
      }
    }

    if (/\.(png|jpg|jpeg|gif|webp|svg|bmp|avif)$/i.test(pathname)) {
      return { kind: 'image', source, previewUrl: source, fallbackUrl }
    }

    if (/\.(mp4|webm|ogg|mov)$/i.test(pathname)) {
      return { kind: 'video', source, previewUrl: source, fallbackUrl }
    }

    if (/\.(pdf)$/i.test(pathname)) {
      return { kind: 'iframe', source, previewUrl: source, fallbackUrl }
    }

    return {
      kind: 'iframe',
      source,
      previewUrl: fallbackUrl,
      fallbackUrl,
    }
  } catch {
    return { kind: 'none', source, previewUrl: '', fallbackUrl: '' }
  }
}

function collectMeta(row) {
  return Object.entries(row).filter(([key, value]) => {
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
    ].includes(key)
  })
}

export default function PublicResourceDialog({ open, onClose, row }) {
  if (!row) return null

  const title = row.title || row.label || row.text || 'Public update'
  const description = row.message || row.excerpt || row.description || ''
  const meta = collectMeta(row)
  const preview = resolvePreview(row)
  return (
    <Modal open={open} onClose={onClose} title={title} maxWidth="lg">
      <Stack spacing={2}>
        {description ? (
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
            {description}
          </Typography>
        ) : null}

        {meta.length ? (
          <Box sx={{ display: 'grid', gap: 1 }}>
            {meta.slice(0, 8).map(([key, value]) => (
              <Typography key={key} sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'capitalize' }}>
                  {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ')}:
                </Box>{' '}
                {String(value)}
              </Typography>
            ))}
          </Box>
        ) : null}

        {preview.kind === 'image' ? (
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '1.25rem',
              border: '1px solid rgba(17,26,36,0.08)',
              bgcolor: '#f8fbff',
              p: 1,
            }}
          >
            <Box
              component="img"
              src={preview.previewUrl}
              alt={title}
              sx={{
                display: 'block',
                width: '100%',
                maxHeight: { xs: 420, md: 620 },
                objectFit: 'contain',
                borderRadius: '1rem',
              }}
            />
          </Box>
        ) : null}

        {preview.kind === 'video' ? (
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '1.25rem',
              border: '1px solid rgba(17,26,36,0.08)',
              bgcolor: '#0f1720',
              p: 1,
            }}
          >
            <Box
              component="video"
              src={preview.previewUrl}
              controls
              playsInline
              sx={{
                display: 'block',
                width: '100%',
                maxHeight: { xs: 420, md: 620 },
                borderRadius: '1rem',
                backgroundColor: '#000',
              }}
            />
          </Box>
        ) : null}

        {preview.kind === 'iframe' ? (
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '1.25rem',
              border: '1px solid rgba(17,26,36,0.08)',
              bgcolor: '#f8fbff',
            }}
          >
            <Box
              component="iframe"
              src={preview.previewUrl}
              title={title}
              loading="lazy"
              allow="autoplay; fullscreen"
              sx={{
                width: '100%',
                height: { xs: 360, md: 560 },
                border: 0,
              }}
            />
          </Box>
        ) : null}

        {preview.kind === 'none' ? (
          <Alert severity="info">
            No embedded preview is configured for this item yet. Configure a preview URL in the sheet if this item should appear inside the site.
          </Alert>
        ) : null}

        {preview.fallbackUrl ? (
          <Button href={preview.fallbackUrl} variant="outline" icon={false} sx={{ alignSelf: 'flex-start' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <OpenInNewRoundedIcon sx={{ fontSize: 18 }} />
              <span>Open In New Tab</span>
            </Stack>
          </Button>
        ) : null}
      </Stack>
    </Modal>
  )
}
