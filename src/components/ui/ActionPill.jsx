import { Link as RouterLink } from 'react-router-dom'
import { Button, alpha, useTheme } from '@mui/material'

const getVariantStyles = (theme, variant) => {
  const gold = '#f0a84b'
  const honey = '#f7c56a'
  const navy = theme.palette.primary.main

  const base = {
    borderRadius: 4,
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.14em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    transition: '0.25s ease',
  }

  const variants = {
    footerSoft: {
      color: alpha('#fff', 0.82),
      fontSize: 12,
      px: 2,
      py: 1,
      border: `1px solid ${alpha('#fff', 0.14)}`,
      background: `linear-gradient(90deg, ${alpha('#fff', 0.12)}, ${alpha('#fff', 0.06)})`,
      '&:hover': {
        borderColor: alpha(gold, 0.5),
        background: `linear-gradient(90deg, ${alpha(gold, 0.2)}, ${alpha(honey, 0.15)})`,
        color: gold,
      },
    },

    footerText: {
      color: alpha('#fff', 0.82),
      fontSize: 13,
      px: 1,
      py: 0.5,
      '&:hover': {
        background: `linear-gradient(90deg, ${alpha(gold, 0.22)}, ${alpha(honey, 0.15)})`,
        color: gold,
      },
    },

    topbarSolid: {
      fontSize: 11,
      px: 2,
      py: 0.8,
      color: '#fff',
      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${navy})`,
      '&:hover': {
        background: `linear-gradient(90deg, ${gold}, ${honey})`,
        color: '#0b1f3a',
      },
    },

    topbarText: {
      fontSize: 12,
      color: theme.palette.text.primary,
      '&:hover': { color: gold },
    },

    contactSolid: {
      fontSize: 12,
      px: 2,
      py: 1,
      color: '#fff',
      background: navy,
      '&:hover': {
        background: `linear-gradient(90deg, ${gold}, ${honey})`,
        color: '#0b1f3a',
      },
    },

    contactOutline: {
      fontSize: 12,
      px: 2,
      py: 1,
      color: theme.palette.text.primary,
      border: `1px solid ${alpha(navy, 0.12)}`,
      background: 'transparent',
      '&:hover': {
        borderColor: alpha(gold, 0.5),
        background: `linear-gradient(90deg, ${alpha(gold, 0.2)}, ${alpha(honey, 0.15)})`,
        color: '#0b1f3a',
      },
    },
  }

  return { ...base, ...(variants[variant] || variants.footerSoft) }
}

export default function ActionPill({
  children,
  to,
  href,
  onClick,
  icon: Icon,
  variant = 'footerSoft',
  sx,
  ...rest
}) {
  const theme = useTheme()

  const style = getVariantStyles(theme, variant)

  const content = (
    <>
      {Icon && <Icon size={14} />}
      {children}
    </>
  )

  const commonProps = {
    sx: { ...style, ...sx },
    ...rest,
  }

  if (to) {
    return (
      <Button component={RouterLink} to={to} {...commonProps}>
        {content}
      </Button>
    )
  }

  if (href) {
    const external = href.startsWith('http')

    return (
      <Button
        component="a"
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...commonProps}
      >
        {content}
      </Button>
    )
  }

  return (
    <Button onClick={onClick} {...commonProps}>
      {content}
    </Button>
  )
}