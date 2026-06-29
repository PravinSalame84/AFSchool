import { alpha, createTheme } from '@mui/material/styles'

export function createAppTheme(mode = 'light') {
  const isDark = mode === 'dark'
  const surfaceBorder = isDark ? alpha('#d7eff6', 0.1) : alpha('#1d213c', 0.08)
  const lightPageBase = '#bae2ee'
  const lightPageAlt = '#d7eff6'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#1d213c',
        light: '#344656',
        dark: '#111426',
      },
      secondary: {
        main: '#f0934b',
        light: '#fbc998',
        dark: '#d97a2e',
      },
      background: {
        default: isDark ? '#0b1320' : lightPageBase,
        paper: isDark ? '#111c2b' : '#fafdff',
      },
      text: {
        primary: isDark ? '#f7fbff' : '#161e25',
        secondary: isDark ? '#bed1e2' : '#526f86',
      },
      success: {
        main: '#046a38',
      },
      error: {
        main: '#dc2626',
      },
      warning: {
        main: '#ff671f',
      },
      info: {
        main: '#5d8aa8',
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: '"Manrope", "Segoe UI", sans-serif',
      h1: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      h2: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      h3: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      h4: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      h5: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      h6: {
        fontFamily: '"Rajdhani", "Segoe UI", sans-serif',
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            colorScheme: mode,
          },
          body: {
            backgroundColor: isDark ? '#0b1320' : lightPageBase,
            color: isDark ? '#f7fbff' : '#161e25',
            backgroundImage: isDark
              ? 'linear-gradient(180deg, #0b1320 0%, #111c2b 100%)'
              : `linear-gradient(180deg, ${lightPageBase} 0%, ${lightPageAlt} 100%)`,
          },
          '::selection': {
            backgroundColor: alpha('#f0934b', 0.3),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 4,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 4,
            border: `1px solid ${surfaceBorder}`,
            boxShadow: '0 18px 40px rgba(17, 26, 36, 0.08)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 4,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
}
