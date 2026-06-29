import MuiButton from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

const sizes = {
  sm: { px: 3.2, py: 1.35, fontSize: '0.875rem' },
  md: { px: 4.2, py: 1.7, fontSize: '0.95rem' },
  lg: { px: 5, py: 2, fontSize: '1rem' },
}

const variantSx = {
  primary: (theme) => ({
    color: '#1d213c',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(90deg, #ffd707 0%, #e7ab33 100%)'
        : 'linear-gradient(90deg, #ffd707 0%, #e7ab33 100%)',
    border: `1px solid ${theme.palette.mode === 'dark' ? alpha('#ffffff', 0.08) : 'transparent'}`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 14px 30px rgba(0, 0, 0, 0.34)'
        : '0 10px 20px rgba(15, 35, 56, 0.16)',
    '&:hover': {
      background: 'linear-gradient(90deg, #ffe45c 0%, #ffd707 45%, #e7ab33 100%)',
      boxShadow:
        theme.palette.mode === 'dark'
          ? '0 18px 34px rgba(0, 0, 0, 0.4)'
          : '0 14px 28px rgba(15, 35, 56, 0.2)',
    },
  }),
  dark: (theme) => ({
    color: theme.palette.mode === 'dark' ? '#1d213c' : '#fff',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(90deg, rgba(255,215,7,0.98) 0%, rgba(231,171,51,0.94) 100%)'
        : 'linear-gradient(90deg, #1d213c 0%, #2a3946 100%)',
    border: `1px solid ${
      theme.palette.mode === 'dark' ? alpha('#ffffff', 0.18) : alpha('#1d213c', 0.04)
    }`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 14px 30px rgba(0, 0, 0, 0.28)'
        : '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(90deg, rgba(255,228,92,1) 0%, rgba(255,215,7,0.98) 100%)'
          : 'linear-gradient(90deg, #8a6742 0%, #e7ab33 100%)',
      boxShadow:
        theme.palette.mode === 'dark'
          ? '0 18px 34px rgba(0, 0, 0, 0.34)'
          : '0 14px 28px rgba(17, 35, 56, 0.16)',
    },
  }),
  outline: (theme) => ({
    color: theme.palette.mode === 'dark' ? '#ffd707' : '#8a6742',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(16,24,36,0.94), rgba(35,49,67,0.82))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(250,244,220,0.86))',
    border: `1px solid ${theme.palette.mode === 'dark' ? alpha('#ffd707', 0.24) : alpha('#8a6742', 0.18)}`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 28px rgba(0, 0, 0, 0.26)'
        : '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      color: '#1d213c',
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(255,228,92,1), rgba(255,215,7,1))'
          : 'linear-gradient(90deg, #ffd707 0%, #e7ab33 100%)',
      borderColor: 'transparent',
      boxShadow:
        theme.palette.mode === 'dark'
          ? '0 18px 34px rgba(0, 0, 0, 0.32)'
          : '0 14px 28px rgba(17, 35, 56, 0.16)',
    },
  }),
  ghost: (theme) => ({
    color: '#fff',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(120deg, rgba(186,226,238,0.12), rgba(255,255,255,0.04))'
        : 'linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
    border: `1px solid ${theme.palette.mode === 'dark' ? alpha('#ffffff', 0.18) : alpha('#ffffff', 0.3)}`,
    backdropFilter: 'blur(16px)',
    boxShadow: theme.palette.mode === 'dark' ? '0 10px 24px rgba(0, 0, 0, 0.22)' : 'none',
    '&:hover': {
      background:
        theme.palette.mode === 'dark'
          ? 'linear-gradient(120deg, rgba(255,215,7,0.22), rgba(231,171,51,0.12))'
          : 'linear-gradient(120deg, rgba(255,248,214,0.34), rgba(231,171,51,0.18))',
    },
  }),
  light: (theme) => ({
    color: '#8a6742',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(90deg, rgba(255,240,184,0.98) 0%, rgba(255,215,7,0.94) 100%)'
        : 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,244,220,1) 100%)',
    border: `1px solid ${theme.palette.mode === 'dark' ? alpha('#ffffff', 0.18) : alpha('#ffffff', 0.6)}`,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 14px 30px rgba(0, 0, 0, 0.28)'
        : '0 10px 28px rgba(17, 35, 56, 0.1)',
    '&:hover': {
      color: '#1d213c',
      background: 'linear-gradient(90deg, rgba(255,228,92,1) 0%, rgba(255,215,7,1) 100%)',
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
        fontWeight: 600,
        letterSpacing: '0.01em',
        lineHeight: 1.1,
        textTransform: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
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
