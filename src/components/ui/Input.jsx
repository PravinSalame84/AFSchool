import { TextField } from '@mui/material'

export default function Input({ label, error, required, className, id, sx, ...rest }) {
  return (
    <TextField
      id={id}
      label={label}
      required={required}
      error={Boolean(error)}
      helperText={error || ' '}
      fullWidth
      size="medium"
      className={className}
      sx={{
        '& .MuiInputLabel-root': {
          fontWeight: 600,
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#ffffff',
        },
        ...sx,
      }}
      {...rest}
    />
  )
}
