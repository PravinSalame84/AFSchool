import { Link } from 'react-router-dom'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'

const quickLinks = schoolContent.quickLinks.slice(0, 4)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A premium digital presence for Air Force School VayuSena Nagar, designed around parent access,
              student achievement and a disciplined Air Force inspired identity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {schoolContent.hero.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="focus-ring inline-flex items-center gap-2 text-sm transition hover:text-accent">
                    <ChevronRight className="h-4 w-4" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Resources</h4>
            <ul className="space-y-2.5">
              {schoolContent.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="focus-ring inline-flex items-center gap-2 text-sm transition hover:text-accent">
                    <ChevronRight className="h-4 w-4" /> {link.label}
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
              <li className="pt-2">
                <a
                  href={schoolContent.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex rounded-full border border-white/15 px-4 py-2 font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:border-accent hover:text-accent"
                >
                  Open Campus Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">School Snapshot</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/72">
              Disciplined learning, inclusive growth, academic structure, co-curricular opportunity and parent-friendly
              digital access built into one modern school experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {schoolContent.statistics.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">{stat.label}</p>
                <p className="mt-2 text-lg font-bold uppercase text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-skyback-light/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}, {siteConfig.brandSuffix}. All rights reserved.</p>
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
