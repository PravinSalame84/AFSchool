import { Link as RouterLink } from 'react-router-dom'

const variants = {
  footerSoft:
    'focus-ring inline-flex items-center gap-2 rounded-full border border-white/14 bg-gradient-to-r from-white/12 to-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/82 transition hover:border-airforce-gold/34 hover:bg-gradient-to-r hover:from-airforce-gold/20 hover:to-airforce-honey/16 hover:text-airforce-gold',
  footerText:
    'focus-ring inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm text-white/82 transition hover:bg-gradient-to-r hover:from-airforce-gold/22 hover:to-airforce-honey/16 hover:text-airforce-gold',
  topbarSolid:
    'focus-ring rounded-full bg-gradient-to-r from-secondary to-primary-700 px-4 py-1.5 text-[11px] text-white transition hover:from-airforce-gold hover:to-airforce-honey hover:text-secondary dark:bg-white dark:text-primary-950',
  topbarText:
    'focus-ring flex items-center gap-1.5 transition hover:text-airforce-gold dark:hover:text-airforce-gold',
  contactSolid:
    'focus-ring inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-gradient-to-r hover:from-airforce-gold hover:to-airforce-honey hover:text-secondary dark:bg-white dark:text-primary-950',
  contactOutline:
    'focus-ring inline-flex items-center gap-2 rounded-full border border-primary-900/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-800 transition hover:border-airforce-gold/34 hover:bg-gradient-to-r hover:from-airforce-gold/20 hover:to-airforce-honey/16 hover:text-airforce-brown dark:border-white/10 dark:text-white dark:hover:text-airforce-gold',
}

export default function ActionPill({
  children,
  to,
  href,
  onClick,
  icon: Icon,
  className = '',
  variant = 'footerSoft',
  ...rest
}) {
  const content = (
    <>
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </>
  )

  const classes = `${variants[variant] ?? variants.footerSoft} ${className}`

  if (to) {
    return (
      <RouterLink to={to} className={classes} {...rest}>
        {content}
      </RouterLink>
    )
  }

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
