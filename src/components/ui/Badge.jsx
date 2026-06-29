const tones = {
  accent: 'border border-accent/20 bg-gradient-to-r from-accent/16 to-accent-light/30 text-accent-dark dark:border-accent/20 dark:bg-gradient-to-r dark:from-accent/18 dark:to-transparent dark:text-accent-light',
  sky: 'border border-skyback/30 bg-gradient-to-r from-skyback-soft to-skyback-light text-primary-700 dark:border-skyback/18 dark:bg-gradient-to-r dark:from-skyback-light/14 dark:to-transparent dark:text-skyback-light',
  dark: 'border border-primary-900/10 bg-gradient-to-r from-primary-900 to-primary-700 text-white dark:border-white/16 dark:bg-gradient-to-r dark:from-skyback-light dark:to-white dark:text-primary-950',
  gold: 'border border-[#ffd707]/24 bg-gradient-to-r from-[#ffd707]/16 to-[#e7ab33]/28 text-[#8a6742] dark:border-[#ffd707]/16 dark:bg-gradient-to-r dark:from-[#ffd707]/18 dark:to-transparent dark:text-[#ffd707]',
  saffron:
    'border border-airforce-saffron/24 bg-gradient-to-r from-airforce-saffron/14 to-airforce-honey/28 text-airforce-brown dark:border-airforce-saffron/20 dark:bg-gradient-to-r dark:from-airforce-saffron/18 dark:to-transparent dark:text-airforce-gold',
  cyan: 'border border-airforce-cyan/24 bg-gradient-to-r from-airforce-cyan/14 to-skyback-light text-primary-800 dark:border-airforce-cyan/20 dark:bg-gradient-to-r dark:from-airforce-cyan/16 dark:to-transparent dark:text-airforce-cyan',
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
