import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Button as MuiButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const variants = {
  primary: {
    backgroundColor: 'secondary.main',
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'secondary.dark',
    },
  },
  dark: {
    backgroundColor: 'primary.main',
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'primary.main',
    border: '2px solid',
    borderColor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'common.white',
      borderColor: 'primary.main',
    },
  },
  ghost: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'common.white',
    border: '1px solid rgba(255,255,255,0.35)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.18)',
      borderColor: 'rgba(255,255,255,0.55)',
    },
  },
  light: {
    backgroundColor: 'common.white',
    color: 'primary.main',
    '&:hover': {
      backgroundColor: '#e8f1f6',
    },
  },
}

const sizes = {
  sm: { px: 2, py: 0.9, fontSize: '0.875rem' },
  md: { px: 3, py: 1.25, fontSize: '0.9375rem' },
  lg: { px: 4, py: 1.5, fontSize: '1rem' },
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon = true,
  className,
  sx,
  ...rest
}) {
  const buttonProps = to
    ? { component: RouterLink, to }
    : href
      ? { component: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
      : {}

  return (
    <MuiButton
      type={type}
      onClick={onClick}
      endIcon={icon ? <ArrowForwardRoundedIcon /> : null}
      className={className}
      sx={{
        ...variants[variant],
        ...sizes[size],
        fontWeight: 700,
        borderRadius: '999px',
        boxShadow: variant === 'outline' || variant === 'ghost' ? 'none' : 3,
        width: rest.fullWidth ? '100%' : undefined,
        ...sx,
      }}
      {...buttonProps}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
