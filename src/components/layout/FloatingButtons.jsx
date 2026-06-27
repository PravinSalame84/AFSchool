import { MessageCircle, Send } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function FloatingButtons() {
  const { openEnquiry } = useEnquiryModal()

  if (!siteConfig.features.floatingWhatsapp && !siteConfig.features.floatingEnquire) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {siteConfig.features.floatingEnquire && (
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/60 bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-800 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-primary-950/85 dark:text-white sm:inline-flex">
            Enquire
          </span>
          <button
            type="button"
            onClick={() => openEnquiry('General Enquiry')}
            aria-label="Open enquiry form"
            className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-card transition hover:scale-105 hover:bg-accent-dark animate-floatY"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>
      )}
      {siteConfig.features.floatingWhatsapp && (
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/60 bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-800 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-primary-950/85 dark:text-white sm:inline-flex">
            WhatsApp
          </span>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Air%20Force%20School%20Nagpur`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      )}
    </div>
  )
}
