import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import { states } from '../../data/locations'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Why Airforce School', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Locations', to: '/locations' },
]

const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'FAQs', to: '/about#faqs' },
  { label: 'Contact Us', to: '/contact' },
]

const socialIcons = [
  { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { Icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-sky back-light/85">
      <Container className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-skyback-light/70">
              Educating ambitious, kind and capable learners since {siteConfig.yearFounded} — across{' '}
              {states.length}+ states and counting.
            </p>
            <div className="mt-5 flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="focus-ring text-sm transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="focus-ring text-sm transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`tel:${siteConfig.contact.phone}`} className="focus-ring hover:text-accent">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-xs leading-relaxed text-skyback-light/60">
            Campuses across {states.join(' \u00b7 ')}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-skyback-light/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brandName} {siteConfig.brandSuffix}. Copyright. All rights reserved. Air Force School, Nagpur.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="focus-ring hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="focus-ring hover:text-accent">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
