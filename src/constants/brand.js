export const BRAND_COLORS = {
  primary: {
    main: '#111a24',
    light: '#2d5367',
    dark: '#0b1118',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#f0934b',
    light: '#ffb173',
    dark: '#d97a2e',
    contrastText: '#111a24',
  },
  background: {
    default: '#eef3f8',
    paper: '#ffffff',
  },
  text: {
    primary: '#111a24',
    secondary: '#587084',
  },
  success: {
    main: '#25d366',
  },
}

export const BRAND_NEUTRALS = {
  white: '#ffffff',
  whiteSoft: '#fff',
  ink: '#111a24',
  inkSoft: '#1e3848',
  inkMuted: '#426277',
  slate: '#587084',
  slateSoft: '#5d7484',
  slateLight: '#8ea4b2',
  paper: '#ffffff',
  page: '#eef3f8',
  sectionSoft: '#e8f1f6',
  sectionSky: '#d7eff6',
  sectionPale: '#dfeef7',
  sectionHover: '#eef3f8',
  accentStrong: '#d97a2e',
  accentButton: '#d27d05',
  accentButtonHover: '#a56f0d',
  accentButtonSoft: '#fff8ee',
  whatsapp: '#25D366',
  whatsappHover: '#1fb95a',
}

export const BRAND_ALPHA = {
  white02: 'rgba(255,255,255,0.02)',
  white05: 'rgba(255,255,255,0.05)',
  white06: 'rgba(255,255,255,0.06)',
  white07: 'rgba(255,255,255,0.07)',
  white08: 'rgba(255,255,255,0.08)',
  white09: 'rgba(255,255,255,0.09)',
  white1: 'rgba(255,255,255,0.1)',
  white12: 'rgba(255,255,255,0.12)',
  white14: 'rgba(255,255,255,0.14)',
  white16: 'rgba(255,255,255,0.16)',
  white18: 'rgba(255,255,255,0.18)',
  white22: 'rgba(255,255,255,0.22)',
  white24: 'rgba(255,255,255,0.24)',
  white26: 'rgba(255,255,255,0.26)',
  white28: 'rgba(255,255,255,0.28)',
  white3: 'rgba(255,255,255,0.3)',
  white32: 'rgba(255,255,255,0.32)',
  white34: 'rgba(255,255,255,0.34)',
  white35: 'rgba(255,255,255,0.35)',
  white48: 'rgba(255,255,255,0.48)',
  white54: 'rgba(255,255,255,0.54)',
  white55: 'rgba(255,255,255,0.55)',
  white58: 'rgba(255,255,255,0.58)',
  white65: 'rgba(255,255,255,0.65)',
  white67: 'rgba(255,255,255,0.67)',
  white68: 'rgba(255,255,255,0.68)',
  white72: 'rgba(255,255,255,0.72)',
  white78: 'rgba(255,255,255,0.78)',
  white8: 'rgba(255,255,255,0.8)',
  white84: 'rgba(255,255,255,0.84)',
  white86: 'rgba(255,255,255,0.86)',
  white9: 'rgba(255,255,255,0.9)',
  white92: 'rgba(255,255,255,0.92)',
  ink06: 'rgba(17,26,36,0.06)',
  ink08: 'rgba(17,26,36,0.08)',
  ink1: 'rgba(17,26,36,0.1)',
  ink12: 'rgba(17,26,36,0.12)',
  ink14: 'rgba(17,26,36,0.14)',
  ink18: 'rgba(17,26,36,0.18)',
  ink2: 'rgba(17,26,36,0.2)',
  ink22: 'rgba(17,26,36,0.22)',
  ink28: 'rgba(17,26,36,0.28)',
  ink34: 'rgba(17,26,36,0.34)',
  ink4: 'rgba(12,24,41,0.4)',
  ink42: 'rgba(17,26,36,0.42)',
  ink45: 'rgba(12,24,41,0.45)',
  ink52: 'rgba(0,0,0,0.52)',
  black18: 'rgba(0,0,0,0.18)',
  black2: 'rgba(0,0,0,0.2)',
  accent12: 'rgba(240,147,75,0.12)',
  accent14: 'rgba(240,147,75,0.14)',
  accent16: 'rgba(240,147,75,0.16)',
  accent18: 'rgba(240,147,75,0.18)',
  accent22: 'rgba(240,147,75,0.22)',
  accent4: 'rgba(240,147,75,0.4)',
  accent42: 'rgba(240,147,75,0.42)',
  accent48: 'rgba(240,147,75,0.48)',
  accent75: 'rgba(240,147,75,0.75)',
  sky8: 'rgba(88,112,132,0.8)',
  sky68: 'rgba(215,239,246,0.68)',
  sky7: 'rgba(215,239,246,0.7)',
  sky74: 'rgba(215,239,246,0.74)',
  sky75: 'rgba(215,239,246,0.75)',
  sky78: 'rgba(215,239,246,0.78)',
  sky85: 'rgba(215,239,246,0.85)',
  sky92: 'rgba(215,239,246,0.92)',
  sky9: 'rgba(215,239,246,0.9)',
}

export const BRAND_SHADOWS = {
  sm: '0 10px 24px rgba(17,26,36,0.12)',
  darkSm: '0 10px 24px rgba(0,0,0,0.2)',
  md: '0 16px 34px rgba(12, 24, 41, 0.22)',
  lg: '0 24px 60px -32px rgba(12, 24, 41, 0.4)',
  xl: '0 28px 70px -34px rgba(12,24,41,0.45)',
  float: '0 28px 64px -36px rgba(17, 26, 36, 0.34)',
}

export const SOCIAL_COLORS = {
  facebook: '#1877F2',
  instagram: '#E1306C',
  x: '#111a24',
  youtube: '#FF0000',
  linkedIn: '#0A66C2',
}

export const SECTION_BACKGROUNDS = {
  base: `var(--page-base-bg, ${BRAND_NEUTRALS.page})`,
  soft: '#d9f0fc',
  sky: '#cfebfc',
  pale: '#c1e5ff',
  dark: 'primary.main',
}

export const PAGE_BACKGROUND_SEQUENCE = ['#b7e4ff', '#ceebfc']

export const FOOTER_BACKGROUNDS = {
  shell:
    'linear-gradient(180deg, #8ed0f8 0%, #547b96 42%, #3f627b 100%)',
  card:
    'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
  hero:
    'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.1))',
}

export const BRAND_GRADIENTS = {
  page:
    'radial-gradient(circle at top left, rgba(93, 138, 168, 0.18), transparent 30%), radial-gradient(circle at top right, rgba(255, 103, 31, 0.08), transparent 24%), linear-gradient(180deg, #f7fafc 0%, #edf3f8 100%)',
  hero:
    'radial-gradient(circle at top right, rgba(255,147,75,0.25), transparent 28%), radial-gradient(circle at left, rgba(93,138,168,0.28), transparent 24%), #111a24',
  darkPanel: 'linear-gradient(135deg, rgba(17,26,36,0.96), rgba(45,83,103,0.92))',
}

export const GLASS_SURFACE_SX = {
  backgroundColor: BRAND_ALPHA.white58,
  border: `1px solid ${BRAND_ALPHA.white48}`,
  backdropFilter: 'blur(18px)',
}

export const UPPERCASE_LABEL_SX = {
  fontWeight: 800,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
}
