import { alpha } from '@mui/material/styles'
import { Box, Fab, Chip, Tooltip } from '@mui/material'
import { Send, MessageCircle } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { brandColors } from '../../theme/colorTokens'

export default function FloatingButtons() {
  const { openEnquiry } = useEnquiryModal()

  if (!siteConfig.features.floatingWhatsapp && !siteConfig.features.floatingEnquire) {
    return null
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2,
        zIndex: 1400,
      }}
    >
      {/* Enquiry Button */}
      {siteConfig.features.floatingEnquire && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label="Enquire"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              bgcolor: alpha(brandColors.white, 0.85),
              color: 'primary.main',
              backdropFilter: 'blur(10px)',
            }}
          />

          <Tooltip title="Open enquiry form">
            <Fab
              onClick={() => openEnquiry('General Enquiry')}
              sx={{
                bgcolor: 'secondary.main',
                color: brandColors.white,
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'scale(1.05)',
                },
                animation: 'floatY 3s ease-in-out infinite',
              }}
              size="medium"
            >
              <Send size={22} />
            </Fab>
          </Tooltip>
        </Box>
      )}

      {/* WhatsApp Button */}
      {siteConfig.features.floatingWhatsapp && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label="WhatsApp"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              bgcolor: alpha(brandColors.white, 0.85),
              color: 'primary.main',
              backdropFilter: 'blur(10px)',
            }}
          />

          <Tooltip title="Chat on WhatsApp">
            <Fab
              component="a"
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Air%20Force%20School%20Nagpur`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: brandColors.whatsapp,
                color: brandColors.white,
                '&:hover': {
                  bgcolor: brandColors.whatsappDeep,
                  transform: 'scale(1.05)',
                },
              }}
              size="medium"
            >
              <MessageCircle size={22} />
            </Fab>
          </Tooltip>
        </Box>
      )}
    </Box>
  )
}
