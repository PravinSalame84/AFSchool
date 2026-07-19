import {
  Box,
  Chip,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Globe,
  Image,
  Mail,
  MapPin,
  MapPinned,
  Phone,
} from 'lucide-react'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'

const socialLinks = [
  {
    label: 'Website',
    href: siteConfig.social.website,
    icon: Globe,
  },
  {
    label: 'Gallery',
    href: siteConfig.social.gallery,
    icon: Image,
  },
  {
    label: 'Map',
    href: siteConfig.social.maps,
    icon: MapPinned,
  },
]

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Campus Life', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const footerLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  minHeight: 42,
  px: 1.4,
  py: 1,
  borderRadius: '0.95rem',
  border: '1px solid rgba(255,255,255,0.16)',
  backgroundColor: 'rgba(255,255,255,0.09)',
  backdropFilter: 'blur(18px)',
  fontSize: '0.92rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.92)',
  wordBreak: 'break-word',
  transition: 'transform .22s ease, border-color .22s ease, background-color .22s ease, color .22s ease',
  '&:hover': {
    color: '#ffffff',
    borderColor: 'rgba(240,147,75,0.48)',
    backgroundColor: 'rgba(240,147,75,0.16)',
    transform: 'translateX(4px)',
  },
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(180deg, rgba(17,26,36,0.94) 0%, rgba(28,47,61,0.9) 100%)',
        color: '#fff',
      }}
    >
      <Box sx={{ position: 'absolute', insetInline: 0, top: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
      <Box sx={{ position: 'absolute', top: -80, right: 0, width: 256, height: 256, borderRadius: '50%', bgcolor: 'rgba(240,147,75,0.2)', filter: 'blur(48px)' }} />
      <Container sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 }, py: { xs: 6, sm: 7, lg: 9 } }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, sm: 5 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', lg: 'minmax(0, 1.25fr) repeat(3, minmax(0, 0.9fr))' },
            alignItems: 'start',
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Logo tone="light" />
            <Typography sx={{ mt: 2.5, maxWidth: 420, fontSize: { xs: '0.9rem', sm: '0.95rem' }, lineHeight: 1.9, color: 'rgba(255,255,255,0.8)' }}>
              A redesigned school experience for Air Force School
              VayuSena Nagar with modern visuals, better accessibility,
              and improved parent engagement.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3, maxWidth: 460 }}>
              {schoolContent.hero.badges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  sx={{
                    maxWidth: '100%',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: 'rgba(255,255,255,0.78)',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(18px)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: '0.7rem',
                    '& .MuiChip-label': {
                      whiteSpace: 'normal',
                    },
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    width: 40,
                    height: 40,
                    border: '1px solid rgba(255,255,255,0.16)',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(18px)',
                    color: '#fff',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(240,147,75,0.22)',
                      color: '#fff',
                    },
                  }}
                >
                  <Icon size={18} />
                </IconButton>
              ))}
            </Stack>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff' }}>Quick Links</Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <MuiLink key={link.label} component={Link} to={link.to} underline="none" sx={footerLinkSx}>
                  <ChevronRight size={16} />
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff' }}>Resources</Typography>
            <Stack spacing={1.5}>
              {schoolContent.resources.map((item) => (
                <MuiLink
                  key={item.label}
                  underline="none"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={footerLinkSx}
                >
                  <ChevronRight size={16} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff' }}>Contact Us</Typography>
            <Stack spacing={2} sx={{ color: 'rgba(255,255,255,0.84)', fontSize: '0.92rem' }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MapPin size={18} color="#f0934b" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ wordBreak: 'break-word' }}>{siteConfig.contact.address}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Phone size={18} color="#f0934b" />
                <MuiLink href={`tel:${siteConfig.contact.phone}`} underline="none" sx={{ color: '#ffffff', fontWeight: 700, wordBreak: 'break-word', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.phone}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Mail size={18} color="#f0934b" />
                <MuiLink href={`mailto:${siteConfig.contact.email}`} underline="none" sx={{ color: '#ffffff', fontWeight: 700, wordBreak: 'break-word', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.email}
                </MuiLink>
              </Stack>
              <MuiLink href={schoolContent.contact.mapLink} target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'inline-flex', alignSelf: 'flex-start', mt: 1, px: 2.5, py: 1.15, borderRadius: '999px', border: '1px solid rgba(255,255,255,0.22)', backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(18px)', color: '#ffffff', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main', backgroundColor: 'rgba(240,147,75,0.16)' } }}>
                Open Campus Map
              </MuiLink>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 4.5, sm: 6 }, pt: 3, borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2, color: 'rgba(255,255,255,0.72)' }}>
          <Typography sx={{ fontSize: '0.78rem', textAlign: { xs: 'left', md: 'left' } }}>
            © {new Date().getFullYear()} {siteConfig.brandName},{' '}
            {siteConfig.brandSuffix}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
            <MuiLink component={Link} to="/privacy-policy" underline="none" sx={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700, '&:hover': { color: 'secondary.main' } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink component={Link} to="/terms" underline="none" sx={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 700, '&:hover': { color: 'secondary.main' } }}>
              Terms & Conditions
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
