import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { sharedTextFieldSx } from './muiFieldStyles'

export default function Input({
  label,
  error,
  helperText,
  required,
  className = '',
  id,
  startAdornment,
  endAdornment,
  sx,
  ...rest
}) {
  const adornmentProps = {}

  if (startAdornment) {
    adornmentProps.startAdornment = <InputAdornment position="start">{startAdornment}</InputAdornment>
  }

  if (endAdornment) {
    adornmentProps.endAdornment = <InputAdornment position="end">{endAdornment}</InputAdornment>
  }

  return (
    <div className={className}>
      <TextField
        id={id}
        label={label}
        required={required}
        error={Boolean(error)}
        helperText={error || helperText}
        fullWidth
        size="small"
        InputProps={adornmentProps}
        sx={[
          (theme) => sharedTextFieldSx(theme),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...rest}
      />
    </div>
  )
}
