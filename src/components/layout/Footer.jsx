import { Link } from 'react-router-dom'
import { alpha } from '@mui/material/styles'
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { ChevronRight, Facebook } from '@mui/icons-material'
import {
  FileText,
  Globe,
  Images,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Twitter,
  Youtube,
} from 'lucide-react'
import Logo from './Logo'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, icon: Facebook, color: '#1877F2' },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: Instagram, color: '#E1306C' },
  { label: 'X', href: siteConfig.social.x, icon: Twitter, color: '#111827' },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: Youtube, color: '#FF0000' },
  { label: 'LinkedIn', href: siteConfig.social.linkedIn, icon: Linkedin, color: '#0A66C2' },
]

const connectLinks = [
  { label: 'Website', href: siteConfig.social.website, icon: Globe },
  { label: 'Gallery', href: siteConfig.social.gallery, icon: Images },
  { label: 'Maps', href: siteConfig.social.maps, icon: MapPin },
  { label: 'Email', href: `mailto:${siteConfig.contact.email}`, icon: Mail },
  { label: 'WhatsApp', href: `https://wa.me/${siteConfig.contact.whatsapp}`, icon: MessageCircle },
]

export default function Footer() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: { xs: 8, md: 10 },
        pt: { xs: 7, md: 9 },
        pb: 4,
        color: '#fff',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1d213c 45%, #344656 100%)'
          : 'linear-gradient(180deg, #1d213c 0%, #24364a 55%, #344656 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at top right, rgba(240,147,75,0.18), transparent 24%), radial-gradient(circle at left, rgba(93,138,168,0.2), transparent 28%)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, sm: 3, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            mb: 4,
            borderRadius: 4,
            p: { xs: 2.5, md: 3.5 },
            bgcolor: alpha('#fff', isDark ? 0.08 : 0.1),
            border: `1px solid ${alpha('#fff', isDark ? 0.1 : 0.14)}`,
            boxShadow: '0 20px 48px rgba(8, 15, 29, 0.22)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Logo tone="light" variant="footer" />
              <Typography sx={{ mt: 2, maxWidth: 720, color: alpha('#fff', 0.8), lineHeight: 1.8 }}>
                A focused digital experience for families, parents and school stakeholders with fast access to notices, downloads, academics, admissions and school support.
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2.5 }}>
                {schoolContent.hero.badges.map((badge) => (
                  <Paper
                    key={badge}
                    sx={{
                      px: 1.5,
                      py: 0.8,
                      borderRadius: 4,
                      bgcolor: alpha('#d7eff6', 0.12),
                      color: '#fff',
                      border: `1px solid ${alpha('#fff', 0.12)}`,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                      {badge}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent={{ xs: 'flex-start', lg: 'flex-end' }}>
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      width: 42,
                      height: 42,
                      bgcolor: color,
                      color: '#fff',
                      '&:hover': { transform: 'translateY(-2px)' },
                    }}
                  >
                    {label === 'Facebook' ? <Icon fontSize="small" /> : <Icon size={18} />}
                  </IconButton>
                ))}
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent={{ xs: 'flex-start', lg: 'flex-end' }} sx={{ mt: 2 }}>
                {connectLinks.map(({ label, href, icon: Icon }) => (
                  <Button
                    key={label}
                    component="a"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    startIcon={<Icon size={16} />}
                    size="small"
                    variant="outlined"
                    sx={{
                      color: '#fff',
                      borderColor: alpha('#fff', 0.18),
                      width: { xs: '100%', sm: 'auto' },
                      justifyContent: 'center',
                      '&:hover': {
                        borderColor: alpha('#fff', 0.34),
                        bgcolor: alpha('#d7eff6', 0.12),
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact
            </Typography>
            <Stack spacing={2} sx={{ mt: 2.5 }}>
              <Stack direction="row" spacing={1.25} alignItems="flex-start">
                <MapPin size={18} />
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.82), lineHeight: 1.8 }}>
                  {siteConfig.contact.address}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Phone size={18} />
                <MuiLink href={`tel:${siteConfig.contact.phone}`} color="inherit" underline="hover">
                  {siteConfig.contact.phone}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Mail size={18} />
                <MuiLink href={`mailto:${siteConfig.contact.email}`} color="inherit" underline="hover">
                  {siteConfig.contact.email}
                </MuiLink>
              </Stack>
              <Button
                href={schoolContent.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{ alignSelf: 'flex-start', width: { xs: '100%', sm: 'auto' } }}
              >
                Open Campus Map
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Quick Links
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              {schoolContent.quickLinks.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.to}
                  startIcon={<ChevronRight />}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#fff',
                    px: 0,
                    '&:hover': { bgcolor: 'transparent', color: '#ffd707' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Resources
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              {schoolContent.resources.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.to}
                  startIcon={<ChevronRight />}
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#fff',
                    px: 0,
                    '&:hover': { bgcolor: 'transparent', color: '#ffd707' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Policies
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              <Button component={Link} to="/privacy-policy" startIcon={<ShieldCheck size={16} />} sx={{ justifyContent: 'flex-start', color: '#fff', px: 0 }}>
                Privacy Policy
              </Button>
              <Button component={Link} to="/terms" startIcon={<FileText size={16} />} sx={{ justifyContent: 'flex-start', color: '#fff', px: 0 }}>
                Terms
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: alpha('#fff', 0.12) }} />

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.68) }}>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.68) }}>
            Built for fast access, responsive use and school-first clarity.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
