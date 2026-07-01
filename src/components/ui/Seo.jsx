import { useEffect } from 'react'
import schoolContent from '../../data/schoolContent'
import { useLocale } from '../../context/LocaleContext'

function setMeta(name, content, attribute = 'name') {
  if (!content) return
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function Seo({ title, description, path = '/', image }) {
  const { localize, t } = useLocale()
  const localizedContent = localize(schoolContent)

  useEffect(() => {
    const pageTitle = title ? t(title) : ''
    const fullTitle = pageTitle ? `${pageTitle} | ${localizedContent.meta.title}` : localizedContent.meta.title
    const resolvedDescription = description ? t(description) : localizedContent.meta.description
    const canonicalUrl = `${window.location.origin}${path}`

    document.title = fullTitle
    setMeta('description', resolvedDescription)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', resolvedDescription, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('twitter:card', image ? 'summary_large_image' : 'summary')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', resolvedDescription)

    if (image) {
      setMeta('og:image', image, 'property')
      setMeta('twitter:image', image)
    }

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [description, image, localizedContent.meta.description, localizedContent.meta.title, path, t, title])

  return null
}
