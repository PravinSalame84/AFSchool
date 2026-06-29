import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { dropdownPaperSx, sharedTextFieldSx } from './muiFieldStyles'

function normalizeOption(option) {
  if (option && typeof option === 'object') return option
  return { label: option, value: option }
}

export default function Select({
  label,
  error,
  helperText,
  required,
  options = [],
  placeholder,
  id,
  sx,
  ...rest
}) {
  return (
    <TextField
      select
      id={id}
      label={label}
      required={required}
      error={Boolean(error)}
      helperText={error || helperText}
      fullWidth
      size="small"

      SelectProps={{
        displayEmpty: Boolean(placeholder),
        MenuProps: {
          PaperProps: {
            sx: dropdownPaperSx,
          },
        },
      }}

      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}

      sx={(theme) => ({
        ...sharedTextFieldSx(theme),
        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      })}

      {...rest}
    >
      {placeholder && (
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
      )}

      {options.map((option) => {
        const { label, value } = normalizeOption(option)

        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        )
      })}
    </TextField>
  )
}