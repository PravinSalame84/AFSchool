import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import navigation from '../../data/navigation'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import SiteSearch from './SiteSearch'
import NavigationTitleBadge from './NavigationTitleBadge'

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.external) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:bg-gradient-to-r hover:from-skyback-light hover:to-white hover:text-primary-900 hover:shadow-soft dark:text-white/88 dark:hover:bg-gradient-to-r dark:hover:from-primary-800/90 dark:hover:to-primary-700/90 dark:hover:text-white"
      >
        {item.label} <ExternalLink className="h-3 w-3" />
      </a>
    )
  }

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `focus-ring rounded-full px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] transition ${
            isActive
              ? 'bg-primary-900 text-white dark:bg-white dark:text-primary-950'
              : 'text-primary-700 hover:bg-gradient-to-r hover:from-skyback-light hover:to-white hover:text-primary-900 hover:shadow-soft dark:text-white/88 dark:hover:bg-gradient-to-r dark:hover:from-primary-800/90 dark:hover:to-primary-700/90 dark:hover:text-white'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:bg-gradient-to-r hover:from-skyback-light hover:to-white hover:text-primary-900 hover:shadow-soft dark:text-white/88 dark:hover:bg-gradient-to-r dark:hover:from-primary-800/90 dark:hover:to-primary-700/90 dark:hover:text-white"
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`submenu-surface absolute left-0 top-full z-30 mt-3 min-w-[300px] rounded-[1.7rem] p-2 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        {item.children.map((child) =>
          child.external ? (
            <a
              key={child.label}
              href={child.to}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.09em] text-primary-800 transition hover:bg-gradient-to-r hover:from-accent/16 hover:via-skyback-soft hover:to-white hover:text-primary-900 hover:shadow-soft dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-primary-800/95 dark:hover:via-primary-700/90 dark:hover:to-secondary dark:hover:text-white"
            >
              {child.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              key={child.label}
              to={child.to}
              className="focus-ring block rounded-2xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.09em] text-primary-800 transition hover:bg-gradient-to-r hover:from-accent/16 hover:via-skyback-soft hover:to-white hover:text-primary-900 hover:shadow-soft dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-primary-800/95 dark:hover:via-primary-700/90 dark:hover:to-secondary dark:hover:text-white"
            >
              {child.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

function MobileItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false)

  if (item.external) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex items-center justify-between rounded-xl border-b border-primary-100/90 px-2 py-3.5 text-[15px] font-semibold text-primary-800 transition hover:bg-skyback-soft/70 dark:border-white/10 dark:text-white dark:hover:bg-primary-800/60"
      >
        {item.label}
        <ExternalLink className="h-4 w-4 text-primary-300" />
      </a>
    )
  }

  if (!item.children) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className="focus-ring block rounded-xl border-b border-primary-100/90 px-2 py-3.5 text-[15px] font-semibold text-primary-800 transition hover:bg-skyback-soft/70 dark:border-white/10 dark:text-white dark:hover:bg-primary-800/60"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-primary-100/90 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="focus-ring flex w-full items-center justify-between rounded-xl px-2 py-3.5 text-[15px] font-semibold text-primary-800 transition hover:bg-skyback-soft/70 dark:text-white dark:hover:bg-primary-800/60"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all ${open ? 'max-h-96 pb-2' : 'max-h-0'}`}>
        {item.children.map((child) =>
          child.external ? (
            <a
              key={child.label}
              href={child.to}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center justify-between rounded-xl px-4 py-2 text-[14px] font-medium text-primary-700 hover:bg-gradient-to-r hover:from-accent/12 hover:to-skyback-soft hover:text-primary-900 dark:text-slate-200 dark:hover:bg-gradient-to-r dark:hover:from-primary-800/90 dark:hover:to-primary-700/80 dark:hover:text-white"
            >
              {child.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              key={child.label}
              to={child.to}
              onClick={onNavigate}
              className="focus-ring block rounded-xl px-4 py-2 text-[14px] font-medium text-primary-700 hover:bg-gradient-to-r hover:from-accent/12 hover:to-skyback-soft hover:text-primary-900 dark:text-slate-200 dark:hover:bg-gradient-to-r dark:hover:from-primary-800/90 dark:hover:to-primary-700/80 dark:hover:text-white"
            >
              {child.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { openEnquiry } = useEnquiryModal()

  useEffect(() => setMobileOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <nav className="px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div className="container mx-auto nav-curve relative flex items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-5">
        <div className="pointer-events-none absolute inset-y-3 left-[22%] hidden w-px bg-gradient-to-b from-transparent via-primary-900/12 to-transparent dark:via-white/10 xl:block" />
        <Logo />
        <div className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {navigation.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex xl:flex-shrink-0">
          <SiteSearch />
          <ThemeToggle />
          <Button size="sm" variant="dark" onClick={() => openEnquiry('General Enquiry')} icon={false}>
            {siteConfig.cta.enquire}
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-full bg-gradient-to-r from-secondary to-primary-700 p-2 text-white dark:bg-white dark:text-primary-950 xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div className={`fixed inset-0 z-40 xl:hidden ${mobileOpen ? 'visible' : 'invisible'}`} aria-hidden={!mobileOpen}>
        <div
          className={`absolute inset-0 bg-primary-900/50 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[90%] max-w-sm overflow-y-auto border-l border-white/40 bg-gradient-to-b from-white/96 via-white/94 to-skyback-soft/90 p-4 shadow-card backdrop-blur-xl transition-transform duration-300 sm:p-5 dark:border-white/10 dark:bg-gradient-to-b dark:from-primary-950/96 dark:via-primary-950/94 dark:to-primary-900/90 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <Logo className="min-w-0 pr-2" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="focus-ring rounded-lg p-2 text-primary-500 dark:text-white/70"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <SiteSearch />
            <ThemeToggle />
          </div>

          <div>
            {navigation.map((item) => (
              <MobileItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </div>

          <Button
            className="mt-5 w-full"
            variant="dark"
            onClick={() => {
              setMobileOpen(false)
              openEnquiry('General Enquiry')
            }}
            icon={false}
          >
            {siteConfig.cta.enquire}
          </Button>
        </div>
      </div>
    </nav>
  )
}
