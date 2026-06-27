import { useEffect, useState } from 'react'
import runtimeContentFallback from '../data/runtimeContentFallback'
import siteConfig from '../data/siteConfig'

function mergeRuntimeContent(remote) {
  return {
    announcementBar: remote?.announcementBar ?? runtimeContentFallback.announcementBar,
    marquee: Array.isArray(remote?.marquee) && remote.marquee.length ? remote.marquee : runtimeContentFallback.marquee,
    notices: Array.isArray(remote?.notices) && remote.notices.length ? remote.notices : runtimeContentFallback.notices,
    events: Array.isArray(remote?.events) && remote.events.length ? remote.events : runtimeContentFallback.events,
    downloads: Array.isArray(remote?.downloads) && remote.downloads.length ? remote.downloads : runtimeContentFallback.downloads,
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

export default function useRuntimeContent() {
  const [cachedContent] = useState(readCachedContent)
  const [content, setContent] = useState(cachedContent ?? runtimeContentFallback)
  const [isLoading, setIsLoading] = useState(Boolean(siteConfig.runtimeContent.endpoint && !cachedContent))
  const [source, setSource] = useState(cachedContent ? 'cache' : 'local')

  useEffect(() => {
    if (!siteConfig.runtimeContent.endpoint) return

    let active = true

    async function loadRuntimeContent() {
      setIsLoading(true)

      try {
        const response = await fetch(siteConfig.runtimeContent.endpoint, {
          headers: { Accept: 'application/json' },
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
      } catch {
        if (!active) return
        setContent(cachedContent ?? runtimeContentFallback)
        setSource(cachedContent ? 'cache' : 'local')
      } finally {
        if (active) setIsLoading(false)
      }
    }

    loadRuntimeContent()

    return () => {
      active = false
    }
  }, [cachedContent])

  return {
    content,
    isLoading,
    isLive: source === 'live',
    source,
  }
}
