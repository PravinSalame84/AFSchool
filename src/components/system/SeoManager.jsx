import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import schoolContent from '../../data/schoolContent'
import siteConfig from '../../data/siteConfig'
import { getContactEmailRecipients } from '../../utils/contact'

const pageSeo = {
  '/': {
    title: `${schoolContent.meta.title}`,
    description: schoolContent.meta.description,
    keywords: 'Air Force School Nagpur, CBSE school Nagpur, Vayusena Nagar school, school admissions Nagpur, Air Force School VSN',
  },
  '/about': {
    title: `About ${siteConfig.brandName} | ${siteConfig.brandSuffix}`,
    description: 'Learn about the school legacy, academic philosophy, facilities, vision and mission of Air Force School VayuSena Nagar, Nagpur.',
  },
  '/why-us': {
    title: `Why Choose ${siteConfig.shortName} | Campus Life & Learning`,
    description: 'Explore academics, facilities, campus life, safety, co-curricular activities and student development at Air Force School Nagpur.',
  },
  '/admissions': {
    title: `Admissions | ${siteConfig.brandName}, Nagpur`,
    description: 'Admission information, school process, documents and enquiry support for Air Force School VayuSena Nagar, Nagpur.',
  },
  '/downloads': {
    title: `Downloads, Notices & Results | ${siteConfig.shortName}`,
    description: 'Access school downloads, notices, announcements, results links and event updates from the official public download centre.',
  },
  '/contact': {
    title: `Contact ${siteConfig.brandName} | Address, Phone & Email`,
    description: 'Get the official address, phone number, email and map location for Air Force School VayuSena Nagar, Nagpur.',
  },
  '/locations': {
    title: `Campus Location | ${siteConfig.shortName}`,
    description: 'Find the campus location, nearby access details and visit information for Air Force School VayuSena Nagar, Nagpur.',
  },
  '/brochure': {
    title: `School Brochure | ${siteConfig.shortName}`,
    description: 'View the official school brochure and profile information for Air Force School VayuSena Nagar, Nagpur.',
  },
  '/alumni': {
    title: `Alumni | ${siteConfig.shortName}`,
    description: 'Explore alumni engagement and school community connections at Air Force School VayuSena Nagar, Nagpur.',
  },
  '/careers': {
    title: `Careers | ${siteConfig.shortName}`,
    description: 'Learn about career opportunities and school employment information at Air Force School VayuSena Nagar, Nagpur.',
  },
  '/blog': {
    title: `School News & Updates | ${siteConfig.shortName}`,
    description: 'Read the latest school highlights, updates and news from Air Force School VayuSena Nagar, Nagpur.',
  },
  '/ratings-feedback': {
    title: `Ratings & Feedback | ${siteConfig.shortName}`,
    description: 'Share or review parent and visitor feedback related to Air Force School VayuSena Nagar, Nagpur.',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${siteConfig.shortName}`,
    description: `Read the privacy policy for ${siteConfig.brandName}.`,
  },
  '/terms': {
    title: `Terms & Conditions | ${siteConfig.shortName}`,
    description: `Read the terms and conditions for ${siteConfig.brandName}.`,
  },
}

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector)

  if (!node) {
    node = document.createElement('meta')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let node = document.head.querySelector(selector)

  if (!node) {
    node = document.createElement('link')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })
}

function buildSchoolSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: `${siteConfig.brandName}, ${siteConfig.brandSuffix}`,
    url,
    description: schoolContent.meta.description,
    foundingDate: String(siteConfig.yearFounded),
    email: getContactEmailRecipients()[0] || siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      postalCode: '440007',
      addressCountry: 'IN',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.x,
      siteConfig.social.youtube,
      siteConfig.social.linkedIn,
    ].filter(Boolean),
  }
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = pageSeo[pathname] || {
      title: `${siteConfig.brandName} | ${siteConfig.brandSuffix}`,
      description: schoolContent.meta.description,
    }

    const origin = typeof window !== 'undefined' ? window.location.origin : siteConfig.siteUrl
    const canonicalUrl = new URL(pathname, siteConfig.siteUrl || origin).toString()
    const imageUrl = new URL('/favicon.png', siteConfig.siteUrl || origin).toString()

    document.title = seo.title

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords || 'school, CBSE school, Nagpur school, Air Force School' })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: `${siteConfig.brandName}, ${siteConfig.brandSuffix}` })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    const schemaId = 'school-structured-data'
    let schemaNode = document.getElementById(schemaId)
    if (!schemaNode) {
      schemaNode = document.createElement('script')
      schemaNode.id = schemaId
      schemaNode.type = 'application/ld+json'
      document.head.appendChild(schemaNode)
    }
    schemaNode.textContent = JSON.stringify(buildSchoolSchema(canonicalUrl))
  }, [pathname])

  return null
}
