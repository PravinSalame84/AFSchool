import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

export default function Logo({ tone = 'dark', className = '' }) {
  const titleTone = tone === 'light' ? 'text-white' : 'brand-highlight'
  const subTone = tone === 'light' ? 'text-white/68' : 'text-primary-500 dark:text-sky-200/78'
  const chipTone =
    tone === 'light'
      ? 'border-white/14 bg-white/8 text-white/78'
      : 'brand-chip text-primary-600 dark:text-sky-200/82'

  return (
    <Link
      to="/"
      className={`focus-ring logo-plaque flex items-center gap-3 px-3 py-3 sm:gap-4 sm:px-4 ${className}`}
      aria-label="Air Force School home"
    >
      <div className={`logo-core flex h-14 w-14 flex-shrink-0 items-center justify-center border ${chipTone}`}>
        <svg viewBox="0 0 72 72" className="h-11 w-11 flex-shrink-0">
          <defs>
            <linearGradient id="logoSky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ea3c2" />
              <stop offset="55%" stopColor="#274f73" />
              <stop offset="100%" stopColor="#111f34" />
            </linearGradient>
            <radialGradient id="logoGlow" cx="30%" cy="28%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="36" cy="36" r="34" fill="url(#logoSky)" />
          <circle cx="29" cy="23" r="15" fill="url(#logoGlow)" opacity="0.55" />
          <path d="M36 15l16 10-16 10-16-10 16-10Z" fill="#ffd707" />
          <path d="M24 29v12c0 5 6 10 12 10s12-5 12-10V29l-12 6-12-6Z" fill="#eef6fb" />
          <path d="M15 40c4 1 8 1 12 0M45 40c4 1 8 1 12 0" stroke="#ff671f" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <span className="leading-none">
        <span className={`block font-display text-[1.56rem] font-bold uppercase leading-[0.92] ${titleTone}`}>
          <span className={tone === 'light' ? '' : 'drop-shadow-[0_8px_18px_rgba(24,58,88,0.14)]'}>
            {siteConfig.brandName}
          </span>
        </span>
        <span className={`mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] ${subTone}`}>
          {siteConfig.brandSuffix}
        </span>
      </span>
    </Link>
  )
}
