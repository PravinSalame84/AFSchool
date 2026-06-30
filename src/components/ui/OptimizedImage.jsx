import { memo, useEffect, useState } from 'react'
import { Box, Skeleton } from '@mui/material'

function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  sx,
  wrapperSx,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  return (
    <Box
      className={wrapperClassName}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...(Array.isArray(wrapperSx) ? Object.assign({}, ...wrapperSx) : wrapperSx),
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'action.hover',
          }}
        />
      )}

      <Box
        component="img"
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={className}
        sx={{
          width: '100%',
          height: '100%',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 500ms ease',
          objectFit: 'cover',
          ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
        }}
        {...rest}
      />
    </Box>
  )
}

export default memo(OptimizedImage)
