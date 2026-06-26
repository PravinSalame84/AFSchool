import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/72 text-primary-800 shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-primary-950/70 dark:text-white ${className}`}
    >
      {isDark ? <SunMedium className="h-4.5 w-4.5" /> : <MoonStar className="h-4.5 w-4.5" />}
    </button>
  )
}
