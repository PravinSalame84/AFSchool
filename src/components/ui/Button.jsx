import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-accent-dark text-white shadow-soft hover:from-accent-dark hover:to-[#b96728]',
  dark:
    'bg-gradient-to-r from-secondary to-primary-700 text-white shadow-soft hover:from-primary-900 hover:to-primary-600',
  outline:
    'border border-primary-900/16 bg-gradient-to-br from-white/88 to-skyback-soft/70 text-primary-900 shadow-soft hover:from-primary-900 hover:to-primary-700 hover:text-white dark:border-white/12 dark:bg-gradient-to-br dark:from-primary-950/92 dark:to-primary-900/75 dark:text-white dark:hover:from-white dark:hover:to-slate-100 dark:hover:text-primary-950',
  ghost: 'border border-white/30 bg-white/10 text-white backdrop-blur-xl hover:bg-white/18',
  light:
    'bg-gradient-to-r from-white to-skyback-soft text-primary-900 shadow-soft hover:from-white hover:to-white dark:bg-white dark:text-primary-950',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-4 text-base',
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
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`group ${classes}`} {...rest}>
      {content}
    </button>
  )
}
