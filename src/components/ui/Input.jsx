import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { sharedTextFieldSx } from './muiFieldStyles'

export default function Input({
  label,
  error,
  helperText,
  required,
  id,
  startAdornment,
  endAdornment,
  sx,
  ...rest
}) {
  return (
    <TextField
      id={id}
      label={label}
      required={required}
      error={Boolean(error)}
      helperText={error || helperText}
      fullWidth
      size="small"

      // ✅ modern MUI pattern (preferred over InputProps)
      slotProps={{
        input: {
          startAdornment: startAdornment ? (
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          ) : undefined,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">
              {endAdornment}
            </InputAdornment>
          ) : undefined,
        },
      }}

      sx={(theme) => ({
        ...sharedTextFieldSx(theme),
        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      })}

      {...rest}
    />
  )
}