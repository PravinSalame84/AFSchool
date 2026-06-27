import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function TopBar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <div className="hidden border-b border-white/40 bg-gradient-to-r from-white/80 via-skyback-soft/70 to-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-r dark:from-primary-950/82 dark:via-primary-900/72 dark:to-primary-950/82 lg:block">
      <div className="container mx-auto flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-700 dark:text-slate-200 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="focus-ring flex items-center gap-1.5 transition hover:text-primary-900 dark:hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" /> {siteConfig.contact.phone}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="focus-ring flex items-center gap-1.5 transition hover:text-primary-900 dark:hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" /> {siteConfig.contact.email}
          </a>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> {schoolContent.contact.affiliation}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={schoolContent.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 transition hover:text-primary-900 dark:hover:text-white"
          >
            <MapPinned className="h-3.5 w-3.5" /> Visit Campus
          </a>
          <button
            type="button"
            onClick={() => openEnquiry('School Details Request')}
            className="focus-ring rounded-full bg-gradient-to-r from-secondary to-primary-700 px-4 py-1.5 text-[11px] text-white transition hover:from-primary-900 hover:to-primary-600 dark:bg-white dark:text-primary-950"
          >
            {siteConfig.cta.brochure}
          </button>
        </div>
      </div>
    </div>
  )
}
