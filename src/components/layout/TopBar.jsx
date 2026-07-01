import {
  alpha,
  AppBar,
  Button,
  Chip,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Stack from '../ui/Stack'
import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { brandColors } from '../../theme/colorTokens'

export default function TopBar({ compact = false }) {
  const { openEnquiry } = useEnquiryModal()
  const theme = useTheme()
  const isDesktopHeader = useMediaQuery(theme.breakpoints.up('lg'))

  if (!isDesktopHeader) return null

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
            minHeight: 60,
            justifyContent: 'space-between',
            gap: 2,
            py: 0.75,
            flexWrap: 'wrap',
          }}
        >
          <Stack
            direction="row"
            spacing={1.25}
            alignItems="center"
            sx={{ minWidth: 0, flex: '1 1 36rem', flexWrap: 'wrap' }}
          >
            <Chip
              component="a"
              clickable
              href={`tel:${siteConfig.contact.phone}`}
              icon={<Phone size={14} />}
              label={siteConfig.contact.phone}
              variant="outlined"
              size="small"
              sx={{
                textDecoration: 'none',
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.background.paper, 0.36)
                    : alpha(brandColors.white, 0.72),
                fontWeight: 700,
                maxWidth: '100%',
                '& .MuiChip-label': {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
                '&:hover': {
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary.main, 0.12)
                      : alpha(theme.palette.primary.main, 0.06),
                },
              }}
            />

            <Chip
              component="a"
              clickable
              href={`mailto:${siteConfig.contact.email}`}
              icon={<Mail size={14} />}
              label={siteConfig.contact.email}
              variant="outlined"
              size="small"
              sx={{
                textDecoration: 'none',
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.background.paper, 0.36)
                    : alpha(brandColors.white, 0.72),
                fontWeight: 700,
                maxWidth: '100%',
                '& .MuiChip-label': {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: { lg: 160, xl: 'none' },
                },
                '&:hover': {
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary.main, 0.12)
                      : alpha(theme.palette.primary.main, 0.06),
                },
              }}
            />

            <Chip
              icon={<ShieldCheck size={14} />}
              label={schoolContent.contact.affiliation}
              variant="outlined"
              size="small"
              sx={{
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.36) : alpha(brandColors.white, 0.72),
                maxWidth: '100%',
                '& .MuiChip-label': {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: { lg: 180, xl: 'none' },
                },
              }}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ flex: '0 1 auto', flexWrap: 'wrap' }}
          >
            <Chip
              component="a"
              clickable
              href={schoolContent.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MapPinned size={14} />}
              label="Visit Campus"
              variant="outlined"
              size="small"
              sx={{
                textDecoration: 'none',
                fontWeight: 700,
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.background.paper, 0.36)
                    : alpha(brandColors.white, 0.72),
                '&:hover': {
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary.main, 0.12)
                      : alpha(theme.palette.primary.main, 0.06),
                },
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              onClick={() => openEnquiry('School Details Request')}
              sx={{ fontWeight: 800, whiteSpace: 'nowrap' }}
            >
              Request School Details
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
