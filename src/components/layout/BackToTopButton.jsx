import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="absolute focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/85 text-primary-900 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-primary-950/85 dark:text-white"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
