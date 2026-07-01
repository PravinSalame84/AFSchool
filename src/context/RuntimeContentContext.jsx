import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import runtimeContentFallback from '../data/runtimeContentFallback'
import siteConfig from '../data/siteConfig'
import { useLocale } from './LocaleContext'

const RuntimeContentContext = createContext(null)

function normalizeAction(action) {
  if (!action?.label || !action?.to) return null
  return {
    label: String(action.label),
    to: String(action.to),
  }
}

function normalizeNotice(notice, index) {
  if (!notice?.title || !notice?.to) return null
  return {
    title: String(notice.title),
    category: String(notice.category ?? 'Notice'),
    date: String(notice.date ?? `Update ${index + 1}`),
    to: String(notice.to),
    excerpt: String(notice.excerpt ?? ''),
  }
}

function normalizeEvent(event, index) {
  if (!event?.title || !event?.to) return null
  return {
    title: String(event.title),
    date: String(event.date ?? `Event ${index + 1}`),
    to: String(event.to),
  }
}

function normalizeDownload(download) {
  if (!download?.label || !download?.href) return null
  return {
    label: String(download.label),
    href: String(download.href),
    category: String(download.category ?? 'Download'),
  }
}

function normalizeSiteStatus(siteStatus) {
  const mode = siteStatus?.mode === 'maintenance' ? 'maintenance' : 'active'
  const { localize, t } = useLocale()
  return {
    mode,
    title: String(siteStatus?.title ?? 'We will be back shortly'),
    message: String(
      siteStatus?.message ??
        t('Some pages may be temporarily unavailable while the school website is being refreshed.'),
    ),
    updatedAt: String(siteStatus?.updatedAt ?? ''),
  }
}

function mergeRuntimeContent(remote) {
  const actions =
    remote?.announcementBar?.actions
      ?.map(normalizeAction)
      .filter(Boolean) ?? runtimeContentFallback.announcementBar.actions

  return {
    siteStatus: normalizeSiteStatus(remote?.siteStatus),
    announcementBar: {
      message: String(remote?.announcementBar?.message ?? runtimeContentFallback.announcementBar.message),
      actions: actions.length ? actions : runtimeContentFallback.announcementBar.actions,
    },
    marquee:
      Array.isArray(remote?.marquee) && remote.marquee.length
        ? remote.marquee.map((item) => String(item))
        : runtimeContentFallback.marquee,
    notices:
      Array.isArray(remote?.notices) && remote.notices.length
        ? remote.notices.map(normalizeNotice).filter(Boolean)
        : runtimeContentFallback.notices,
    events:
      Array.isArray(remote?.events) && remote.events.length
        ? remote.events.map(normalizeEvent).filter(Boolean)
        : runtimeContentFallback.events,
    downloads:
      Array.isArray(remote?.downloads) && remote.downloads.length
        ? remote.downloads.map(normalizeDownload).filter(Boolean)
        : runtimeContentFallback.downloads,
  }
}

function readCachedContent() {
  if (typeof window === 'undefined') return null

  try {
    const cached = window.localStorage.getItem(siteConfig.runtimeContent.storageKey)
    if (!cached) return null

    const parsed = JSON.parse(cached)
    if (!parsed?.data || !parsed?.savedAt) return null

    const isFresh = Date.now() - parsed.savedAt < siteConfig.runtimeContent.revalidateMs
    return isFresh ? mergeRuntimeContent(parsed.data) : null
  } catch {
    return null
  }
}

export function RuntimeContentProvider({ children }) {
  const [cachedContent] = useState(readCachedContent)
  const [content, setContent] = useState(cachedContent ?? runtimeContentFallback)
  const [isLoading, setIsLoading] = useState(Boolean(siteConfig.runtimeContent.endpoint && !cachedContent))
  const [source, setSource] = useState(cachedContent ? 'cache' : 'local')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!siteConfig.runtimeContent.endpoint) return

    let active = true
    const controller = new AbortController()

    // DYNAMIC CONTENTS:
    // One shared fetch keeps runtime-driven notices, events, results-style
    // PDF links and homepage updates in sync without rebuilding the site.
    async function loadRuntimeContent() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(siteConfig.runtimeContent.endpoint, {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        })

        if (!response.ok) throw new Error(`Runtime content request failed with ${response.status}`)

        const remote = await response.json()
        const merged = mergeRuntimeContent(remote)

        if (!active) return

        setContent(merged)
        setSource('live')
        window.localStorage.setItem(
          siteConfig.runtimeContent.storageKey,
          JSON.stringify({ savedAt: Date.now(), data: remote }),
        )
      } catch (fetchError) {
        if (!active || fetchError?.name === 'AbortError') return
        setContent(cachedContent ?? runtimeContentFallback)
        setSource(cachedContent ? 'cache' : 'local')
        setError(fetchError)
      } finally {
        if (active) setIsLoading(false)
      }
    }

    loadRuntimeContent()

    return () => {
      active = false
      controller.abort()
    }
  }, [cachedContent])

  const value = useMemo(
    () => ({
      content,
      error,
      isLoading,
      isLive: source === 'live',
      source,
    }),
    [content, error, isLoading, source],
  )

  return <RuntimeContentContext.Provider value={value}>{children}</RuntimeContentContext.Provider>
}

export function useRuntimeContentContext() {
  const context = useContext(RuntimeContentContext)
  if (!context) throw new Error('useRuntimeContent must be used within RuntimeContentProvider')
  return context
}
