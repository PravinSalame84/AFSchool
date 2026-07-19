import { MenuItem, TextField } from '@mui/material'

export default function Select({ label, error, required, options = [], placeholder, className, id, sx, ...rest }) {
  return (
    <TextField
      select
      id={id}
      label={label}
      required={required}
      error={Boolean(error)}
      helperText={error || ' '}
      fullWidth
      className={className}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#ffffff',
        },
        ...sx,
      }}
      {...rest}
    >
      {placeholder ? <MenuItem value="">{placeholder}</MenuItem> : null}
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  )
}
