import { useEffect } from 'react'
import schoolContent from '../../data/schoolContent'

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
  useEffect(() => {
    const fullTitle = title ? `${title} | ${schoolContent.meta.title}` : schoolContent.meta.title
    const resolvedDescription = description || schoolContent.meta.description
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
  }, [description, image, path, title])

  return null
}
