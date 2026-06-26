import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-dark shadow-soft',
  dark: 'bg-primary-900 text-white hover:bg-primary-800 shadow-soft',
  outline: 'bg-transparent border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white',
  ghost: 'bg-white/10 text-white border border-white/40 hover:bg-white/20',
  light: 'bg-white text-primary-900 hover:bg-skyback-soft shadow-soft',
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
