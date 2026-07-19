import { Box, Fab } from '@mui/material'
import { MessageCircle, Send } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function FloatingButtons() {
  const { openEnquiry } = useEnquiryModal()

  if (!siteConfig.features.floatingWhatsapp && !siteConfig.features.floatingEnquire) return null

  return (
    <Box sx={{ position: 'fixed', right: 20, bottom: 20, zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1.5 }}>
      {siteConfig.features.floatingEnquire && (
        <Fab
          color="secondary"
          onClick={() => openEnquiry('General Enquiry')}
          aria-label="Open enquiry form"
          sx={{ boxShadow: 5 }}
        >
          <Send size={24} />
        </Fab>
      )}
      {siteConfig.features.floatingWhatsapp && (
        <Fab
          component="a"
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Air%20Force%20School%20Nagpur`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{ backgroundColor: '#25D366', color: '#fff', boxShadow: 5, '&:hover': { backgroundColor: '#1fb95a' } }}
        >
          <MessageCircle size={24} />
        </Fab>
      )}
    </Box>
  )
}
