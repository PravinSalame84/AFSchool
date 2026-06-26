import { Phone, Mail, Download } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function TopBar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <div className="hidden bg-primary-900 text-skyback-light/90 lg:block">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-[13px] sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a href={`tel:${siteConfig.contact.phone}`} className="focus-ring flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" /> {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> {siteConfig.contact.email}
          </a>
        </div>
        <button
          type="button"
          onClick={() => openEnquiry('Brochure Request')}
          className="focus-ring flex items-center gap-1.5 font-semibold text-accent transition hover:text-accent-light"
        >
          <Download className="h-3.5 w-3.5" /> {siteConfig.cta.brochure}
        </button>
      </div>
    </div>
  )
}
