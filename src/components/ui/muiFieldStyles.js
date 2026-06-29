import { alpha } from '@mui/material/styles'

export const sharedTextFieldSx = (theme) => {
  const { palette } = theme
  const isDark = palette.mode === 'dark'

  const border = isDark
    ? alpha('#c8d4de', 0.16)
    : alpha('#111a24', 0.1)

  const focusRing = alpha(palette.secondary.main, 0.14)

  return {
    '& .MuiInputLabel-root': {
      fontWeight: 600,
      color: isDark
        ? alpha('#f7fbff', 0.84)
        : alpha('#111a24', 0.72),
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: palette.secondary.main,
    },

    '& .MuiInputLabel-root.Mui-error': {
      color: palette.error.main,
    },

    '& .MuiFormHelperText-root': {
      mx: '2px',
      fontWeight: 500,
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: 4, // MUI spacing unit (~18px)
      backgroundColor: isDark
        ? alpha(palette.background.paper, 0.72)
        : alpha('#fff', 0.94),

      backdropFilter: 'blur(14px)',
      transition: theme.transitions.create([
        'transform',
        'box-shadow',
        'border-color',
      ]),

      '& fieldset': {
        borderColor: border,
      },

      '&:hover fieldset': {
        borderColor: alpha(palette.secondary.main, 0.6),
      },

      '&.Mui-focused': {
        boxShadow: `0 0 0 4px ${focusRing}`,
      },

      '&.Mui-focused fieldset': {
        borderColor: palette.secondary.main,
      },

      '&.Mui-error': {
        backgroundColor: isDark
          ? alpha(palette.error.main, 0.12)
          : alpha(palette.error.main, 0.06),
      },

      '&.Mui-disabled': {
        backgroundColor: isDark
          ? alpha('#fff', 0.06)
          : alpha('#111a24', 0.035),
      },
    },

    '& .MuiOutlinedInput-input': {
      py: 1.6,
    },

    '& .MuiSelect-select': {
      py: 1.6,
    },

    '& .MuiOutlinedInput-input.MuiInputBase-inputMultiline': {
      py: 0,
    },
  }
}

export const dropdownPaperSx = (theme) => {
  const { palette } = theme
  const isDark = palette.mode === 'dark'

  return {
    mt: 1,
    borderRadius: 4,

    border: `1px solid ${
      isDark ? alpha('#c8d4de', 0.12) : alpha('#111a24', 0.08)
    }`,

    backgroundImage: 'none',
    backgroundColor: isDark
      ? alpha(palette.background.paper, 0.98)
      : alpha('#fff', 0.98),

    boxShadow: theme.shadows[10],

    backdropFilter: 'blur(18px)',

    transition: theme.transitions.create(['opacity', 'transform']),
  }
}