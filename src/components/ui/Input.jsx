import { TextField } from '@mui/material'
import { BRAND_ALPHA } from '../../constants/brand'

export default function Input({ label, error, required, className, id, sx, children, ...rest }) {
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
          backgroundColor: BRAND_ALPHA.white58,
          backdropFilter: 'blur(16px)',
          borderRadius: 1,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </TextField>
  )
}
