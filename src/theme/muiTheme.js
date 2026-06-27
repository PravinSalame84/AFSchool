import { alpha, createTheme } from '@mui/material/styles'

export function createAppTheme(mode = 'light') {
  const isDark = mode === 'dark'

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
        default: isDark ? '#0b1320' : '#f5fbfd',
        paper: isDark ? '#111c2b' : '#ffffff',
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
      borderRadius: 18,
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
            backgroundColor: isDark ? '#0b1320' : '#f5fbfd',
            color: isDark ? '#f7fbff' : '#161e25',
          },
          '::selection': {
            backgroundColor: alpha('#f0934b', 0.3),
          },
        },
      },
    },
  })
}
