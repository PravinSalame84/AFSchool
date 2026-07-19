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
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'

const socialLinks = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: Instagram,
  },
  {
    label: 'X',
    href: siteConfig.social.x,
    icon: Twitter,
  },
  {
    label: 'YouTube',
    href: siteConfig.social.youtube,
    icon: Youtube,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedIn,
    icon: Linkedin,
  },
]

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Campus Life', to: '/why-us' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'primary.main', color: '#fff' }}>
      <Box sx={{ position: 'absolute', insetInline: 0, top: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
      <Box sx={{ position: 'absolute', top: -80, right: 0, width: 256, height: 256, borderRadius: '50%', bgcolor: 'rgba(240,147,75,0.2)', filter: 'blur(48px)' }} />
      <Container sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 }, py: 9 }}>
        <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } }}>
          <Box>
            <Logo tone="light" />
            <Typography sx={{ mt: 2.5, fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.72)' }}>
              A redesigned school experience for Air Force School
              VayuSena Nagar with modern visuals, better accessibility,
              and improved parent engagement.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
              {schoolContent.hero.badges.map((badge) => (
                <Chip key={badge} label={badge} sx={{ borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', backgroundColor: 'transparent', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.7rem' }} />
              ))}
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
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
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'secondary.main',
                      color: 'primary.main',
                    },
                  }}
                >
                  <Icon size={18} />
                </IconButton>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Quick Links</Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <MuiLink key={link.label} component={Link} to={link.to} underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', '&:hover': { color: 'secondary.main' } }}>
                  <ChevronRight size={16} />
                    {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Resources</Typography>
            <Stack spacing={1.5}>
              {schoolContent.resources.map((item) => (
                <MuiLink
                  key={item.label}
                  underline="none"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', '&:hover': { color: 'secondary.main' } }}
                >
                  <ChevronRight size={16} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Contact Us</Typography>
            <Stack spacing={2} sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.9rem' }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MapPin size={18} color="#f0934b" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography>{siteConfig.contact.address}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Phone size={18} color="#f0934b" />
                <MuiLink href={`tel:${siteConfig.contact.phone}`} underline="none" sx={{ color: 'inherit', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.phone}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Mail size={18} color="#f0934b" />
                <MuiLink href={`mailto:${siteConfig.contact.email}`} underline="none" sx={{ color: 'inherit', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.email}
                </MuiLink>
              </Stack>
              <MuiLink href={schoolContent.contact.mapLink} target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'inline-flex', alignSelf: 'flex-start', mt: 1, px: 2.5, py: 1, borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' } }}>
                Open Campus Map
              </MuiLink>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2, color: 'rgba(255,255,255,0.6)' }}>
          <Typography sx={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} {siteConfig.brandName},{' '}
            {siteConfig.brandSuffix}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink component={Link} to="/privacy-policy" underline="none" sx={{ fontSize: '0.75rem', color: 'inherit', '&:hover': { color: 'secondary.main' } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink component={Link} to="/terms" underline="none" sx={{ fontSize: '0.75rem', color: 'inherit', '&:hover': { color: 'secondary.main' } }}>
              Terms & Conditions
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
