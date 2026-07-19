import { Box } from '@mui/material'

export default function OptimizedImage({
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  sx,
  ...rest
}) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sx={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        ...sx,
      }}
      {...rest}
    />
  )
}
