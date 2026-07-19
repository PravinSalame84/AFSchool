import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
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
  },
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
    '0 8px 24px rgba(17, 26, 36, 0.06)',
    '0 10px 28px rgba(17, 26, 36, 0.08)',
    '0 14px 34px rgba(17, 26, 36, 0.1)',
    '0 18px 40px rgba(17, 26, 36, 0.12)',
    '0 22px 46px rgba(17, 26, 36, 0.14)',
    ...Array(19).fill('0 24px 60px -32px rgba(12, 24, 41, 0.4)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--header-height': '88px',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          background:
            'radial-gradient(circle at top left, rgba(93, 138, 168, 0.18), transparent 30%), radial-gradient(circle at top right, rgba(255, 103, 31, 0.08), transparent 24%), linear-gradient(180deg, #f7fafc 0%, #edf3f8 100%)',
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
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
      },
    },
  },
})

export default theme
