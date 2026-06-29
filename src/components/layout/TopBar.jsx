import {
  alpha,
  AppBar,
  Button,
  Chip,
  Container,
  Link as MuiLink,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'

export default function TopBar({ compact = false }) {
  const { openEnquiry } = useEnquiryModal()
  const theme = useTheme()

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        display: { xs: 'none', lg: 'block' },
        maxHeight: compact ? 0 : 80,
        opacity: compact ? 0 : 1,
        transform: compact ? 'translateY(-12px)' : 'translateY(0)',
        pointerEvents: compact ? 'none' : 'auto',
        overflow: 'hidden',
        transition: 'max-height 320ms ease, opacity 240ms ease, transform 320ms ease',
        bgcolor: 'transparent',
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 54,
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={2.5} alignItems="center" sx={{ minWidth: 0, flexWrap: 'wrap' }}>
            <MuiLink href={`tel:${siteConfig.contact.phone}`} underline="none" color="inherit">
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone size={15} />
                <Typography variant="caption" fontWeight={700}>
                  {siteConfig.contact.phone}
                </Typography>
              </Stack>
            </MuiLink>

            <MuiLink href={`mailto:${siteConfig.contact.email}`} underline="none" color="inherit">
              <Stack direction="row" spacing={1} alignItems="center">
                <Mail size={15} />
                <Typography variant="caption" fontWeight={700}>
                  {siteConfig.contact.email}
                </Typography>
              </Stack>
            </MuiLink>

            <Chip
              icon={<ShieldCheck size={14} />}
              label={schoolContent.contact.affiliation}
              variant="outlined"
              size="small"
              sx={{
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.36) : alpha('#fff', 0.72),
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              component="a"
              href={schoolContent.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<MapPinned size={16} />}
              color="inherit"
              variant="text"
              sx={{ fontWeight: 700 }}
            >
              Visit Campus
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => openEnquiry('School Details Request')}
              sx={{ fontWeight: 800 }}
            >
              Request School Details
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
