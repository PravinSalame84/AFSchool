import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import navigation from '../../data/navigation'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.external) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:bg-white hover:text-primary-900"
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
            isActive ? 'bg-primary-900 text-white' : 'text-primary-700 hover:bg-white hover:text-primary-900'
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
        className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-primary-700 transition hover:bg-white hover:text-primary-900"
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-0 top-full z-30 mt-3 min-w-[280px] rounded-[1.7rem] border border-white/70 bg-white/88 p-2 shadow-card backdrop-blur-xl transition-all duration-200 ${
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
              className="focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.09em] text-primary-700 transition hover:bg-skyback-soft hover:text-primary-900"
            >
              {child.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              key={child.label}
              to={child.to}
              className="focus-ring block rounded-2xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.09em] text-primary-700 transition hover:bg-skyback-soft hover:text-primary-900"
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
        className="focus-ring flex items-center justify-between border-b border-primary-50 px-1 py-3.5 text-[15px] font-semibold text-primary-800"
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
        className="focus-ring block border-b border-primary-50 px-1 py-3.5 text-[15px] font-semibold text-primary-800"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-primary-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="focus-ring flex w-full items-center justify-between px-1 py-3.5 text-[15px] font-semibold text-primary-800"
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
              className="focus-ring flex items-center justify-between rounded-lg px-4 py-2 text-[14px] text-primary-600 hover:bg-skyback-soft"
            >
              {child.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              key={child.label}
              to={child.to}
              onClick={onNavigate}
              className="focus-ring block rounded-lg px-4 py-2 text-[14px] text-primary-600 hover:bg-skyback-soft"
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
      <div className="container mx-auto nav-curve flex items-center justify-between px-4 py-3 sm:px-5">
        <Logo />

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button size="sm" variant="dark" onClick={() => openEnquiry('General Enquiry')} icon={false}>
            {siteConfig.cta.enquire}
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-full bg-primary-900 p-2 text-white xl:hidden"
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
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white/96 p-5 shadow-card backdrop-blur-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="focus-ring rounded-lg p-2 text-primary-500"
            >
              <X className="h-6 w-6" />
            </button>
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
