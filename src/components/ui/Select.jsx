import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { dropdownPaperSx, sharedTextFieldSx } from './muiFieldStyles'

function normalizeOption(option) {
  if (typeof option === 'object' && option !== null) return option
  return { label: option, value: option }
}

export default function Select({
  label,
  error,
  helperText,
  required,
  options = [],
  placeholder,
  className = '',
  id,
  sx,
  ...rest
}) {
  return (
    <div className={className}>
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
              sx: (theme) => dropdownPaperSx(theme),
            },
          },
        }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={[
          (theme) => sharedTextFieldSx(theme),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...rest}
      >
        {placeholder ? (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        ) : null}
        {options.map((option) => {
          const normalized = normalizeOption(option)
          return (
            <MenuItem key={normalized.value} value={normalized.value}>
              {normalized.label}
            </MenuItem>
          )
        })}
      </TextField>
    </div>
  )
}
