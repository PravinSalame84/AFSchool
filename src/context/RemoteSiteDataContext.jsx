import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchPublicSheetByGid } from '../utils/googleSheets'
import { sheetSections } from '../data/downloadCenterConfig'
import secureContent from '../data/secureContent'
import siteConfig from '../data/siteConfig'

const RemoteSiteDataContext = createContext(null)
const REMOTE_REFRESH_INTERVAL_MS = 60 * 1000

function isTrue(value) {
  return value === true || String(value).toLowerCase() === 'true'
}

function isNonEmpty(value) {
  return value != null && String(value).trim() !== ''
}

function normalizeTextList(value) {
  if (!isNonEmpty(value)) return []

  return String(value)
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function extractDriveId(value) {
  if (!isNonEmpty(value)) return ''

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

  if (/^[a-zA-Z0-9_-]{10,}$/.test(input)) {
    return input
  }

  return ''
}

function toDriveImageUrl(value) {
  const id = extractDriveId(value)
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1600` : ''
}

function resolveGalleryImageUrl(value) {
  if (!isNonEmpty(value)) return ''

  const input = String(value).trim()
  const driveImageUrl = toDriveImageUrl(input)
  if (driveImageUrl) return driveImageUrl

  return sanitizeUrl(input)
}

function toEmbeddedFolderUrl(value) {
  const id = extractDriveId(value)
  return id ? `https://drive.google.com/embeddedfolderview?id=${id}#grid` : ''
}

function parseDateValue(value) {
  if (!isNonEmpty(value)) return null
  const timestamp = Date.parse(String(value))
  return Number.isNaN(timestamp) ? null : timestamp
}

function isUnavailableMode(mode) {
  const value = String(mode || '').toLowerCase()
  return ['maintenance', 'maintainance', 'inactive', 'unavailable', 'disabled', 'down'].some((token) =>
    value.includes(token),
  )
}

function sanitizeUrl(value) {
  if (!isNonEmpty(value)) return ''

  const input = String(value).trim()

  if (input.startsWith('/')) return input

  try {
    const url = new URL(input)
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return url.toString()
    }
  } catch {
    return ''
  }

  return ''
}

function toPreviewUrl(value) {
  const safeUrl = sanitizeUrl(value)
  if (!safeUrl || safeUrl.startsWith('/')) return ''

  try {
    const url = new URL(safeUrl)

    if (url.hostname.includes('docs.google.com')) {
      if (url.pathname.includes('/spreadsheets/d/')) {
        const gid = url.searchParams.get('gid') || url.hash.replace('#gid=', '')
        const base = url.pathname.split('/edit')[0].split('/view')[0]
        return `https://docs.google.com${base}/preview${gid ? `?gid=${gid}` : ''}`
      }

      if (url.pathname.includes('/document/d/') || url.pathname.includes('/presentation/d/')) {
        return `${url.origin}${url.pathname.split('/edit')[0].split('/view')[0]}/preview`
      }
    }

    if (url.hostname.includes('drive.google.com')) {
      if (url.pathname.includes('/folders/')) {
        return toEmbeddedFolderUrl(safeUrl)
      }

      const fileId = extractDriveId(safeUrl)
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`
      }
    }

    return safeUrl
  } catch {
    return ''
  }
}

function createDialogConfig(row) {
  const previewSource = row.showPageUnderDialogBox || row.publicLinkFromDrive || row.previewUrl
  const previewUrl = toPreviewUrl(previewSource)
  const fallbackUrl = sanitizeUrl(row.href || row.to || row.publicLinkFromDrive || row.showPageUnderDialogBox)
  const wantsDialog = isNonEmpty(previewSource) || row.openInDialog === true || isTrue(row.openInDialog)

  return {
    mode: wantsDialog ? 'dialog' : fallbackUrl && !fallbackUrl.startsWith('/') ? 'external' : 'details',
    previewUrl,
    fallbackUrl,
  }
}

function normalizePublishedRows(rows) {
  const publishedRows = rows.filter((row) => {
    if (!Object.prototype.hasOwnProperty.call(row, 'isPublished')) return true
    return isTrue(row.isPublished)
  })

  return publishedRows
    .map((row) => {
      const dialog = createDialogConfig(row)
      const galleryCandidates = [
        ...normalizeTextList(row.galleryImages),
        ...normalizeTextList(row.galleryImageUrls),
        ...normalizeTextList(row.imageLinks),
        ...normalizeTextList(row.images),
        ...normalizeTextList(row.photoLinks),
      ]

      const galleryImages = galleryCandidates
        .map((item) => resolveGalleryImageUrl(item))
        .filter(Boolean)

      const driveFolderUrl = sanitizeUrl(row.publicLinkFromDrive || row.folderLink || row.galleryFolder)
      const driveFolderId = extractDriveId(driveFolderUrl)
      const configuredImages = galleryImages.map((image, index) => ({
        src: image,
        name: `Gallery image ${index + 1}`,
      }))

      return {
        ...row,
        href: sanitizeUrl(row.href),
        to: sanitizeUrl(row.to),
        showPageUnderDialogBox: sanitizeUrl(row.showPageUnderDialogBox),
        publicLinkFromDrive: driveFolderUrl,
        dialog,
        galleryImages: configuredImages,
        galleryImageCount: configuredImages.length,
        driveFolderId,
        driveFolderEmbedUrl: toEmbeddedFolderUrl(driveFolderUrl),
      }
    })
    .filter(Boolean)
}

function normalizeDatasets(rawDatasets) {
  const byKey = Object.fromEntries(
    sheetSections.map((section) => [
      section.key,
      {
        ...section,
        columns: rawDatasets[section.key]?.columns || [],
        rows: normalizePublishedRows(rawDatasets[section.key]?.rows || []),
      },
    ]),
  )

  const siteStatusRows = byKey.site_status?.rows || []
  const now = Date.now()
  const effectiveSiteStatusRows = siteStatusRows.filter((row) => {
    const effectiveAt = parseDateValue(row.updatedAt)
    return effectiveAt == null || effectiveAt <= now
  })
  const siteStatusCandidates = effectiveSiteStatusRows.length ? effectiveSiteStatusRows : siteStatusRows
  const siteStatus = [...siteStatusCandidates].sort((left, right) => {
    const leftTime = parseDateValue(left.updatedAt) || parseDateValue(left.checkAt) || 0
    const rightTime = parseDateValue(right.updatedAt) || parseDateValue(right.checkAt) || 0
    return rightTime - leftTime
  })[0] || null

  return {
    byKey,
    siteStatus,
    siteAvailability: siteStatus ? (isUnavailableMode(siteStatus.mode) ? 'unavailable' : 'available') : 'available',
    showSiteAnnouncement: siteStatus ? isTrue(siteStatus.showAnouncement) : false,
    contentProvider: siteConfig.remoteContent.provider,
    announcementActions: byKey.announcement_actions?.rows || [],
    marqueeItems: (byKey.marquee?.rows || []).map((row) => ({
      ...row,
      text: row.text || row.title || row.message || '',
      href: sanitizeUrl(row.href || row.to || row.showPageUnderDialogBox),
    })),
    notices: byKey.notices?.rows || [],
    events: byKey.events?.rows || [],
    downloads: byKey.downloads?.rows || [],
    raw: rawDatasets,
  }
}

export function RemoteSiteDataProvider({ children }) {
  const [datasets, setDatasets] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadRemoteSiteData() {
      if (siteConfig.remoteContent.provider === 'local-secure') {
        if (!ignore) {
          setDatasets(secureContent)
          setError('')
          setLoading(false)
        }
        return
      }

      try {
        setLoading(true)
        setError('')

        const results = await Promise.all(
          sheetSections.map(async (section) => {
            const data = await fetchPublicSheetByGid(section.gid)
            return [section.key, data]
          }),
        )

        if (!ignore) {
          setDatasets(Object.fromEntries(results))
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Unable to load the latest school updates right now.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadRemoteSiteData()

    if (siteConfig.remoteContent.provider === 'local-secure') {
      return () => {
        ignore = true
      }
    }

    const intervalId = window.setInterval(() => {
      loadRemoteSiteData()
    }, REMOTE_REFRESH_INTERVAL_MS)

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadRemoteSiteData()
      }
    }

    window.addEventListener('focus', loadRemoteSiteData)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      ignore = true
      window.clearInterval(intervalId)
      window.removeEventListener('focus', loadRemoteSiteData)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const value = useMemo(
    () => ({
      loading,
      error,
      ...normalizeDatasets(datasets),
    }),
    [datasets, error, loading],
  )

  return <RemoteSiteDataContext.Provider value={value}>{children}</RemoteSiteDataContext.Provider>
}

export function useRemoteSiteData() {
  const context = useContext(RemoteSiteDataContext)

  if (!context) {
    throw new Error('useRemoteSiteData must be used within RemoteSiteDataProvider')
  }

  return context
}
