import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleTone = tone === 'light' ? 'text-airforce-gold' : 'text-airforce-brown dark:text-airforce-honey'
  const subTone = tone === 'light' ? 'text-skyback-light/90' : 'text-airforce-brown/86 dark:text-airforce-honey/88'

  return (
    <Box className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <Box component="span" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-airforce-brown dark:text-airforce-gold">
          <Box component="span" className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-[#ffd707] to-[#e7ab33]" aria-hidden="true" />
          {eyebrow}
        </Box>
      )}
      <Typography component="h2" className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${titleTone}`}>
        {title}
      </Typography>
      {subtitle && (
        <Typography component="p" className={`mt-4 text-base sm:text-lg leading-relaxed ${subTone}`}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
