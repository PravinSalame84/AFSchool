const tones = {
  accent: 'bg-accent/10 text-accent-dark dark:text-accent',
  sky: 'bg-skyback-soft text-primary-700 dark:bg-white/10 dark:text-white',
  dark: 'bg-primary-900 text-white dark:bg-white dark:text-primary-950',
}

export default function Badge({ children, tone = 'accent', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
