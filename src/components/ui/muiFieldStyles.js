import { alpha } from '@mui/material/styles'

export function sharedTextFieldSx(theme) {
  const isDark = theme.palette.mode === 'dark'

  return {
    '& .MuiInputLabel-root': {
      fontWeight: 600,
      color: isDark ? alpha('#f7fbff', 0.84) : alpha('#111a24', 0.72),
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiInputLabel-root.Mui-error': {
      color: theme.palette.error.main,
    },
    '& .MuiFormHelperText-root': {
      marginLeft: '2px',
      marginRight: '2px',
      fontWeight: 500,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '18px',
      backgroundColor: isDark ? alpha(theme.palette.background.paper, 0.72) : alpha('#ffffff', 0.94),
      backdropFilter: 'blur(14px)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      '& fieldset': {
        borderColor: isDark ? alpha('#c8d4de', 0.16) : alpha('#111a24', 0.1),
      },
      '&:hover fieldset': {
        borderColor: alpha(theme.palette.secondary.main, 0.75),
      },
      '&.Mui-focused': {
        boxShadow: `0 0 0 4px ${alpha(theme.palette.secondary.main, 0.12)}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
        borderWidth: '1px',
      },
      '&.Mui-error': {
        backgroundColor: isDark ? alpha(theme.palette.error.main, 0.12) : alpha(theme.palette.error.main, 0.06),
      },
      '&.Mui-disabled': {
        backgroundColor: isDark ? alpha('#ffffff', 0.06) : alpha('#111a24', 0.035),
      },
    },
    '& .MuiOutlinedInput-input': {
      paddingTop: '13px',
      paddingBottom: '13px',
    },
    '& .MuiOutlinedInput-input.MuiInputBase-inputMultiline': {
      paddingTop: 0,
      paddingBottom: 0,
    },
    '& .MuiSelect-select': {
      paddingTop: '13px',
      paddingBottom: '13px',
    },
  }
}

export function dropdownPaperSx(theme) {
  const isDark = theme.palette.mode === 'dark'

  return {
    mt: 1,
    borderRadius: '18px',
    border: `1px solid ${isDark ? alpha('#c8d4de', 0.12) : alpha('#111a24', 0.08)}`,
    backgroundImage: 'none',
    backgroundColor: isDark ? alpha(theme.palette.background.paper, 0.98) : alpha('#ffffff', 0.98),
    boxShadow: '0 20px 50px -30px rgba(17, 26, 36, 0.24)',
    backdropFilter: 'blur(18px)',
  }
}
