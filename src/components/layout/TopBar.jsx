import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function TopBar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        borderBottom: '1px solid rgba(255,255,255,0.22)',
        backgroundColor: 'rgba(231,241,248,0.34)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <Box sx={{ maxWidth: 1536, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 }, py: 1.25, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Link href={`tel:${siteConfig.contact.phone}`} underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'secondary.main', '&:hover': { color: 'text.primary' } }}>
            <Phone size={14} /> {siteConfig.contact.phone}
          </Link>
          <Link href={`mailto:${siteConfig.contact.email}`} underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'secondary.main', '&:hover': { color: 'text.primary' } }}>
            <Mail size={14} /> {siteConfig.contact.email}
          </Link>
          <Typography sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'secondary.main' }}>
            <ShieldCheck size={14} /> {schoolContent.contact.affiliation}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link href={schoolContent.contact.mapLink} target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'secondary.main', '&:hover': { color: 'text.primary' } }}>
            <MapPinned size={14} /> Visit Campus
          </Link>
          <Button
            type="button"
            onClick={() => openEnquiry('School Details Request')}
            variant="outlined"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(18px)',
              color: 'primary.main',
              fontSize: '0.7rem',
              px: 2,
              py: 0.85,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.22)',
                borderColor: 'rgba(240,147,75,0.4)',
                color: 'secondary.dark',
              },
            }}
          >
            {siteConfig.cta.brochure}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
