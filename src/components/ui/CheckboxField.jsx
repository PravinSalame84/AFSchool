import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

export default function CheckboxField({
  label,
  error,
  helperText,
  className = '',
  sx,
  ...rest
}) {
  return (
    <FormControl
      error={Boolean(error)}
      className={className}
      component="fieldset"
      variant="standard"
      sx={{
        display: 'flex',
        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      }}
    >
      <FormControlLabel
        sx={{
          alignItems: 'flex-start',
          ml: 0,
          gap: 1,
        }}
        control={
          <Checkbox
            {...rest}
            sx={(theme) => ({
              mt: '2px',
              color:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary.light, 0.7)
                  : alpha(theme.palette.primary.main, 0.55),

              '&.Mui-checked': {
                color: theme.palette.secondary.main,
              },

              '&.MuiCheckbox-indeterminate': {
                color: theme.palette.secondary.main,
              },

              transition: 'all 0.2s ease',
            })}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={(theme) => ({
              color:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.78)
                  : theme.palette.text.primary,
              fontWeight: 500,
              lineHeight: 1.4,
            })}
          >
            {label}
          </Typography>
        }
      />

      {(error || helperText) && (
        <FormHelperText
          sx={(theme) => ({
            ml: '14px',
            mt: '4px',
            fontWeight: 500,
            color: error
              ? theme.palette.error.main
              : theme.palette.text.secondary,
          })}
        >
          {error || helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}
