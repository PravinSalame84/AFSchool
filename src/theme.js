import { createTheme } from '@mui/material/styles'
import { BRAND_ALPHA, BRAND_COLORS, BRAND_GRADIENTS, BRAND_NEUTRALS, BRAND_SHADOWS } from './constants/brand'

const palette = {
  ...BRAND_COLORS,
  background: {
    default: BRAND_NEUTRALS.page,
    paper: BRAND_NEUTRALS.paper,
  },
}

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 18,
  },
  shadows: [
    'none',
    `0 8px 24px ${BRAND_ALPHA.ink06}`,
    `0 10px 28px ${BRAND_ALPHA.ink08}`,
    `0 14px 34px ${BRAND_ALPHA.ink1}`,
    `0 18px 40px ${BRAND_ALPHA.ink12}`,
    `0 22px 46px ${BRAND_ALPHA.ink14}`,
    ...Array(19).fill(BRAND_SHADOWS.lg),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--header-height': '88px',
        },
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '96px',
        },
        body: {
          background: BRAND_GRADIENTS.page,
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 11,
          fontWeight: 800,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 28,
        },
      },
    },
  },
})

export default theme
