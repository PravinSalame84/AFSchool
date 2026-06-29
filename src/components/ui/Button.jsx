import MuiButton from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Size scale aligned with MUI system (cleaner than px overrides)
 */
const sizeMap = {
  sm: {
    fontSize: '0.8rem',
    padding: '6px 14px',
  },
  md: {
    fontSize: '0.9rem',
    padding: '10px 18px',
  },
  lg: {
    fontSize: '1rem',
    padding: '12px 22px',
  },
}

/**
 * Centralized Air Force style tokens (cleaner + reusable)
 */
const getVariant = (theme, variant) => {
  const isDark = theme.palette.mode === 'dark'

  const gold = '#ffd707'
  const brown = '#8a6742'
  const navy = '#1d213c'

  const gradients = {
    primary: `linear-gradient(90deg, ${gold}, #e7ab33)`,
    dark: isDark
      ? `linear-gradient(90deg, rgba(255,215,7,0.98), rgba(231,171,51,0.94))`
      : `linear-gradient(90deg, ${navy}, #2a3946)`,
    outline: isDark
      ? `linear-gradient(135deg, rgba(16,24,36,0.94), rgba(35,49,67,0.82))`
      : `linear-gradient(135deg, rgba(255,255,255,0.96), rgba(250,244,220,0.86))`,
    ghost: isDark
      ? `linear-gradient(120deg, rgba(255,215,7,0.18), rgba(231,171,51,0.10))`
      : `linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))`,
    light: `linear-gradient(90deg, #ffffff, #f8f4dc)`,
  }

  const styles = {
    primary: {
      color: navy,
      background: gradients.primary,
      boxShadow: '0 10px 22px rgba(15, 35, 56, 0.16)',
    },
    dark: {
      color: isDark ? navy : '#fff',
      background: gradients.dark,
    },
    outline: {
      color: isDark ? gold : brown,
      background: gradients.outline,
      border: `1px solid ${alpha(isDark ? gold : brown, 0.25)}`,
    },
    ghost: {
      color: '#fff',
      background: gradients.ghost,
      backdropFilter: 'blur(16px)',
      border: `1px solid ${alpha('#fff', 0.18)}`,
    },
    light: {
      color: brown,
      background: gradients.light,
      border: `1px solid ${alpha('#fff', 0.6)}`,
    },
  }

  return styles[variant] || styles.primary
}

/**
 * Clean polymorphic MUI Button
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = true,
  sx,
  ...rest
}) {
  return (
    <MuiButton
      component={to ? RouterLink : href ? 'a' : 'button'}
      to={to}
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      endIcon={icon ? <ArrowRight size={16} /> : null}
      disableElevation
      sx={(theme) => ({
        borderRadius: 4,
        textTransform: 'uppercase',
        fontWeight: 700,
        letterSpacing: '0.06em',
        lineHeight: 1.35,
        whiteSpace: 'normal',
        textAlign: 'center',
        transition: 'all 0.25s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        ...sizeMap[size],
        ...getVariant(theme, variant),

        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
        },

        '&:active': {
          transform: 'scale(0.98)',
        },

        '& .MuiButton-endIcon': {
          transition: 'transform 0.2s ease',
        },

        '&:hover .MuiButton-endIcon': {
          transform: 'translateX(4px)',
        },

        ...(Array.isArray(sx) ? Object.assign({}, ...sx) : sx),
      })}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
