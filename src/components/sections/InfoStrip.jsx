import { Box, Paper, Typography } from '@mui/material'
import { ClipboardList, Wallet, MapPinned, MailQuestion } from 'lucide-react'
import Container from '../ui/Container'
import RevealOnScroll from '../ui/RevealOnScroll'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { Link } from 'react-router-dom'

const items = [
  { icon: ClipboardList, label: 'Admission Process', to: '/admissions' },
  { icon: Wallet, label: 'Fee Structure', to: '/admissions#fees' },
  { icon: MapPinned, label: 'Locations', to: '/locations' },
  { icon: MailQuestion, label: 'Enquiry Form', action: 'enquiry' },
]

export default function InfoStrip() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <Box component="section" sx={{ bgcolor: '#e8f1f6', pb: 1, mt: { xs: -3, sm: -4, lg: -5 }, position: 'relative', zIndex: 3 }}>
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <RevealOnScroll>
          <Paper
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 2,
              p: { xs: 1.5, sm: 2.25, lg: 2.5 },
              borderRadius: { xs: 4, md: 5 },
              backgroundColor: 'rgba(255,255,255,0.86)',
              boxShadow: '0 28px 64px -36px rgba(17, 26, 36, 0.34)',
              backdropFilter: 'blur(24px)',
            }}
          >
            {items.map(({ icon: Icon, label, to, action }) => {
              const inner = (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', width: 46, height: 46, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '18px', bgcolor: '#d7eff6', color: 'primary.light' }}>
                    <Icon size={20} />
                  </Box>
                  <Typography sx={{ color: 'primary.main', fontSize: '0.92rem', fontWeight: 700 }}>{label}</Typography>
                </Box>
              )
              return action ? (
                <Box
                  key={label}
                  component="button"
                  onClick={() => openEnquiry('General Enquiry')}
                  sx={{ display: 'flex', alignItems: 'center', border: 0, borderRadius: 3, background: 'transparent', p: 1.15, textAlign: 'left', cursor: 'pointer', '&:hover': { backgroundColor: '#eef3f8' } }}
                >
                  {inner}
                </Box>
              ) : (
                <Box
                  key={label}
                  component={Link}
                  to={to}
                  sx={{ display: 'flex', alignItems: 'center', borderRadius: 3, p: 1.15, textDecoration: 'none', '&:hover': { backgroundColor: '#eef3f8' } }}
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
