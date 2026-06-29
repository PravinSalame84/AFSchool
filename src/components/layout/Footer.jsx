import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Facebook,
  FileText,
  Globe,
  Images,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Twitter,
  Youtube,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import ActionPill from '../ui/ActionPill'
import OptimizedImage from '../ui/OptimizedImage'

const quickLinks = schoolContent.quickLinks.slice(0, 4)
const socialLinks = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    icon: Facebook,
    className: 'from-[#1877F2] to-[#0c5dd6] text-white border-[#72a9ff]/30',
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: Instagram,
    className: 'from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white border-[#f3a16c]/30',
  },
  {
    label: 'X',
    href: siteConfig.social.x,
    icon: Twitter,
    className: 'from-[#1f2937] to-black text-white border-white/15',
  },
  {
    label: 'YouTube',
    href: siteConfig.social.youtube,
    icon: Youtube,
    className: 'from-[#ff3131] to-[#cc0000] text-white border-[#ff8f8f]/25',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedIn,
    icon: Linkedin,
    className: 'from-[#0A66C2] via-[#0077B5] to-[#005582] text-white border-[#7CC4FF]/30',
  },
]
const connectLinks = [
  { label: 'Website', href: siteConfig.social.website, icon: Globe, internal: true },
  { label: 'Gallery', href: siteConfig.social.gallery, icon: Images, internal: true },
  { label: 'Maps', href: siteConfig.social.maps, icon: MapPin },
  { label: 'Email', href: `mailto:${siteConfig.contact.email}`, icon: Mail },
  { label: 'WhatsApp', href: `https://wa.me/${siteConfig.contact.whatsapp}`, icon: MessageCircle },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary-900 to-primary-700 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/24 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-info/14 blur-3xl" />
      <Container className="relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">
          <div>
            <Logo tone="light" variant="footer" className="inline-flex" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/74">
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
            <div className="mt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">Social Channels</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon, className }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border bg-gradient-to-br shadow-soft transition hover:-translate-y-0.5 hover:shadow-card ${className}`}
                      aria-label={label}
                      title={label}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border bg-gradient-to-br opacity-55 ${className}`}
                      aria-label={`${label} not configured`}
                      title={`Add ${label} link in src/data/siteConfig.js`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {connectLinks.map(({ label, href, icon: Icon, internal }) =>
                internal ? (
                  <ActionPill key={label} to={href} icon={Icon} variant="footerSoft">
                    {label}
                  </ActionPill>
                ) : (
                  <ActionPill key={label} href={href} icon={Icon} variant="footerSoft">
                    {label}
                  </ActionPill>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <ActionPill to={link.to} icon={ChevronRight} variant="footerText">
                    {link.label}
                  </ActionPill>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Resources</h4>
            <ul className="space-y-2.5">
              {schoolContent.resources.map((link) => (
                <li key={link.label}>
                  <ActionPill to={link.to} icon={ChevronRight} variant="footerText">
                    {link.label}
                  </ActionPill>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionPill to="/privacy-policy" icon={ShieldCheck} variant="footerSoft" className="border-white/12 bg-white/8">
                Privacy Policy
              </ActionPill>
              <ActionPill to="/terms" icon={FileText} variant="footerSoft" className="border-white/12 bg-white/8">
                Terms &amp; Conditions
              </ActionPill>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-airforce-gold" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-airforce-gold" />
                <a href={`tel:${siteConfig.contact.phone}`} className="focus-ring hover:text-airforce-gold">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-airforce-gold" />
                <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring hover:text-airforce-gold">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={schoolContent.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex rounded-full border border-white/15 px-4 py-2 font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:border-airforce-gold hover:bg-gradient-to-r hover:from-airforce-gold/20 hover:to-airforce-honey/16 hover:text-airforce-gold"
                >
                  Open Campus Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 via-white/6 to-info/10 p-4 backdrop-blur-md lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">School Snapshot</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/72">
              Disciplined learning, inclusive growth, academic structure, co-curricular opportunity and parent-friendly
              digital access built into one modern school experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {schoolContent.statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="frost-card overflow-hidden rounded-[1.8rem] p-3"
              >
                <div className="grid gap-4 sm:grid-cols-[92px_1fr] sm:items-center">
                  <OptimizedImage
                    src={stat.image}
                    alt={stat.label}
                    wrapperClassName="rounded-[1.2rem]"
                    className="h-24 w-full rounded-[1.2rem] object-cover"
                  />
                  <div className="px-2 py-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-400">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold uppercase text-primary-900 dark:text-white">{stat.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-primary-600 dark:text-slate-300">{stat.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-skyback-light/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}, {siteConfig.brandSuffix}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="focus-ring hover:text-airforce-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="focus-ring hover:text-airforce-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
