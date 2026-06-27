import MuiButton from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

const sizes = {
  sm: { px: 2.2, py: 1.1, fontSize: '0.875rem' },
  md: { px: 3, py: 1.45, fontSize: '0.95rem' },
  lg: { px: 4, py: 1.75, fontSize: '1rem' },
}

const variantSx = {
  primary: (theme) => ({
    color: '#fff',
    background: 'linear-gradient(90deg, #f0934b 0%, #d97a2e 100%)',
    boxShadow: '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      background: 'linear-gradient(90deg, #d97a2e 0%, #b96728 100%)',
    },
  }),
  dark: () => ({
    color: '#fff',
    background: 'linear-gradient(90deg, #1d213c 0%, #2a3946 100%)',
    boxShadow: '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      background: 'linear-gradient(90deg, #161e25 0%, #344656 100%)',
    },
  }),
  outline: (theme) => ({
    color: theme.palette.mode === 'dark' ? '#f7fbff' : '#161e25',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(14,20,24,0.92), rgba(29,33,60,0.75))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(228,246,251,0.78))',
    border: `1px solid ${theme.palette.mode === 'dark' ? alpha('#ffffff', 0.12) : alpha('#161e25', 0.12)}`,
    boxShadow: '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      color: theme.palette.mode === 'dark' ? '#161e25' : '#fff',
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(255,255,255,1), rgba(241,245,249,1))'
          : 'linear-gradient(90deg, #161e25 0%, #2a3946 100%)',
      borderColor: 'transparent',
    },
  }),
  ghost: () => ({
    color: '#fff',
    backgroundColor: alpha('#ffffff', 0.1),
    border: `1px solid ${alpha('#ffffff', 0.3)}`,
    backdropFilter: 'blur(16px)',
    '&:hover': {
      backgroundColor: alpha('#ffffff', 0.18),
    },
  }),
  light: (theme) => ({
    color: theme.palette.mode === 'dark' ? '#161e25' : '#161e25',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(241,245,249,1) 100%)'
        : 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,246,251,1) 100%)',
    boxShadow: '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
    },
  }),
}

/**
 * Polymorphic button: renders an internal <Link>, an external <a>, or a
 * native <button> depending on the props you pass.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  ...rest
}) {
  const renderProps = to
    ? { component: RouterLink, to }
    : href
      ? { component: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
      : { onClick, type }

  return (
    <MuiButton
      className={className}
      disableElevation
      endIcon={icon ? <ArrowRight className="button-arrow h-4 w-4" aria-hidden="true" /> : null}
      sx={(theme) => ({
        minWidth: 0,
        borderRadius: '999px',
        fontWeight: 700,
        letterSpacing: '0.01em',
        lineHeight: 1.1,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
        '& .button-arrow': {
          transition: 'transform 0.2s ease',
        },
        '&:hover .button-arrow': {
          transform: 'translateX(4px)',
        },
        ...sizes[size],
        ...(variantSx[variant] ?? variantSx.primary)(theme),
      })}
      {...renderProps}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
