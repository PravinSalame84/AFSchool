import { alpha, createTheme } from '@mui/material/styles'
import { brandColors } from './colorTokens'

export function createAppTheme(mode = 'light') {
  const isDark = mode === 'dark'
  const surfaceBorder = isDark ? alpha(brandColors.sky, 0.1) : alpha(brandColors.navy, 0.08)
  const lightPageBase = brandColors.skyBase
  const lightPageAlt = brandColors.sky

  return createTheme({
    palette: {
      mode,
      primary: {
        main: brandColors.navy,
        light: brandColors.slate,
        dark: brandColors.navyDeep,
      },
      secondary: {
        main: brandColors.amber,
        light: brandColors.amberSoft,
        dark: brandColors.amberDeep,
      },
      accent: {
        main: brandColors.gold,
      },
      sky: {
        main: brandColors.sky,
      },
      background: {
        default: isDark ? brandColors.navyPage : lightPageBase,
        paper: isDark ? brandColors.navyPaper : brandColors.skyPale,
      },
      text: {
        primary: isDark ? brandColors.skyBright : brandColors.ink,
        secondary: isDark ? brandColors.skyText : brandColors.slateSoft,
      },
      success: {
        main: brandColors.success,
      },
      error: {
        main: brandColors.red,
      },
      warning: {
        main: brandColors.orange,
      },
      info: {
        main: brandColors.slateInfo,
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
            backgroundColor: isDark ? brandColors.navyPage : lightPageBase,
            color: isDark ? brandColors.skyBright : brandColors.ink,
            backgroundImage: isDark
              ? `linear-gradient(180deg, ${brandColors.navyPage} 0%, ${brandColors.navyPaper} 100%)`
              : `linear-gradient(180deg, ${lightPageBase} 0%, ${lightPageAlt} 100%)`,
          },
          '::selection': {
            backgroundColor: alpha(brandColors.amber, 0.3),
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
