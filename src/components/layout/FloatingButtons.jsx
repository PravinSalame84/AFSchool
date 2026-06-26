import { MessageCircle, Send } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function FloatingButtons() {
  const { openEnquiry } = useEnquiryModal()

  if (!siteConfig.features.floatingWhatsapp && !siteConfig.features.floatingEnquire) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {siteConfig.features.floatingEnquire && (
        <button
          type="button"
          onClick={() => openEnquiry('General Enquiry')}
          aria-label="Open enquiry form"
          className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-card transition hover:bg-accent-dark hover:scale-105 animate-floatY"
        >
          <Send className="h-6 w-6" />
        </button>
      )}
      {siteConfig.features.floatingWhatsapp && (
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Brightland`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      )}
    </div>
  )
}
