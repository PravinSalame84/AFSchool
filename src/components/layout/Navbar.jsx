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
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import navigation from '../../data/navigation'
import siteConfig from '../../data/siteConfig'
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
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            minWidth: 280,
            p: 1,
            ...NAV_MENU_PAPER_SX,
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
          py: 1.7,
          borderBottom: `1px solid ${BRAND_ALPHA.ink08}`,
        }}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontSize: '0.9375rem', fontWeight: 700, color: BRAND_NEUTRALS.inkSoft }}
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
          px: 0.5,
          py: 1.7,
          borderBottom: `1px solid ${BRAND_ALPHA.ink08}`,
          borderRadius: 0,
          '&.Mui-selected': {
            bgcolor: 'transparent',
          },
        }}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            color: pathname === item.to || pathname.startsWith(`${item.to}/`) ? BRAND_NEUTRALS.ink : BRAND_NEUTRALS.inkSoft,
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
        '&::before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        sx={{
          px: 0.5,
          py: 0.5,
          minHeight: 58,
          borderBottom: `1px solid ${BRAND_ALPHA.ink08}`,
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
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: childSelected ? BRAND_NEUTRALS.ink : BRAND_NEUTRALS.inkMuted,
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
          BackdropProps: {
            sx: {
              ...BACKDROP_DARK_SX,
            },
          },
        }}
        PaperProps={{
          sx: {
            width: 'min(92vw, 380px)',
            p: { xs: 2.25, sm: 3 },
            ...MOBILE_DRAWER_PAPER_SX,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mx: 1, my: 2 }}>
          <Logo />
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)} sx={{ color: BRAND_NEUTRALS.slateSoft }}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 1 }} />

        <List disablePadding sx={{ ml: 1, mb: 2 }}>
          {navigation.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              pathname={location.pathname}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </List>

        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setMobileOpen(false)
            openEnquiry('General Enquiry')
          }}
          sx={{
            mt: 'auto',
            borderRadius: '999px',
            py: 1.45,
            ...DARK_FILLED_BUTTON_SX,
            fontWeight: 700,
            textTransform: 'none',
          }}
        >
          {siteConfig.cta.enquire}
        </Button>
      </Drawer>
    </AppBar>
  )
}
