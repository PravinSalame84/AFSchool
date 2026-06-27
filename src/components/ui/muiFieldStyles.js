import { alpha } from '@mui/material/styles'

export function sharedTextFieldSx(theme) {
  const isDark = theme.palette.mode === 'dark'

  return {
    '& .MuiInputLabel-root': {
      fontWeight: 600,
      color: isDark ? alpha('#f7fbff', 0.84) : alpha('#161e25', 0.76),
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
        borderColor: isDark ? alpha('#bed1e2', 0.16) : alpha('#1d213c', 0.12),
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
        backgroundColor: isDark ? alpha('#ffffff', 0.06) : alpha('#1d213c', 0.04),
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
    border: `1px solid ${isDark ? alpha('#bed1e2', 0.12) : alpha('#1d213c', 0.08)}`,
    backgroundImage: 'none',
    backgroundColor: isDark ? alpha(theme.palette.background.paper, 0.98) : alpha('#ffffff', 0.98),
    boxShadow: '0 20px 50px -28px rgba(10, 28, 45, 0.34)',
    backdropFilter: 'blur(18px)',
  }
}
