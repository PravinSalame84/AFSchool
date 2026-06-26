export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleTone = tone === 'light' ? 'text-white' : 'text-primary-900'
  const subTone = tone === 'light' ? 'text-skyback-light/90' : 'text-primary-500'

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl sm:text-4xl font-bold leading-tight ${titleTone}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subTone}`}>{subtitle}</p>}
    </div>
  )
}
