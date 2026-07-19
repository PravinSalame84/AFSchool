import { BRAND_ALPHA, BRAND_GRADIENTS, BRAND_NEUTRALS, BRAND_SHADOWS } from './brand'

export const DARK_FILLED_BUTTON_SX = {
  bgcolor: 'primary.main',
  color: BRAND_NEUTRALS.white,
  '&:hover': {
    bgcolor: 'primary.light',
  },
}

export const GLASS_PANEL_SOFT_SX = {
  backgroundColor: BRAND_ALPHA.white08,
  border: `1px solid ${BRAND_ALPHA.white16}`,
  backdropFilter: 'blur(18px)',
}

export const GLASS_PANEL_STRONG_SX = {
  backgroundColor: BRAND_ALPHA.white58,
  border: `1px solid ${BRAND_ALPHA.white48}`,
  backdropFilter: 'blur(18px)',
}

export const ICON_CIRCLE_SKY_SX = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  bgcolor: BRAND_NEUTRALS.sectionSky,
  color: 'primary.light',
}

export const HERO_BADGE_CHIP_SX = {
  borderRadius: '999px',
  backgroundColor: BRAND_ALPHA.white1,
  border: `1px solid ${BRAND_ALPHA.white18}`,
  color: BRAND_NEUTRALS.white,
  backdropFilter: 'blur(18px)',
}

export const HERO_PRIMARY_BUTTON_SX = {
  bgcolor: BRAND_NEUTRALS.white,
  color: BRAND_NEUTRALS.accentButton,
  borderRadius: '0.95rem',
  boxShadow: BRAND_SHADOWS.md,
  border: `1px solid ${BRAND_ALPHA.white28}`,
  '&:hover': {
    bgcolor: BRAND_NEUTRALS.accentButtonSoft,
    color: BRAND_NEUTRALS.accentButtonHover,
  },
}

export const HERO_SECONDARY_BUTTON_SX = {
  borderRadius: '0.95rem',
  borderColor: BRAND_ALPHA.white32,
  color: BRAND_NEUTRALS.white,
  backgroundColor: BRAND_ALPHA.white06,
  backdropFilter: 'blur(16px)',
  '&:hover': {
    borderColor: BRAND_ALPHA.white54,
    backgroundColor: BRAND_ALPHA.white12,
  },
}

export const HERO_STAT_PANEL_SX = {
  border: `1px solid ${BRAND_ALPHA.white16}`,
  backgroundColor: BRAND_ALPHA.white1,
  backdropFilter: 'blur(18px)',
}

export const NAV_PILL_BUTTON_SX = {
  minWidth: 'auto',
  borderRadius: '999px',
  px: 2.2,
  py: 1.25,
  color: 'primary.light',
  fontSize: '0.875rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  backgroundColor: BRAND_ALPHA.white18,
  border: `1px solid ${BRAND_ALPHA.white18}`,
  backdropFilter: 'blur(18px)',
  '&:hover': {
    bgcolor: BRAND_ALPHA.white3,
    color: BRAND_NEUTRALS.ink,
  },
}

export const NAV_ACTIVE_PILL_SX = {
  bgcolor: 'primary.main',
  color: BRAND_NEUTRALS.white,
  '&:hover': {
    bgcolor: 'primary.light',
  },
}

export const NAV_TOOLBAR_SX = {
  borderRadius: '999px',
  bgcolor: 'rgba(231,241,248,0.4)',
  border: `1px solid ${BRAND_ALPHA.white24}`,
  backdropFilter: 'blur(24px)',
  boxShadow: '0 18px 40px -28px rgba(22, 30, 37, 0.55)',
}

export const NAV_MENU_PAPER_SX = {
  borderRadius: '1.7rem',
  border: `1px solid ${BRAND_ALPHA.white24}`,
  bgcolor: 'rgba(231,241,248,0.72)',
  boxShadow: BRAND_SHADOWS.lg,
  backdropFilter: 'blur(24px)',
}

export const MOBILE_DRAWER_PAPER_SX = {
  bgcolor: 'rgba(235,243,249,0.78)',
  borderLeft: `1px solid ${BRAND_ALPHA.white26}`,
  backdropFilter: 'blur(24px)',
  boxShadow: BRAND_SHADOWS.xl,
}

export const BACKDROP_DARK_SX = {
  bgcolor: 'rgba(17,26,36,0.5)',
}

export const PAGE_HERO_BREADCRUMB_SX = {
  separator: { fontSize: 16, color: BRAND_ALPHA.sky7 },
  link: { color: BRAND_ALPHA.sky68, fontSize: '0.75rem' },
  current: { color: BRAND_ALPHA.sky92, fontSize: '0.75rem' },
}

export const PAGE_HERO_IMAGE_GLOW_SX = {
  borderRadius: '2rem',
  backgroundColor: BRAND_ALPHA.white12,
  filter: 'blur(36px)',
}

export const MODAL_BACKDROP_SX = {
  backgroundColor: BRAND_ALPHA.ink42,
  backdropFilter: 'blur(8px)',
}

export const MODAL_PAPER_SX = {
  border: `1px solid ${BRAND_ALPHA.white34}`,
  background:
    'linear-gradient(180deg, rgba(246,250,253,0.88) 0%, rgba(226,238,246,0.82) 100%)',
  boxShadow: '0 28px 70px -32px rgba(12, 24, 41, 0.38)',
  backdropFilter: 'blur(24px)',
}

export const MODAL_CLOSE_BUTTON_SX = {
  border: `1px solid ${BRAND_ALPHA.ink1}`,
  backgroundColor: BRAND_ALPHA.white26,
  backdropFilter: 'blur(16px)',
}

export const FOOTER_SECTION_CARD_SX = {
  minWidth: 0,
  height: '100%',
  p: { xs: 2.2, sm: 2.5 },
  borderRadius: '1.4rem',
  border: `1px solid ${BRAND_ALPHA.white12}`,
  background: `linear-gradient(180deg, ${BRAND_ALPHA.white1} 0%, ${BRAND_ALPHA.white05} 100%)`,
  backdropFilter: 'blur(18px)',
  boxShadow: `0 26px 56px -42px ${BRAND_ALPHA.ink52}`,
}

export const FOOTER_SOCIAL_BUTTON_SX = {
  width: 40,
  height: 40,
  border: `1px solid ${BRAND_ALPHA.white14}`,
  backdropFilter: 'blur(18px)',
  color: BRAND_NEUTRALS.whiteSoft,
  boxShadow: '0 14px 28px -16px rgba(0,0,0,0.2)',
  '&:hover': {
    borderColor: BRAND_ALPHA.white34,
    transform: 'translateY(-2px)',
    color: BRAND_NEUTRALS.whiteSoft,
  },
}

export const FOOTER_CONNECT_LINK_SX = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0.85,
  minHeight: 38,
  px: 1.35,
  py: 0.9,
  borderRadius: '999px',
  border: `1px solid ${BRAND_ALPHA.white16}`,
  backgroundColor: BRAND_ALPHA.white08,
  backdropFilter: 'blur(18px)',
  color: BRAND_ALPHA.white9,
  fontSize: '0.82rem',
  fontWeight: 700,
  transition: 'transform .22s ease, border-color .22s ease, background-color .22s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: BRAND_ALPHA.accent42,
    backgroundColor: BRAND_ALPHA.accent14,
  },
}

export const FOOTER_PANEL_GLOW_SX = {
  position: 'absolute',
  top: -80,
  right: 0,
  width: 256,
  height: 256,
  borderRadius: '50%',
  bgcolor: BRAND_ALPHA.accent22,
  filter: 'blur(48px)',
}

export const FOOTER_PANEL_GLOW_SECONDARY_SX = {
  position: 'absolute',
  bottom: -90,
  left: -20,
  width: 220,
  height: 220,
  borderRadius: '50%',
  bgcolor: 'rgba(120,176,214,0.18)',
  filter: 'blur(56px)',
}

export const HERO_SURFACE_GRADIENT = BRAND_GRADIENTS.hero
