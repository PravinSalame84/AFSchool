import {
  Box,
  Chip,
  Divider,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook } from '@mui/icons-material'
import {
  ChevronRight,
  Globe,
  Image,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react'
import Container from '../ui/Container'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import appContent from '../../data/appContent'
import { footerQuickLinks, resourceLinks } from '../../data/siteLinks'
import {
  BRAND_ALPHA,
  BRAND_NEUTRALS,
  SOCIAL_COLORS,
  UPPERCASE_LABEL_SX,
} from '../../constants/brand'
import {
  FOOTER_CONNECT_LINK_SX,
  FOOTER_PANEL_GLOW_SECONDARY_SX,
  FOOTER_PANEL_GLOW_SX,
  FOOTER_SECTION_CARD_SX,
  FOOTER_SOCIAL_BUTTON_SX,
  HERO_BADGE_CHIP_SX,
} from '../../constants/uiStyles'

const socialLinks = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    icon: Facebook,
    color: SOCIAL_COLORS.facebook,
    isMuiIcon: true,
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: Instagram,
    color: SOCIAL_COLORS.instagram,
  },
  {
    label: 'X',
    href: siteConfig.social.x,
    icon: Twitter,
    color: SOCIAL_COLORS.x,
  },
  {
    label: 'YouTube',
    href: siteConfig.social.youtube,
    icon: Youtube,
    color: SOCIAL_COLORS.youtube,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedIn,
    icon: Linkedin,
    color: SOCIAL_COLORS.linkedIn,
  },
]

const connectLinks = [
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

const footerLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  minHeight: 42,
  px: 1.4,
  py: 1,
  borderRadius: '0.95rem',
  border: `1px solid ${BRAND_ALPHA.white16}`,
  backgroundColor: BRAND_ALPHA.white09,
  backdropFilter: 'blur(18px)',
  fontSize: '0.92rem',
  fontWeight: 700,
  color: BRAND_ALPHA.white92,
  wordBreak: 'break-word',
  transition: 'transform .22s ease, border-color .22s ease, background-color .22s ease, color .22s ease',
  '&:hover': {
    color: BRAND_NEUTRALS.white,
    borderColor: BRAND_ALPHA.accent48,
    backgroundColor: BRAND_ALPHA.accent16,
    boxShadow: `0 20px 36px -28px ${BRAND_ALPHA.accent75}`,
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
        background: BRAND_NEUTRALS.inkSoft,
          // `linear-gradient(180deg, rgba(17,26,36,0.94) 50%, rgba(28,47,61,0.95) 100%)`,
        color: BRAND_NEUTRALS.whiteSoft,
      }}
    >
      {/* <Box sx={{ position: 'absolute', insetInline: 0, top: 0, height: 1, background: `linear-gradient(90deg, transparent, ${BRAND_ALPHA.sky8}, transparent)` }} /> */}
      {/* <Box sx={FOOTER_PANEL_GLOW_SX} /> 
      <Box sx={FOOTER_PANEL_GLOW_SECONDARY_SX} />  */}
      <Container sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 }, py: { xs: 6, sm: 7, lg: 9 } }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 1.5, sm: 2 },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', lg: 'minmax(0, 1.25fr) repeat(3, minmax(0, 0.9fr))' },
            alignItems: 'start',
          }}
        >
          <Box sx={FOOTER_SECTION_CARD_SX}>
            <Logo tone="light" />
            <Typography sx={{ mt: 2.5, maxWidth: 420, fontSize: { xs: '0.9rem', sm: '0.95rem' }, lineHeight: 1.9, color: BRAND_ALPHA.white8 }}>
              {appContent.sections.footer.description}
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3, maxWidth: 460 }}>
              {schoolContent.hero.badges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  sx={{
                    height: { xs: 40, sm: 50 },
                    ...HERO_BADGE_CHIP_SX,
                    fontSize: { xs: '0.75rem', sm: '0.82rem' },
                    fontWeight: 700,
                    maxWidth: '100%',
                    '& .MuiChip-label': {
                      px: { xs: 1.1, sm: 1.5 },
                      whiteSpace: 'normal',
                    },
                  }}
                />
              ))}
              {/* {schoolContent.hero.badges.map((badge) => (
                <Chip
                  key={badge}
                  label={badge}
                  sx={{
                    maxWidth: '100%',
                    borderRadius: '999px',
                    border: `1px solid ${BRAND_ALPHA.white14}`,
                    color: BRAND_ALPHA.white78,
                    backgroundColor: BRAND_ALPHA.white07,
                    backdropFilter: 'blur(18px)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: '0.7rem',
                    paddingY: 1,
                    '& .MuiChip-label': {
                      whiteSpace: 'normal',
                    },
                  }}
                />
              ))} */}
            </Stack>
            <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
              {socialLinks.map(({ label, href, icon: Icon, color, isMuiIcon }) => (
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
                    backgroundColor: color,
                    ...FOOTER_SOCIAL_BUTTON_SX,
                  }}
                >
                  {isMuiIcon ? <Icon fontSize="small" /> : <Icon size={18} />}
                </IconButton>
              ))}
            </Stack>
            <Stack direction="row" spacing={1.1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <MuiLink
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  underline="none"
                  sx={FOOTER_CONNECT_LINK_SX}
                >
                  <Icon size={15} />
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box sx={FOOTER_SECTION_CARD_SX}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', color: BRAND_NEUTRALS.white, ...UPPERCASE_LABEL_SX }}>
              {appContent.sections.footer.headings.quickLinks}
            </Typography>
            <Stack spacing={1.5}>
              {footerQuickLinks.map((link) => (
                <MuiLink key={link.label} component={Link} to={link.to} underline="none" sx={footerLinkSx}>
                  <ChevronRight size={16} />
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box sx={FOOTER_SECTION_CARD_SX}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', color: BRAND_NEUTRALS.white, ...UPPERCASE_LABEL_SX }}>
              {appContent.sections.footer.headings.resources}
            </Typography>
            <Stack spacing={1.5}>
              {resourceLinks.map((item) => (
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
          <Box sx={FOOTER_SECTION_CARD_SX}>
            <Typography sx={{ mb: 2.5, fontSize: '0.875rem', color: BRAND_NEUTRALS.white, ...UPPERCASE_LABEL_SX }}>
              {appContent.sections.footer.headings.contact}
            </Typography>
            <Stack spacing={2} sx={{ color: BRAND_ALPHA.white84, fontSize: '0.92rem' }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MapPin size={18} color={BRAND_NEUTRALS.accentStrong} style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ wordBreak: 'break-word' }}>{siteConfig.contact.address}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Phone size={18} color={BRAND_NEUTRALS.accentStrong} />
                <MuiLink href={`tel:${siteConfig.contact.phone}`} underline="none" sx={{ color: BRAND_NEUTRALS.white, fontWeight: 700, wordBreak: 'break-word', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.phone}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Mail size={18} color={BRAND_NEUTRALS.accentStrong} />
                <MuiLink href={`mailto:${siteConfig.contact.email}`} underline="none" sx={{ color: BRAND_NEUTRALS.white, fontWeight: 700, wordBreak: 'break-word', '&:hover': { color: 'secondary.main' } }}>
                  {siteConfig.contact.email}
                </MuiLink>
              </Stack>
              <MuiLink href={schoolContent.contact.mapLink} target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'inline-flex', alignSelf: 'flex-start', mt: 1, px: 2.5, py: 1.15, borderRadius: '999px', border: `1px solid ${BRAND_ALPHA.white22}`, backgroundColor: BRAND_ALPHA.white12, backdropFilter: 'blur(18px)', color: BRAND_NEUTRALS.white, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main', backgroundColor: BRAND_ALPHA.accent16 } }}>
                Open Campus Map
              </MuiLink>
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ mt: { xs: 4.5, sm: 6 }, borderColor: BRAND_ALPHA.white14 }} />
        <Box sx={{ pt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2, color: BRAND_ALPHA.white72 }}>
          <Typography sx={{ fontSize: '0.78rem', textAlign: { xs: 'left', md: 'left' } }}>
            © {new Date().getFullYear()} {siteConfig.brandName},{' '}
            {siteConfig.brandSuffix}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
            <MuiLink component={Link} to="/privacy-policy" underline="none" sx={{ fontSize: '0.78rem', color: BRAND_NEUTRALS.white, fontWeight: 700, '&:hover': { color: 'secondary.main' } }}>
              {appContent.sections.footer.legal.privacy}
            </MuiLink>
            <MuiLink component={Link} to="/terms" underline="none" sx={{ fontSize: '0.78rem', color: BRAND_NEUTRALS.white, fontWeight: 700, '&:hover': { color: 'secondary.main' } }}>
              {appContent.sections.footer.legal.terms}
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
