import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Button as MuiButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { BRAND_ALPHA, BRAND_NEUTRALS } from '../../constants/brand'

const variants = {
  primary: {
    backgroundColor: 'secondary.main',
    color: BRAND_NEUTRALS.white,
    '&:hover': {
      backgroundColor: 'secondary.dark',
    },
  },
  dark: {
    backgroundColor: 'primary.main',
    color: BRAND_NEUTRALS.white,
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
      color: BRAND_NEUTRALS.white,
      borderColor: 'primary.main',
    },
  },
  ghost: {
    backgroundColor: BRAND_ALPHA.white1,
    color: BRAND_NEUTRALS.white,
    border: `1px solid ${BRAND_ALPHA.white35}`,
    '&:hover': {
      backgroundColor: BRAND_ALPHA.white18,
      borderColor: BRAND_ALPHA.white55,
    },
  },
  light: {
    backgroundColor: BRAND_NEUTRALS.white,
    color: 'primary.main',
    '&:hover': {
      backgroundColor: BRAND_NEUTRALS.sectionSoft,
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
