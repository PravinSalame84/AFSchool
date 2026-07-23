import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import navigation from '../../data/navigation'
import siteConfig from '../../data/siteConfig'
import schoolContent from '../../data/schoolContent'
import { getContactEmailDisplay, getContactMailto } from '../../utils/contact'
import { useEnquiryModal } from '../../context/EnquiryModalContext'
import {
  BACKDROP_DARK_SX,
  DARK_FILLED_BUTTON_SX,
  MOBILE_DRAWER_PAPER_SX,
  NAV_ACTIVE_PILL_SX,
  NAV_MENU_PAPER_SX,
  NAV_PILL_BUTTON_SX,
  NAV_TOOLBAR_SX,
} from '../../constants/uiStyles'
import { BRAND_ALPHA, BRAND_NEUTRALS, BRAND_SHADOWS } from '../../constants/brand'

const navButtonSx = NAV_PILL_BUTTON_SX
const activeNavButtonSx = NAV_ACTIVE_PILL_SX

function DesktopNavItem({ item, pathname, onMenuOpen, onMenuClose, menuAnchor }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0
  const isMenuOpen = menuAnchor?.label === item.label
  const isChildActive =
    hasChildren &&
    item.children.some((child) => !child.external && (pathname === child.to || pathname.startsWith(`${child.to}/`)))

  if (item.external && !hasChildren) {
    return (
      <Button
        component="a"
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<LaunchRoundedIcon sx={{ fontSize: 16 }} />}
        sx={navButtonSx}
      >
        {item.label}
      </Button>
    )
  }

  if (!hasChildren) {
    return (
      <Button
        component={NavLink}
        to={item.to}
        sx={{
          ...navButtonSx,
          '&.active': activeNavButtonSx,
        }}
      >
        {item.label}
      </Button>
    )
  }

  return (
    <>
      <Button
        onClick={(event) => onMenuOpen(event, item)}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        aria-haspopup="menu"
        endIcon={
          <ExpandMoreRoundedIcon
            sx={{
              fontSize: 18,
              transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        }
        sx={{
          ...navButtonSx,
          ...(isMenuOpen || isChildActive ? activeNavButtonSx : null),
        }}
      >
        {item.label}
      </Button>
      <Menu
        anchorEl={isMenuOpen ? menuAnchor.element : null}
        open={isMenuOpen}
        onClose={onMenuClose}
        MenuListProps={{ 'aria-label': `${item.label} menu` }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1.5,
              minWidth: 280,
              p: 1,
              ...NAV_MENU_PAPER_SX,
            },
          },
        }}
      >
        {item.children.map((child) => {
          const childSelected = !child.external && (pathname === child.to || pathname.startsWith(`${child.to}/`))

          return (
            <MenuItem
              key={child.label}
              component={child.external ? 'a' : Link}
              href={child.external ? child.to : undefined}
              to={child.external ? undefined : child.to}
              target={child.external ? '_blank' : undefined}
              rel={child.external ? 'noopener noreferrer' : undefined}
              onClick={onMenuClose}
              selected={childSelected}
              sx={{
                borderRadius: '1rem',
                px: 2,
                py: 1.5,
                color: BRAND_NEUTRALS.slateSoft,
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                '&.Mui-selected': {
                  bgcolor: BRAND_ALPHA.ink08,
                  color: BRAND_NEUTRALS.ink,
                },
                '&.Mui-selected:hover': {
                  bgcolor: BRAND_ALPHA.ink12,
                },
              }}
            >
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
                {child.label}
                {child.external ? <LaunchRoundedIcon sx={{ fontSize: 16 }} /> : null}
              </Box>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

function MobileNavItem({ item, pathname, onNavigate }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0
  const isChildActive =
    hasChildren &&
    item.children.some((child) => !child.external && (pathname === child.to || pathname.startsWith(`${child.to}/`)))

  if (item.external && !hasChildren) {
    return (
      <ListItemButton
        component="a"
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        sx={{
          px: 1.1,
          py: 1.7,
          mb: 0.65,
          borderRadius: '1rem',
          border: `1px solid ${BRAND_ALPHA.white24}`,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
          backdropFilter: 'blur(22px)',
        }}
      >
        <ListItemText
          primary={item.label}
          slotProps={{
            primary: { fontSize: '0.9375rem', fontWeight: 700, color: BRAND_NEUTRALS.inkSoft },
          }}
        />
        <ListItemIcon sx={{ minWidth: 'auto', color: BRAND_NEUTRALS.slateLight }}>
          <LaunchRoundedIcon fontSize="small" />
        </ListItemIcon>
      </ListItemButton>
    )
  }

  if (!hasChildren) {
    return (
      <ListItemButton
        component={Link}
        to={item.to}
        onClick={onNavigate}
        selected={pathname === item.to || pathname.startsWith(`${item.to}/`)}
        sx={{
          px: 1.1,
          py: 1.7,
          mb: 0.65,
          borderRadius: '1rem',
          border: `1px solid ${BRAND_ALPHA.white24}`,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
          backdropFilter: 'blur(22px)',
          '&.Mui-selected': {
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
            borderColor: BRAND_ALPHA.accent22,
          },
        }}
      >
        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: pathname === item.to || pathname.startsWith(`${item.to}/`) ? BRAND_NEUTRALS.ink : BRAND_NEUTRALS.inkSoft,
            },
          }}
        />
      </ListItemButton>
    )
  }

  return (
    <Accordion
      disableGutters
      elevation={0}
      defaultExpanded={Boolean(isChildActive)}
      sx={{
        bgcolor: 'transparent',
        mb: 0.65,
        borderRadius: '1rem',
        border: `1px solid ${BRAND_ALPHA.white24}`,
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
        backdropFilter: 'blur(22px)',
        overflow: 'hidden',
        '&::before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        sx={{
          px: 1.1,
          py: 0.5,
          minHeight: 58,
          borderBottom: `1px solid ${BRAND_ALPHA.white16}`,
          '& .MuiAccordionSummary-content': {
            my: 1,
          },
        }}
      >
        <Box sx={{ fontSize: '0.9375rem', fontWeight: 700, color: isChildActive ? BRAND_NEUTRALS.ink : BRAND_NEUTRALS.inkSoft }}>{item.label}</Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0.5, pb: 1.5 }}>
        <List disablePadding>
          {item.children.map((child) => {
            const childSelected = !child.external && (pathname === child.to || pathname.startsWith(`${child.to}/`))

            return (
              <ListItemButton
                key={child.label}
                component={child.external ? 'a' : Link}
                href={child.external ? child.to : undefined}
                to={child.external ? undefined : child.to}
                target={child.external ? '_blank' : undefined}
                rel={child.external ? 'noopener noreferrer' : undefined}
                onClick={onNavigate}
                selected={childSelected}
                sx={{
                  mx: 1,
                  mb: 0.5,
                  borderRadius: 1,
                  px: 2,
                  py: 1.1,
                  '&.Mui-selected': {
                    bgcolor: BRAND_ALPHA.ink08,
                  },
                  '&.Mui-selected:hover': {
                    bgcolor: BRAND_ALPHA.ink12,
                  },
                }}
              >
                <ListItemText
                  primary={child.label}
                  slotProps={{
                    primary: {
                      fontSize: '0.875rem',
                      color: childSelected ? BRAND_NEUTRALS.ink : BRAND_NEUTRALS.inkMuted,
                    },
                  }}
                />
                {child.external ? (
                  <ListItemIcon sx={{ minWidth: 'auto', color: BRAND_NEUTRALS.slateLight }}>
                    <LaunchRoundedIcon sx={{ fontSize: 16 }} />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
            )
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

const mobileTopBarLinks = [
  {
    label: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    icon: LocalPhoneRoundedIcon,
  },
  {
    label: getContactEmailDisplay(),
    href: getContactMailto(),
    icon: EmailRoundedIcon,
  },
  {
    label: 'Visit Campus',
    href: schoolContent.contact.mapLink,
    icon: PlaceRoundedIcon,
    external: true,
  },
  {
    label: siteConfig.cta.brochure,
    to: '/brochure',
    icon: DescriptionRoundedIcon,
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const location = useLocation()
  const { openEnquiry } = useEnquiryModal()

  useEffect(() => {
    setMobileOpen(false)
    setMenuAnchor(null)
  }, [location.pathname])

  const handleMenuOpen = (event, item) => {
    setMenuAnchor({ element: event.currentTarget, label: item.label })
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  return (
    <AppBar
      component="nav"
      position="static"
      elevation={0}
      color="transparent"
      sx={{ px: { xs: 1.25, sm: 3, lg: 4 }, pt: { xs: 1.25, sm: 2 }, pb: { xs: 1.25, sm: 2 } }}
    >
      <Toolbar
        disableGutters
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1480,
          minHeight: { xs: 68, sm: 84 },
          justifyContent: 'space-between',
          gap: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2, lg: 3 },
          py: { xs: 1, sm: 1.5 },
          ...NAV_TOOLBAR_SX,
        }}
      >
        <Logo />

        <Box sx={{ display: { xs: 'none', xl: 'flex' }, alignItems: 'center', gap: 0.75 }}>
          {navigation.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={location.pathname}
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              menuAnchor={menuAnchor}
            />
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1.5 }}>
          <Button
            variant="contained"
            onClick={() => openEnquiry('General Enquiry')}
            sx={{
              minWidth: 'auto',
              borderRadius: '999px',
              px: 2.6,
              py: 1.2,
              bgcolor: 'secondary.main',
              color: BRAND_NEUTRALS.white,
              '&:hover': {
                bgcolor: 'secondary.light',
              },
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 12px 24px -16px rgba(17, 26, 36, 0.8)',
            }}
          >
            {siteConfig.cta.enquire}
          </Button>
        </Box>

        <IconButton
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
          sx={{
            display: { xs: 'inline-flex', xl: 'none' },
            width: { xs: 46, sm: 52 },
            height: { xs: 46, sm: 52 },
            ...DARK_FILLED_BUTTON_SX,
          }}
        >
          {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          backdrop: {
            sx: {
              ...BACKDROP_DARK_SX,
            },
          },
          paper: {
            sx: {
              width: 'min(92vw, 380px)',
              p: { xs: 2.25, sm: 3 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              background:
                'linear-gradient(180deg, rgba(236,243,248,0.42) 0%, rgba(219,232,241,0.28) 100%)',
              backdropFilter: 'blur(34px) saturate(140%)',
              ...MOBILE_DRAWER_PAPER_SX,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', minHeight: 0, flex: 1, flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mx: 1, my: 2, flexShrink: 0 }}>
            <Logo />
            <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)} sx={{ color: BRAND_NEUTRALS.slateSoft }}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 1.25, flexShrink: 0, borderColor: BRAND_ALPHA.white24 }} />

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              pr: 0.4,
              mr: -0.4,
            }}
          >
            <List
              disablePadding
              sx={{
                ml: 1,
                mb: 2,
              }}
            >
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  pathname={location.pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </List>
          </Box>

          <Box sx={{ flexShrink: 0, pt: 1.2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                setMobileOpen(false)
                openEnquiry('General Enquiry')
              }}
              sx={{
                borderRadius: '999px',
                py: 1.45,
                bgcolor: 'secondary.main',
                color: BRAND_NEUTRALS.white,
                '&:hover': {
                  bgcolor: 'secondary.light',
                },
                fontWeight: 700,
                textTransform: 'none',
              }}
            >
              {siteConfig.cta.enquire}
            </Button>

            <Box
              sx={{
                mt: 1.4,
                borderRadius: '1.5rem',
                border: `1px solid ${BRAND_ALPHA.white32}`,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.14))',
                backdropFilter: 'blur(24px)',
                boxShadow: BRAND_SHADOWS.md,
                overflow: 'hidden',
              }}
            >
              <Accordion
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: 'transparent',
                  '&::before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreRoundedIcon sx={{ color: BRAND_NEUTRALS.slateSoft }} />}
                  sx={{
                    px: 1.4,
                    py: 0.2,
                    minHeight: 68,
                    '& .MuiAccordionSummary-content': {
                      my: 1.1,
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: BRAND_NEUTRALS.slateSoft }}>
                      Quick Access
                    </Box>
                    <Box sx={{ mt: 0.4, fontSize: '0.88rem', fontWeight: 700, color: BRAND_NEUTRALS.inkSoft }}>
                      Top bar details for mobile
                    </Box>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 0.75, pb: 0.75, pt: 0 }}>
                  <List disablePadding>
                    {mobileTopBarLinks.map((item) => {
                      const Icon = item.icon

                      return (
                        <ListItemButton
                          key={item.label}
                          component={item.to ? Link : 'a'}
                          to={item.to}
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          onClick={() => setMobileOpen(false)}
                      sx={{
                        borderRadius: '1rem',
                        px: 1.2,
                        py: 1.1,
                        gap: 1.2,
                        background:
                          'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                        backdropFilter: 'blur(18px)',
                        '&:hover': {
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
                        },
                      }}
                        >
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: BRAND_ALPHA.white22,
                              color: 'secondary.dark',
                              flexShrink: 0,
                            }}
                          >
                            <Icon sx={{ fontSize: 18 }} />
                          </Box>
                          <ListItemText
                            primary={item.label}
                            secondary={item.to ? 'Open brochure' : item.external ? 'Open map' : 'Tap to connect'}
                            slotProps={{
                              primary: {
                                fontSize: '0.88rem',
                                fontWeight: 700,
                                color: BRAND_NEUTRALS.ink,
                              },
                              secondary: {
                                fontSize: '0.74rem',
                                color: BRAND_NEUTRALS.slateSoft,
                              },
                            }}
                          />
                          {item.external ? (
                            <LaunchRoundedIcon sx={{ fontSize: 16, color: BRAND_NEUTRALS.slateLight }} />
                          ) : null}
                        </ListItemButton>
                      )
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  )
}
