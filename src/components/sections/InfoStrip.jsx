import { Box, Paper, Typography } from '@mui/material'
import { ClipboardList, Wallet, MapPinned, MailQuestion } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { Link } from 'react-router-dom'
import { BRAND_ALPHA, BRAND_NEUTRALS, BRAND_SHADOWS, SECTION_BACKGROUNDS } from '../../constants/brand'

const items = [
  { icon: ClipboardList, label: 'Admission Process', to: '/admissions' },
  { icon: Wallet, label: 'Fee Structure', to: '/admissions#fees' },
  { icon: MapPinned, label: 'Locations', to: '/locations' },
  { icon: MailQuestion, label: 'Enquiry Form', action: 'enquiry' },
]

export default function InfoStrip() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <Box component="section" sx={{ bgcolor: SECTION_BACKGROUNDS.strip, pb: 1, mt: { xs: -3, sm: -4, lg: -5 }, position: 'relative', zIndex: 3 }}>
      <Container sx={{ px: { xs: 1, sm: 1, lg: 1 } }}>
        <RevealOnScroll>
          <Paper
            sx={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 2,
              p: { xs: 1.5, sm: 2.25, lg: 2.5 },
              borderRadius: '2rem',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,249,240,0.92) 100%)',
              border: '1px solid rgba(255,202,112,0.22)',
              boxShadow: BRAND_SHADOWS.float,
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,178,44,0.22), transparent 68%)',
              },
            }}
          >
            {items.map(({ icon: Icon, label, to, action }) => {
              const inner = (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      width: 50,
                      height: 50,
                      flexShrink: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '18px 18px 18px 6px',
                      bgcolor: iTemColor(label).bg,
                      color: iTemColor(label).fg,
                      boxShadow: '0 14px 26px -20px rgba(17,26,36,0.35)',
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                  <Typography sx={{ color: 'primary.main', fontSize: '0.92rem', fontWeight: 800 }}>{label}</Typography>
                </Box>
              )
              return action ? (
                <Box
                  key={label}
                  component="button"
                  onClick={() => openEnquiry('General Enquiry')}
                  sx={{ display: 'flex', alignItems: 'center', border: 0, borderRadius: '1.4rem', background: 'transparent', p: 1.15, textAlign: 'left', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(255,248,230,0.9)' } }}
                >
                  {inner}
                </Box>
              ) : (
                <Box
                  key={label}
                  component={Link}
                  to={to}
                  sx={{ display: 'flex', alignItems: 'center', borderRadius: '1.4rem', p: 1.15, textDecoration: 'none', '&:hover': { backgroundColor: 'rgba(255,248,230,0.9)' } }}
                >
                  {inner}
                </Box>
              )
            })}
          </Paper>
        </RevealOnScroll>
      </Container>
    </Box>
  )
}

function iTemColor(label) {
  const palette = {
    'Admission Process': { bg: '#fff0c5', fg: '#d67d08' },
    'Fee Structure': { bg: '#dff5ff', fg: '#186d95' },
    Locations: { bg: '#e3f8d9', fg: '#438b1f' },
    'Enquiry Form': { bg: '#ffe1ec', fg: '#ca466f' },
  }

  return palette[label] || { bg: BRAND_NEUTRALS.sectionSky, fg: 'primary.light' }
}
