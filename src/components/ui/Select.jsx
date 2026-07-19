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
          backgroundColor: 'rgba(255,255,255,0.58)',
          backdropFilter: 'blur(16px)',
          borderRadius: 3,
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
