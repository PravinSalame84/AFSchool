import {
  useEffect,
  useMemo,
  useState } from 'react'
import Stack from '../ui/Stack'
import { Link,
  NavLink,
  useLocation } from 'react-router-dom'
import {
  alpha,
  AppBar,
  Box,
  Button,
  Chip,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LaunchIcon from '@mui/icons-material/Launch'
import navigation from '../../data/navigation'
import siteConfig from '../../data/siteConfig'
import Logo from './Logo'
import ThemeToggle from '../ui/ThemeToggle'
import SiteSearch from './SiteSearch'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import { brandColors } from '../../theme/colorTokens'
import { getVisitorMetrics, initializeVisitorSession, METRICS_EVENT } from '../../utils/visitorFeedback'

const desktopButtonSx = (theme, isActive, hasChildren = false) => ({
  px: 1.6,
  py: 1.1,
  minWidth: 0,
  color: isActive
    ? (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark)
    : theme.palette.text.primary,
  fontWeight: 800,
  fontSize: '0.92rem',
  letterSpacing: '0.02em',
  textTransform: 'none',
  borderRadius: 4,
  backgroundColor: isActive
    ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.2 : 0.14)
    : 'transparent',
  border: `1px solid ${isActive ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.34 : 0.24) : 'transparent'}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.16 : 0.1),
    borderColor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.28 : 0.18),
  },
  ...(hasChildren && {
    pr: 1.2,
  }),
})

function DesktopItem({ item }) {
  const theme = useTheme()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to)

  if (item.external) {
    return (
      <Button href={item.to} target="_blank" endIcon={<LaunchIcon fontSize="small" />} sx={desktopButtonSx(theme, false)}>
        {item.label}
      </Button>
    )
  }

  if (!item.children) {
    return (
      <Button component={NavLink} to={item.to} sx={desktopButtonSx(theme, isActive)}>
        {item.label}
      </Button>
    )
  }

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{ position: 'relative' }}
    >
      <Button endIcon={<ExpandMoreIcon fontSize="small" />} sx={desktopButtonSx(theme, isActive, true)}>
        {item.label}
      </Button>

      <Collapse in={open} timeout={160} sx={{ position: 'absolute', top: '100%', left: 0, pt: 1.25, zIndex: 1300 }}>
        <Paper
          elevation={0}
          sx={{
            minWidth: 320,
            maxWidth: 360,
            p: 1.25,
            borderRadius: 4,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.96) : alpha(brandColors.white, 0.98),
            boxShadow: '0 24px 56px -30px rgba(17, 26, 36, 0.28)',
            backdropFilter: 'blur(18px)',
          }}
        >
          {/* <Typography sx={{ px: 1.25, pt: 0.5, pb: 1, fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'text.secondary' }}>
            {item.label}
          </Typography> */}
          <Box sx={{ display: 'grid', gap: 0.5 }}>
            {item.children.map((child) => {
              const childActive = location.pathname === child.to

              return (
                <Box
                  key={child.label}
                  component={child.external ? 'a' : Link}
                  to={!child.external ? child.to : undefined}
                  href={child.external ? child.to : undefined}
                  target={child.external ? '_blank' : undefined}
                  rel={child.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    borderRadius: 4,
                    px: 1.25,
                    py: 2,
                    color: childActive
                      ? (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark)
                      : 'text.primary',
                    textDecoration: 'none',
                    bgcolor: childActive
                      ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.16 : 0.12)
                      : 'transparent',
                    '&:hover': { bgcolor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.12 : 0.08) },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: childActive ? 800 : 700, fontSize: '0.94rem' }}>
                      {child.label}
                    </Typography>
                    {/* <Typography sx={{ mt: 0.25, fontSize: '0.76rem', color: 'text.secondary' }}> */}
                      {/* {item.label} */}
                    {/* </Typography> */}
                  </Box>
                  {child.external ? <LaunchIcon fontSize="small" /> : <ExpandMoreIcon sx={{ transform: 'rotate(-90deg)', fontSize: 18, color: childActive ? 'secondary.main' : 'text.secondary' }} />}
                </Box>
              )
            })}
          </Box>
        </Paper>
      </Collapse>
    </Box>
  )
}

function MobileItem({ item, onClose }) {
  const theme = useTheme()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to)

  if (!item.children) {
    return (
      <ListItemButton
        component={Link}
        to={item.to}
        onClick={onClose}
        sx={{
          borderRadius: 4,
          mb: 0.5,
          color: isActive
            ? (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark)
            : 'text.primary',
          bgcolor: isActive
            ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.2 : 0.12)
            : 'transparent',
          border: `1px solid ${isActive ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.34 : 0.18) : 'transparent'}`,
        }}
      >
        <ListItemText primaryTypographyProps={{ fontWeight: 700 }} primary={item.label} />
      </ListItemButton>
    )
  }

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((value) => !value)}
        sx={{
          borderRadius: 4,
          mb: 0.5,
          color: isActive
            ? (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark)
            : 'text.primary',
          bgcolor: open || isActive
            ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.16 : 0.08)
            : 'transparent',
          border: `1px solid ${isActive ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.3 : 0.16) : 'transparent'}`,
        }}
      >
        <ListItemText primaryTypographyProps={{ fontWeight: 700 }} primary={item.label} />
        <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
      </ListItemButton>

      <Collapse in={open}>
        <List disablePadding sx={{ pl: 1.5, pb: 0.5 }}>
          {item.children.map((child) => {
            const childActive = location.pathname === child.to

            return (
              <ListItemButton
                key={child.label}
                component={child.external ? 'a' : Link}
                to={!child.external ? child.to : undefined}
                href={child.external ? child.to : undefined}
                target={child.external ? '_blank' : undefined}
                rel={child.external ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                sx={{
                  borderRadius: '0.9rem',
                  mb: 0.5,
                  color: childActive
                    ? (theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark)
                    : 'text.primary',
                  bgcolor: childActive
                    ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.18 : 0.1)
                    : 'transparent',
                }}
              >
                <ListItemText
                  primary={child.label}
                  primaryTypographyProps={{ fontSize: '0.92rem', fontWeight: childActive ? 700 : 600 }}
                />
                {child.external ? <LaunchIcon fontSize="small" /> : null}
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}

export default function Navbar({ compact = false }) {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visitorMetrics, setVisitorMetrics] = useState({ visitorCount: 0, ratingCount: 0, averageRating: 0, reviews: [] })
  const { openEnquiry } = useEnquiryModal()
  const location = useLocation()

  useEffect(() => setMobileOpen(false), [location.pathname])

  useEffect(() => {
    setVisitorMetrics(initializeVisitorSession())

    const syncMetrics = () => setVisitorMetrics(getVisitorMetrics())
    window.addEventListener(METRICS_EVENT, syncMetrics)
    window.addEventListener('storage', syncMetrics)

    return () => {
      window.removeEventListener(METRICS_EVENT, syncMetrics)
      window.removeEventListener('storage', syncMetrics)
    }
  }, [])

  const headerNote = useMemo(
    () => `${siteConfig.brandName} • ${siteConfig.brandSuffix}`,
    [],
  )

  const visitorCountLabel = `${visitorMetrics.visitorCount.toLocaleString('en-IN')} visitors`
  const ratingLabel =
    visitorMetrics.ratingCount > 0
      ? `${visitorMetrics.averageRating.toFixed(1)}/5 from ${visitorMetrics.ratingCount} ratings`
      : '0 ratings • Submit review'

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="inherit"
        sx={{
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
          bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.9) : alpha(brandColors.white, 0.9),
          backdropFilter: 'blur(18px)',
          overflow: 'visible',
          boxShadow: compact ? '0 14px 36px rgba(17, 26, 36, 0.12)' : 'none',
          transition: 'box-shadow 260ms ease, background-color 260ms ease',
        }}
      >
        <Toolbar className="navbar-toolbar" sx={{ minHeight: { xs: 78, lg: 86 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: 0, flex: { xs: 1, xl: '0 0 auto' } }}>
            <Logo />
            {/* <Box sx={{ display: { xs: 'none', md: 'block', xl: 'none' }, minWidth: 0, maxWidth: 230 }}>
              <Typography noWrap sx={{ fontSize: '0.78rem', fontWeight: 700, color: 'text.secondary' }}>
                {headerNote}
              </Typography>
            </Box> */}
          </Stack>

          <Box sx={{ display: { xs: 'none', xl: 'flex' }, gap: 0.5, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {navigation.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </Box>

          <Stack direction="row" spacing={1.2} alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Chip
              label={visitorCountLabel}
              size="small"
              variant="outlined"
              sx={{
                fontWeight: 700,
                borderColor: alpha(theme.palette.primary.main, 0.12),
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.38) : alpha(brandColors.white, 0.74),
              }}
            />
            <Chip
              label={ratingLabel}
              size="small"
              color="secondary"
              variant={visitorMetrics.ratingCount > 0 ? 'filled' : 'outlined'}
              sx={{ fontWeight: 700 }}
            />
            <SiteSearch />
            <ThemeToggle />
            <Button variant="contained" onClick={() => openEnquiry('General Enquiry')}>
              {siteConfig.cta.enquire}
            </Button>
          </Stack>

          <IconButton
            sx={{
              display: { xl: 'none' },
              width: 44,
              height: 44,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.72) : alpha(brandColors.white, 0.9),
            }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box
          sx={{
            width: { xs: 'min(100vw, 320px)', sm: 360 },
            maxWidth: '100vw',
            minHeight: '100%',
            p: { xs: 1.5, sm: 2.25 },
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Logo />
            <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>

          <Typography sx={{ mt: 1, mb: 2, fontSize: '0.8rem', color: 'text.secondary' }}>
            {headerNote}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2, minWidth: 0 }}>
            <SiteSearch compact />
            <ThemeToggle />
          </Stack>

          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
            <Chip label={visitorCountLabel} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
            <Chip
              label={ratingLabel}
              size="small"
              color="secondary"
              variant={visitorMetrics.ratingCount > 0 ? 'filled' : 'outlined'}
              sx={{ fontWeight: 700 }}
            />
          </Stack>

          <Divider sx={{ mb: 1.5 }} />

          <List sx={{ py: 0 }}>
            {navigation.map((item) => (
              <MobileItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              setMobileOpen(false)
              openEnquiry('General Enquiry')
            }}
          >
            {siteConfig.cta.enquire}
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
