const tones = {
  accent: 'text-accent',
  saffron: 'text-airforce-saffron dark:text-airforce-gold',
  cyan: 'text-airforce-cyan dark:text-airforce-gold',
  gold: 'text-airforce-gold',
  light: 'text-white/60',
}

export default function Eyebrow({ children, tone = 'accent', className = '', as: Tag = 'p' }) {
  return (
    <Tag className={`text-sm font-bold uppercase tracking-[0.28em] ${tones[tone] ?? tones.accent} ${className}`}>
      {children}
    </Tag>
  )
}
